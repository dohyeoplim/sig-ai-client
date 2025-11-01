import { motion } from "motion/react";

type InfiniteCarouselProps = {
    children: React.ReactNode;
    speed?: number;
    height?: number | string;
};

export default function InfiniteCarousel({
    children,
    speed = 60,
    height = "120px",
}: InfiniteCarouselProps) {
    const items = Array.isArray(children) ? children : [children];
    const duration = 100 / speed;

    return (
        <div
            className="relative overflow-hidden w-full pointer-events-none select-none"
            style={{ height }}
        >
            <motion.div
                className="flex absolute left-0 top-0"
                animate={{
                    x: ["0%", "-100%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: duration * items.length,
                }}
            >
                {[...items, ...items].map((child, idx) => (
                    <div
                        key={idx}
                        className="shrink-0 flex items-center justify-center"
                        style={{ height, width: "auto" }}
                    >
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
