import { useState, useCallback } from "react";
import { SMOOOTH } from "@/styles/transitions";

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

    const setExpanded = useCallback(
        (v: boolean) => {
            if (expandedProp === undefined) setExpandedInternal(v);
            onExpandedChange?.(v);
        },
        [expandedProp, onExpandedChange]
    );

    const contentMotion = {
        initial: false,
        animate: expanded
            ? { height: "auto" as const, opacity: 1, y: 0 }
            : { height: 0, opacity: 0, y: -6 },
        transition: SMOOOTH,
        style: { overflow: "hidden" as const },
    };

    const toggle = useCallback(
        () => setExpanded(!expanded),
        [expanded, setExpanded]
    );

    const close = useCallback(
        () => setExpanded(false),
        [expanded, setExpanded]
    );

    return { expanded, toggle, close, contentMotion };
}
