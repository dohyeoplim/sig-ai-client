import { motion } from "motion/react";

export function AnimatedValue({
    display,
    suffix,
    showSuffix,
}: {
    display: any;
    suffix: string;
    showSuffix: boolean;
}) {
    return (
        <span className="font-body01 text-grey-900 flex items-center">
            <motion.span>{display}</motion.span>
            {showSuffix && (
                <motion.span
                    className="text-grey-900 font-body01"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                >
                    {suffix}
                </motion.span>
            )}
        </span>
    );
}
