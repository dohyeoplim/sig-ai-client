import { useEffect, useState } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    animate,
} from "motion/react";
import type { SummaryCardProps } from "./types";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SummaryCard({
    value,
    delta,
    trend,
    label,
    visual,
    className,
}: SummaryCardProps) {
    const [numericPart, setNumericPart] = useState<number | null>(null);
    const [suffix, setSuffix] = useState("");
    const [showSuffix, setShowSuffix] = useState(false);

    useEffect(() => {
        const match = String(value).match(/^([\d,\.]+)(.*)$/);
        if (match) {
            const num = parseFloat(match[1].replace(/,/g, ""));
            if (!isNaN(num)) {
                setNumericPart(num);
                setSuffix(match[2]);
            } else {
                setNumericPart(null);
            }
        } else {
            setNumericPart(null);
        }
        setShowSuffix(false);
    }, [value]);

    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
    const display = useTransform(spring, (latest) =>
        latest.toLocaleString(undefined, { maximumFractionDigits: 0 })
    );

    useEffect(() => {
        if (numericPart !== null) {
            const controls = animate(motionValue, numericPart, {
                type: "spring",
                stiffness: 80,
                damping: 20,
                onComplete: () => setShowSuffix(true),
            });
            return () => controls.stop();
        }
    }, [numericPart, motionValue]);

    const showDeltaNow = delta && trend && (numericPart === null || showSuffix);

    return (
        <div
            className={`w-full flex flex-col justify-between p-4 rounded-[20px] bg-light-surface ${
                visual ? "h-26" : "h-21"
            } ${className}`}
        >
            <div className="w-full flex items-center justify-between">
                {numericPart !== null ? (
                    <span className="font-body01 text-grey-900 flex items-center">
                        <motion.span>{display}</motion.span>
                        {showSuffix && (
                            <motion.span
                                className="text-grey-900 font-body01"
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                {suffix}
                            </motion.span>
                        )}
                    </span>
                ) : (
                    <span className="font-body01 text-grey-900">{value}</span>
                )}

                {delta && trend && showDeltaNow && (
                    <motion.div
                        className={`flex items-center gap-0.5 ${
                            trend == "down"
                                ? "text-safe-blue"
                                : "text-danger-red"
                        }`}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        {trend == "down" ? (
                            <ChevronDown size={12} strokeWidth={2} />
                        ) : (
                            <ChevronUp size={12} strokeWidth={2} />
                        )}
                        <span className="font-caption01">{delta}</span>
                    </motion.div>
                )}
            </div>

            <div className="flex flex-col gap-3">
                {visual}
                <span className="font-caption02 text-grey-700">{label}</span>
            </div>
        </div>
    );
}
