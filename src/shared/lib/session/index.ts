import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { SessionState } from "./types";
import { api } from "../api";

export const useSession = create<SessionState>()(
    persist(
        (set, _get) => ({
            isAuthenticated: false,
            user: null,

            signIn: async (_phoneNumber: string) => {
                const res = await api.getByPhoneNumber("010-1234-1234");
                const json = res;

                set({
                    isAuthenticated: true,
                    user: {
                        phoneNumber: "010-1234-1234",
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
