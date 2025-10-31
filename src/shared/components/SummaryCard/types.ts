export type SummaryCardProps = {
    value: string;
    delta?: string;
    trend?: TrendDirection;
    label?: string;
    visual?: React.ReactNode;
    animateDelay?: number;
    className?: string;
};

type TrendDirection = "up" | "down";
