import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { SessionState } from "./types";

export const useSession = create<SessionState>()(
    persist(
        (set, _get) => ({
            isAuthenticated: false,
            user: null,

            signIn: async (phoneNumber: string) => {
                const res = await fetch(
                    `${
                        import.meta.env.VITE_API_URL
                    }/api/v1/member/phone/${encodeURIComponent(phoneNumber)}`
                );
                if (!res.ok) throw new Error("User not found");
                const json = await res.json();

                set({
                    isAuthenticated: true,
                    user: {
                        phoneNumber,
                        storeId: json?.data?.storeId,
                        name: json?.data?.name ?? null,
                    },
                });
            },

            signOut: () => set({ isAuthenticated: false, user: null }),
        }),
        {
            name: "sigai.session.v1",
            storage: createJSONStorage(() => localStorage),
            partialize: (s) => ({
                isAuthenticated: s.isAuthenticated,
                user: s.user,
            }),
            onRehydrateStorage: () => (_state) => {},
        }
    )
);
