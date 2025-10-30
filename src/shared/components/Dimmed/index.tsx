import { motion } from "motion/react";

type DimmedProps = {
    // zIndex?: number;
    on?: boolean;
    opacity?: number;
    onClick?: () => void;
};

export default function Dimmed({
    // zIndex = 998,
    on = false,
    opacity = 0.5,
    onClick,
}: DimmedProps) {
    const backdropVariants = {
        off: {
            opacity: 0,
            height: "0vh",
            transition: {
                height: { delay: 0.3 },
                opacity: { duration: 0.3 },
            },
            transitionEnd: { display: "none", pointerEvents: "none" },
        },
        on: {
            display: "block",
            pointerEvents: "auto",
            opacity,
            height: "100vh",
            transition: {
                height: { duration: 0 },
                opacity: { duration: 0.3 },
            },
        },
    };

    return (
        <motion.div
            className="fixed w-screen bg-linear-to-b from-black to-white z-998"
            variants={backdropVariants}
            animate={on ? "on" : "off"}
            initial="off"
            onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }}
        />
    );
}
