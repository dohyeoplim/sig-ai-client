import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export const sample = [
    { name: "Mon", uv: 420, pv: 1800, amt: 1200 },
    { name: "Tue", uv: 380, pv: 1600, amt: 1100 },
    { name: "Wed", uv: 460, pv: 2000, amt: 1500 },
    { name: "Thu", uv: 520, pv: 2400, amt: 1700 },
    { name: "Fri", uv: 610, pv: 2600, amt: 1900 },
    { name: "Sat", uv: 580, pv: 2300, amt: 1750 },
    { name: "Sun", uv: 490, pv: 2100, amt: 1600 },
];

export default function _LineChart({ redrawKey = 0 }: { redrawKey: number }) {
    return (
        <LineChart
            key={redrawKey}
            style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
            responsive
            data={sample}
        >
            <CartesianGrid />
            <Line dataKey="uv" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    );
}
