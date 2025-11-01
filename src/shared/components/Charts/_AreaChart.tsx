import { CartesianGrid, AreaChart, XAxis, YAxis, Area } from "recharts";
import type { ChartProps } from "./types";
import { formatNumberShort } from "@/shared/utils/numberFormatter";
import { formatQuarterLabel } from "@/shared/utils/quarterFormatter";

export default function _AreaChart<T>({
    redrawKey = 0,
    data,
    dataKey,
    animate = true,
    stopColors = ["#1A5319", "#7FAE87", "#FFFFFF"],
}: ChartProps<T>) {
    return (
        <AreaChart
            key={redrawKey}
            style={{ width: "100%", aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{ left: -8, right: 8, top: 10 }}
        >
            <CartesianGrid strokeDasharray="4 4" opacity={0.5} />
            {dataKey.y.map((k) => (
                <>
                    <defs>
                        <linearGradient
                            id="colorView"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="30%"
                                stopColor={stopColors[0]}
                                stopOpacity={0.4}
                            />
                            <stop
                                offset="75%"
                                stopColor={stopColors[1]}
                                stopOpacity={0.3}
                            />
                            <stop
                                offset="95%"
                                stopColor={stopColors[2]}
                                stopOpacity={0.2}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey={k}
                        stroke="#999999"
                        fill="url(#colorView)"
                        isAnimationActive={animate}
                    />
                </>
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
        </AreaChart>
    );
}
