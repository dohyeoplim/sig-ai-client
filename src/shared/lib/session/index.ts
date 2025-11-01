import { create } from "zustand";
import type { SessionState, SessionUser } from "./types";

const STORAGE_KEY = "sigai.session.v1";

type Actions = {
    hydrate: () => void;
    signIn: (phoneNumber: string) => Promise<void>;
    signOut: () => void;
};

export const useSession = create<SessionState & Actions>((set, _get) => ({
    isAuthenticated: false,
    user: null,

    hydrate: () => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        try {
            const saved = JSON.parse(raw) as SessionState;
            if (
                saved?.user?.phoneNumber &&
                typeof saved?.user?.storeId === "number"
            ) {
                set(saved);
            } else {
                localStorage.removeItem(STORAGE_KEY);
            }
        } catch {
            localStorage.removeItem(STORAGE_KEY);
        }
    },

    signIn: async (phoneNumber: string) => {
        const res = await fetch(
            `${
                import.meta.env.VITE_API_URL
            }/api/v1/member/phone/${encodeURIComponent(phoneNumber)}`
        );
        if (!res.ok) throw new Error("User not found");
        const json = await res.json();

        const user: SessionUser = {
            phoneNumber,
            storeId: json?.data?.storeId,
            name: json?.data?.name ?? null,
        };

        const next: SessionState = { isAuthenticated: true, user };
        set(next);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    },

    signOut: () => {
        set({ isAuthenticated: false, user: null });
        localStorage.removeItem(STORAGE_KEY);
    },
}));
