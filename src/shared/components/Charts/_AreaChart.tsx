import { CartesianGrid, AreaChart, XAxis, YAxis, Area } from "recharts";
import { SAMPLE } from "./data";

const gradientOffset = () => {
    const dataMax = Math.max(...SAMPLE.map((i) => i.uv));
    const dataMin = Math.min(...SAMPLE.map((i) => i.uv));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default function _AreaChart({ redrawKey = 0 }: { redrawKey: number }) {
    return (
        <AreaChart
            key={redrawKey}
            style={{ width: "100%", aspectRatio: 1.618 }}
            responsive
            data={SAMPLE}
            margin={{ left: -5, right: 8, top: 8 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <defs>
                <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B7E4C7" stopOpacity="1" />
                    <stop
                        offset={`${off * 100 - 4}%`}
                        stopColor="#DCEFE3"
                        stopOpacity="0.85"
                    />
                    <stop
                        offset={`${off * 100}%`}
                        stopColor="#EEEDEA"
                        stopOpacity="0.9"
                    />
                    <stop
                        offset={`${off * 100 + 4}%`}
                        stopColor="#F5DFDA"
                        stopOpacity="0.85"
                    />
                    <stop offset="100%" stopColor="#F9C6CB" stopOpacity="1" />
                </linearGradient>
            </defs>
            <Area
                type="monotone"
                dataKey="uv"
                stroke="#999999"
                fill="url(#splitColor)"
            />
        </AreaChart>
    );
}
