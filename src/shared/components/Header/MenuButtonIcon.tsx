import { motion, type Variants } from "motion/react";
import { SPRING } from "@/styles/transitions";

type MenuButtonIconProps = {
    toggled: boolean;
    size?: number;
    strokeWidth?: number;
    color?: string;
    className?: string;
};

export default function MenuButtonIcon({
    toggled,
    size = 32,
    strokeWidth = 1.5,
    color = "currentColor",
    className = "",
}: MenuButtonIconProps) {
    const halfSize = size / 2;
    const lineInset = size * 0.2;
    const lineSpacing = size * 0.2;

    const xStart = lineInset;
    const xEnd = size - lineInset;

    const yTop = halfSize - lineSpacing;
    const yMid = halfSize;
    const yBot = halfSize + lineSpacing;

    const lineProps = {
        stroke: color,
        strokeWidth,
        strokeLinecap: "round" as const,
        style: { transformOrigin: "50% 50%" },
    };

    const topVariants: Variants = {
        untoggled: {
            rotate: 0,
            y1: yTop,
            y2: yTop,
        },
        toggled: {
            rotate: 45,
            y1: yMid,
            y2: yMid,
        },
    };

    const midVariants: Variants = {
        untoggled: {
            opacity: 1,
        },
        toggled: {
            opacity: 0,
        },
    };

    const botVariants: Variants = {
        untoggled: {
            rotate: 0,
            y1: yBot,
            y2: yBot,
        },
        toggled: {
            rotate: -45,
            y1: yMid,
            y2: yMid,
        },
    };

    return (
        <motion.svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className={`cursor-pointer ${className}`}
            aria-hidden="true"
            animate={toggled ? "toggled" : "untoggled"}
        >
            <motion.line
                {...lineProps}
                x1={xStart}
                x2={xEnd}
                variants={topVariants}
                transition={SPRING}
            />
            <motion.line
                {...lineProps}
                x1={xStart}
                y1={yMid}
                x2={xEnd}
                y2={yMid}
                variants={midVariants}
                transition={{ duration: 0.1 }}
            />
            <motion.line
                {...lineProps}
                x1={xStart}
                x2={xEnd}
                variants={botVariants}
                transition={SPRING}
            />
        </motion.svg>
    );
}
