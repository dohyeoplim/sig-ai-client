export type ExpandableCardProps = {
    cardTitle?: string | React.ReactNode;
    cardDescription?: string | React.ReactNode;
    cardTheme?: ExpandableCardTheme;
    includeIndicator?: boolean;
    isExpandable?: boolean;
    defaultExpanded?: boolean;
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    className?: string;
    children?: React.ReactNode;
};

export type ExpandableCardTheme = "plain" | "green" | "orange" | "red" | "grey";
