import { useCallback, useEffect, useRef, useState } from "react";

type UseCollapsibleArgs = {
    expandedProp?: boolean;
    defaultExpanded?: boolean;
    onExpandedChange?: (e: boolean) => void;
};

export function useCollapsible({
    expandedProp,
    defaultExpanded = false,
    onExpandedChange,
}: UseCollapsibleArgs) {
    const [expandedInternal, setExpandedInternal] = useState(defaultExpanded);
    const expanded = expandedProp ?? expandedInternal;

    const setExpanded = (v: boolean) => {
        if (expandedProp === undefined) setExpandedInternal(v);
        onExpandedChange?.(v);
    };

    const contentRef = useRef<HTMLDivElement>(null);

    const toggle = useCallback(() => {
        const el = contentRef.current;
        if (!el) return;

        const startHeight = el.getBoundingClientRect().height;
        const willOpen = !expanded;

        if (willOpen) {
            el.style.height = "0px";
            el.style.opacity = "0";
            el.style.transform = "translateY(-2px)";
            el.style.overflow = "hidden";

            requestAnimationFrame(() => {
                const target = el.scrollHeight;
                el.style.transition =
                    "height 200ms ease, opacity 200ms ease, transform 200ms ease";
                el.style.height = `${target}px`;
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                setExpanded(true);
            });
        } else {
            el.style.height = `${startHeight}px`;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.overflow = "hidden";
            el.style.transition =
                "height 200ms ease, opacity 200ms ease, transform 200ms ease";

            requestAnimationFrame(() => {
                el.style.height = "0px";
                el.style.opacity = "0";
                el.style.transform = "translateY(-2px)";
            });

            setExpanded(false);
        }
    }, [expanded, setExpanded]);

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;

        const onEnd = (e: TransitionEvent) => {
            if (e.propertyName !== "height") return;
            el.style.transition = "";
            if (expanded) {
                el.style.height = "auto";
                el.style.overflow = "";
            }
        };
        el.addEventListener("transitionend", onEnd);
        return () => el.removeEventListener("transitionend", onEnd);
    }, [expanded]);

    const contentStyle: React.CSSProperties = expanded
        ? { height: "auto", opacity: 1, transform: "translateY(0)" }
        : {
              height: 0,
              opacity: 0,
              transform: "translateY(-2px)",
              overflow: "hidden",
          };

    return { expanded, toggle, contentRef, contentStyle };
}
