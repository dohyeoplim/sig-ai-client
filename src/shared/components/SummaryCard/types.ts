export type SummaryCardProps = {
    value: string;
    delta?: string;
    trend?: TrendDirection;
    label?: string;
    visual?: React.ReactNode;
    icon?: React.ReactNode;
    animateDelay?: number;
    className?: string;
} & React.ComponentProps<"div">;

type TrendDirection = "up" | "down";
