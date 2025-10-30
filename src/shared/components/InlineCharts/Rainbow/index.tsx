import { SMOOOTH } from "@/styles/transitions";
import type { InlineChartProps } from "../types";
import { motion } from "motion/react";

export default function RainbowInlineChart({
    l = 0,
    r = 1,
    value,
}: InlineChartProps) {
    const clamp = (x: number, a: number, b: number) =>
        Math.min(Math.max(x, a), b);
    const pct =
        r === l
            ? 0
            : ((clamp(value, Math.min(l, r), Math.max(l, r)) - l) / (r - l)) *
              100;

    return (
        <motion.div
            className="relative w-full h-2.5 rounded-full"
            role="img"
            title={`Value: ${value} (range ${l}–${r})`}
            style={{
                background:
                    "linear-gradient( to right, #0766FF, #079400 25%, #FEC517 50%, #E33B3B)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 size-2.5 rounded-full bg-white border-[0.5px] border-grey-900"
                initial={{ left: "0%" }}
                animate={{ left: `${pct}%` }}
                transition={{ ...SMOOOTH, delay: 0.5 }}
                aria-hidden
            />
        </motion.div>
    );
}
