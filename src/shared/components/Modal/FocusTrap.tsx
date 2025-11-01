import { useEffect, useRef } from "react";

export default function FocusTrap({
    active,
    children,
}: {
    active: boolean;
    children: React.ReactNode;
}) {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const lastFocused = useRef<HTMLElement | null>(null);
    useEffect(() => {
        if (!active) return;
        lastFocused.current = (document.activeElement as HTMLElement) ?? null;
        const root = rootRef.current;
        if (!root) return;
        const focusables = root.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        (focusables[0] ?? root).focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;
            const nodes = Array.from(
                root.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                )
            ).filter((el) => el.offsetParent !== null);
            if (nodes.length === 0) {
                e.preventDefault();
                (root as HTMLElement).focus();
                return;
            }
            const first = nodes[0];
            const last = nodes[nodes.length - 1];
            const isShift = e.shiftKey;
            const current = document.activeElement as HTMLElement;
            if (!isShift && current === last) {
                e.preventDefault();
                first.focus();
            } else if (isShift && current === first) {
                e.preventDefault();
                last.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("keydown", onKey);
            lastFocused.current?.focus?.();
        };
    }, [active]);
    return (
        <div ref={rootRef} tabIndex={-1}>
            {children}
        </div>
    );
}
