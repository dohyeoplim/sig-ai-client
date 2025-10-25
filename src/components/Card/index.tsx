import type { CardProps } from "./type";
import { useCollapsible } from "./hook";
import { cardThemes } from "./theme";
import { CardHeader } from "./CardHeader";

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
    const { expanded, toggle, contentRef, contentStyle } = useCollapsible({
        expandedProp,
        defaultExpanded,
        onExpandedChange,
    });

    return (
        <div
            className={`rounded-xl ${cardThemes[cardTheme]} ${
                isExpandable && "cursor-pointer"
            } ${className ?? ""}`}
            onClick={isExpandable ? toggle : undefined}
        >
            <CardHeader
                title={cardTitle}
                description={cardDescription}
                isExpandable={isExpandable}
                expanded={expanded}
                onToggle={toggle}
            />

            <div ref={contentRef} style={contentStyle}>
                <div className="px-4 pb-4 pt-0">{children}</div>
            </div>
        </div>
    );
}
