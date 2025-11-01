import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { SAMPLE } from "./data";

export default function _LineChart({ redrawKey = 0 }: { redrawKey: number }) {
    return (
        <LineChart
            key={redrawKey}
            style={{ width: "100%", aspectRatio: 1.618 }}
            responsive
            data={SAMPLE}
            margin={{ left: -8, right: 8, top: 10 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <Line dataKey="pv" stroke="#82ca9d" strokeWidth={1.5} />
            <Line dataKey="uv" stroke="#8884d8" strokeWidth={1.5} />
            <XAxis className="font-caption02" dataKey="name" />
            <YAxis className="font-caption02" />
        </LineChart>
    );
}
