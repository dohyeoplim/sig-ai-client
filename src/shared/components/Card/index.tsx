import type { CardProps } from "./types";
import { useCollapsible } from "@/shared/hooks/useCollapsible";
import { cardThemes } from "./theme";
import { CardHeader } from "./CardHeader";
import { motion } from "motion/react";
import { SMOOOTH } from "@/styles/transitions";

export default function Card({
    cardTitle,
    cardDescription,
    cardTheme = "plain",
    isExpandable = false,
    defaultExpanded = false,
    expanded: expandedProp,
    onExpandedChange,
    className,
    children,
}: CardProps) {
    const { expanded, toggle, contentMotion } = useCollapsible({
        expandedProp,
        defaultExpanded,
        onExpandedChange,
    });

    return (
        <motion.div
            layout
            transition={SMOOOTH}
            className={`rounded-xl ${cardThemes[cardTheme]} ${className ?? ""}`}
        >
            <CardHeader
                title={cardTitle}
                description={cardDescription}
                isExpandable={isExpandable}
                expanded={expanded}
                onToggle={toggle}
            />

            <motion.div {...contentMotion}>
                <div className="px-4 pt-0 pb-4">{children}</div>
            </motion.div>
        </motion.div>
    );
}
