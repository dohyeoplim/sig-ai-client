import { ChevronRight } from "lucide-react";

type CardHeaderProps = {
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    isExpandable?: boolean;
    expanded?: boolean;
    onToggle?: () => void;
};

export function CardHeader({
    title,
    description,
    isExpandable,
    expanded,
    onToggle,
}: CardHeaderProps) {
    return (
        <div
            className={`flex items-start gap-1 p-4 ${
                isExpandable && "cursor-pointer"
            }`}
            onClick={(e) => {
                e.stopPropagation();
                isExpandable && onToggle?.();
            }}
        >
            <div className="flex flex-col flex-1 min-w-0 gap-1">
                <h2 className="truncate font-body03 text-grey-900">{title}</h2>
                {description ? (
                    <p className="font-caption02 text-grey-700">
                        {description}
                    </p>
                ) : null}
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
                    className="grid transition-colors rounded-md size-8 place-items-center hover:bg-grey-100"
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
