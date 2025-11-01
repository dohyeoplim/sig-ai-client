import { useEffect, useMemo, useState } from "react";
import type { ModalControls, ModalEntry } from "./types";
import FocusTrap from "./FocusTrap";
import { X } from "lucide-react";

export default function ModalLayer({
    entry,
    onClose,
    z,
}: {
    entry: ModalEntry;
    onClose: (v?: unknown) => void;
    z: number;
}) {
    const { options, renderer } = entry;
    const dismissible = options.dismissible !== false;
    useEffect(() => {
        if (!dismissible) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [dismissible, onClose]);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const t = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(t);
    }, []);
    const controls: ModalControls = useMemo(
        () => ({ close: onClose }),
        [onClose]
    );
    const content =
        typeof renderer === "function"
            ? (renderer as (c: ModalControls) => React.ReactNode)(controls)
            : renderer;

    return (
        <div
            role="presentation"
            className="fixed inset-0"
            style={{ zIndex: z }}
            onMouseDown={(e) => {
                if (!dismissible) return;
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                aria-hidden
                className={`absolute inset-0 bg-black/25 transition-all ${
                    mounted ? "opacity-100" : "opacity-0"
                }`}
            />
            <div
                role="dialog"
                aria-modal="true"
                aria-label={options.ariaLabel}
                aria-labelledby={
                    options.title ? `modal-title-${entry.id}` : undefined
                }
                className="absolute inset-0 grid place-items-center p-5 pointer-events-none"
            >
                <FocusTrap active>
                    <div
                        className={`pointer-events-auto w-80 p-5 bg-white rounded-2xl transition-all duration-200
                            ${
                                mounted
                                    ? "opacity-100 translate-y-0 scale-100"
                                    : "opacity-95 translate-y-2 scale-95"
                            } flex flex-col gap-2`}
                    >
                        {(options.title || dismissible) && (
                            <div className="flex items-center justify-between">
                                {options.title && (
                                    <h2
                                        id={`modal-title-${entry.id}`}
                                        className="font-body03 text-grey-900"
                                    >
                                        {options.title}
                                    </h2>
                                )}
                                {dismissible && (
                                    <button
                                        onClick={() => onClose()}
                                        aria-label="Close"
                                        className="text-grey-800 hover:text-grey-700 transition cursor-pointer"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>
                        )}
                        <div className="overflow-auto">{content}</div>
                    </div>
                </FocusTrap>
            </div>
        </div>
    );
}
