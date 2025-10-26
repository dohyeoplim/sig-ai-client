import { motion } from "motion/react";

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
    const half = size / 2;
    const spacing = 6;
    const lineProps = {
        stroke: color,
        strokeWidth,
        strokeLinecap: "round" as const,
    };

    return (
        <motion.svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className={`cursor-pointer ${className}`}
            aria-hidden="true"
        >
            <motion.line
                {...lineProps}
                x1={spacing}
                x2={size - spacing}
                y1={half - size * 0.18}
                y2={half - size * 0.18}
                animate={{
                    rotate: toggled ? 45 : 0,
                    translateY: toggled ? size * 0.18 : 0,
                    scaleX: toggled ? 1 : 1.2,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ originX: 0.5, originY: 0.5 }}
            />
            <motion.line
                {...lineProps}
                x1={spacing}
                x2={size - spacing}
                y1={half}
                y2={half}
                animate={{
                    opacity: toggled ? 0 : 1,
                    scaleX: toggled ? 0.8 : 1.2,
                }}
                transition={{ duration: 0.2 }}
                style={{ originX: 0.5 }}
            />
            <motion.line
                {...lineProps}
                x1={spacing}
                x2={size - spacing}
                y1={half + size * 0.18}
                y2={half + size * 0.18}
                animate={{
                    rotate: toggled ? -45 : 0,
                    translateY: toggled ? -size * 0.18 : 0,
                    scaleX: toggled ? 1 : 1.2,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ originX: 0.5, originY: 0.5 }}
            />
        </motion.svg>
    );
}
