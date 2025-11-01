export type ChartProps<T> = {
    redrawKey: number;
    data: T[];
    dataKey: DataKey;
};

type DataKey = {
    x: string;
    y: string[];
};
