export type CardProps = {
    cardTitle: string | React.ReactNode;
    cardDescription?: string | React.ReactNode;
    cardTheme?: CardTheme;
    isExpandable?: boolean;
    defaultExpanded?: boolean;
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    className?: string;
    children?: React.ReactNode;
};

export type CardTheme = "plain" | "green" | "orange" | "red" | "grey";
