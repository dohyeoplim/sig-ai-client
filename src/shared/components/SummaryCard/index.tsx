import { motion } from "motion/react";
import type { SummaryCardProps } from "./types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useAnimatedNumber } from "@/shared/hooks/useAnimatedNumber";
import { AnimatedValue } from "./AnimatedValue";

export default function SummaryCard({
    value,
    delta,
    trend,
    label,
    visual,
    icon,
    animate = true,
    animateDelay,
    className,
    ...props
}: SummaryCardProps) {
    const { display, numericPart, suffix, showSuffix } = useAnimatedNumber(
        value,
        animateDelay
    );
    const showDeltaNow = delta && trend && (numericPart === null || showSuffix);

    return (
        <div
            className={`w-full flex flex-col justify-between p-4 card-designed ${
                visual ? "h-26" : "h-21"
            } ${className}`}
            {...props}
        >
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-1">
                    {animate && numericPart !== null ? (
                        <AnimatedValue
                            display={display}
                            suffix={suffix}
                            showSuffix={showSuffix}
                        />
                    ) : (
                        <span className="font-body01 text-grey-900">
                            {value}
                        </span>
                    )}

                    <div className="text-grey-900">{icon}</div>
                </div>

                {animate ? (
                    delta &&
                    trend &&
                    showDeltaNow && (
                        <motion.div
                            className={`flex items-center gap-0.5 ${
                                trend === "down"
                                    ? "text-safe-blue"
                                    : "text-danger-red"
                            }`}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.05 }}
                        >
                            {trend === "down" ? (
                                <ChevronDown size={12} strokeWidth={2} />
                            ) : (
                                <ChevronUp size={12} strokeWidth={2} />
                            )}
                            <span className="font-caption01">{delta}</span>
                        </motion.div>
                    )
                ) : (
                    <div
                        className={`flex items-center gap-0.5 ${
                            trend === "down"
                                ? "text-safe-blue"
                                : "text-danger-red"
                        }`}
                    >
                        {trend === "down" ? (
                            <ChevronDown size={12} strokeWidth={2} />
                        ) : (
                            <ChevronUp size={12} strokeWidth={2} />
                        )}
                        <span className="font-caption01">{delta}</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-3">
                {visual}
                <span className="font-caption02 text-grey-700">{label}</span>
            </div>
        </div>
    );
}
