import { create } from "zustand";

type State = { expanded: boolean };

type Actions = {
    setExpanded: (v: boolean) => void;
    toggle: () => void;
    close: () => void;
    open: () => void;
};

export const useHeaderMenu = create<State & Actions>((set) => ({
    expanded: false,
    setExpanded: (v) => set({ expanded: v }),
    toggle: () => set((s) => ({ expanded: !s.expanded })),
    open: () => set({ expanded: true }),
    close: () => set({ expanded: false }),
}));
