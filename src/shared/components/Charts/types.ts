export type ChartProps<T> = {
    redrawKey: number;
    data: T[];
    dataKey: DataKey;
    animate?: boolean;
    stopColors?: string[];
};

type DataKey = {
    x: string;
    y: string[];
};
