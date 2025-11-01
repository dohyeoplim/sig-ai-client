import { createContext, useContext } from "react";
import type { OpenModal } from "./types";
export const ModalContext = createContext<{ open: OpenModal } | null>(null);
export function useModal() {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("useModal() must be used within <ModalProvider>");
    return ctx;
}
