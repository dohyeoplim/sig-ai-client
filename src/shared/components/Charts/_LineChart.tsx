import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import type { ChartProps } from "./types";
import { formatNumberShort } from "@/shared/utils/numberFormatter";
import { formatQuarterLabel } from "@/shared/utils/quarterFormatter";

export default function _LineChart<T>({
    redrawKey = 0,
    data,
    dataKey,
}: ChartProps<T>) {
    return (
        <LineChart
            key={redrawKey}
            style={{ width: "100%", aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{ left: -8, right: 8, top: 10 }}
        >
            <CartesianGrid strokeDasharray="4 4" opacity={0.5} />
            {dataKey.y.map((k) => (
                <Line key={k} dataKey={k} stroke="#82ca9d" strokeWidth={1.5} />
            ))}
            <XAxis
                className="font-caption02"
                dataKey={dataKey.x}
                tickFormatter={formatQuarterLabel}
                stroke="#767984"
            />
            <YAxis
                className="font-caption02"
                tickFormatter={formatNumberShort}
                stroke="#767984"
            />
        </LineChart>
    );
}
