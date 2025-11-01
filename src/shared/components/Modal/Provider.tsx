import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type {
    ModalOptions,
    OpenModal,
    ModalRenderer,
    ModalEntry,
} from "./types";
import { ModalContext } from "./Context";
import ModalLayer from "./ModalLayer";

let idSeq = 1;

function useBodyScrollLock(locked: boolean) {
    useEffect(() => {
        const { body } = document;
        const prev = body.style.overflow;
        if (locked) body.style.overflow = "hidden";
        return () => {
            body.style.overflow = prev;
        };
    }, [locked]);
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [stack, setStack] = useState<ModalEntry[]>([]);

    const open: OpenModal = useCallback(
        (renderer: ModalRenderer, options?: ModalOptions) => {
            return new Promise((resolve) => {
                const entry: ModalEntry = {
                    id: idSeq++,
                    renderer,
                    options: {
                        title: options?.title ?? "",
                        ariaLabel: options?.ariaLabel ?? "",
                        dismissible: options?.dismissible ?? true,
                        onClose: options?.onClose,
                    },
                    resolve,
                };
                setStack((s) => [...s, entry]);
            });
        },
        []
    );

    const closeById = useCallback((id: number, value?: unknown) => {
        setStack((s) => {
            const next = s.filter((m) => m.id !== id);
            const closed = s.find((m) => m.id === id);
            setTimeout(() => {
                closed?.options.onClose?.();
                closed?.resolve(value);
            }, 0);
            return next;
        });
    }, []);

    const ctxValue = useMemo(() => ({ open }), [open]);
    useBodyScrollLock(stack.length > 0);

    return (
        <ModalContext.Provider value={ctxValue}>
            {children}
            {createPortal(
                <div
                    aria-live="polite"
                    id="modal-root"
                    className="relative z-1000"
                >
                    {stack.map((entry, idx) => (
                        <ModalLayer
                            key={entry.id}
                            entry={entry}
                            onClose={(v) => closeById(entry.id, v)}
                            z={1000 + idx}
                        />
                    ))}
                </div>,
                document.body
            )}
        </ModalContext.Provider>
    );
}
