import { ChevronRight } from "lucide-react";
import type { ExpandableCardTheme } from "./types";

type CardHeaderProps = {
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    cardTheme?: ExpandableCardTheme;
    includeIndicator?: boolean;
    isExpandable?: boolean;
    expanded?: boolean;
    onToggle?: () => void;
};

export function CardHeader({
    title,
    description,
    cardTheme,
    includeIndicator,
    isExpandable,
    expanded,
    onToggle,
}: CardHeaderProps) {
    return (
        <div
            className={`flex items-center justify-between gap-1 p-4 ${
                isExpandable && "cursor-pointer"
            }`}
            onClick={(e) => {
                e.stopPropagation();
                isExpandable && onToggle?.();
            }}
        >
            <div className="flex items-center gap-1.5">
                {cardTheme && cardTheme != "plain" && includeIndicator && (
                    <img
                        src={`${import.meta.env.BASE_URL}sig=${cardTheme}.png`}
                        className="h-20"
                    />
                )}
                <div className="flex flex-col gap-1">
                    {title && (
                        <h2 className="truncate font-body03 text-grey-900">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="font-caption02 text-grey-700">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {isExpandable && (
                <button
                    type="button"
                    aria-expanded={!!expanded}
                    aria-label={expanded ? "Collapse" : "Expand"}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggle?.();
                    }}
                    className="grid transition-colors rounded-md place-items-center hover:bg-grey-100"
                >
                    <ChevronRight
                        className={`size-5 text-grey-700 transition-transform ${
                            expanded ? "rotate-90" : "rotate-0"
                        }`}
                    />
                </button>
            )}
        </div>
    );
}
