export type HeaderProps = {
    isExpandable?: boolean;
    defaultExpanded?: boolean;
    expanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    className?: string;
    children?: React.ReactNode;
};
