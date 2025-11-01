export type SummaryCardProps = {
    value: string;
    delta?: string;
    trend?: TrendDirection;
    label?: string;
    visual?: React.ReactNode;
    icon?: React.ReactNode;
    animate?: boolean;
    animateDelay?: number;
    className?: string;
} & React.ComponentProps<"div">;

type TrendDirection = "up" | "down";
