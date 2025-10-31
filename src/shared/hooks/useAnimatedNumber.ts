import { useEffect, useState } from "react";
import { useMotionValue, useSpring, useTransform, animate } from "motion/react";

export function useAnimatedNumber(rawValue: string | number, delay?: number) {
    const [numericPart, setNumericPart] = useState<number | null>(null);
    const [suffix, setSuffix] = useState("");
    const [hasDecimal, setHasDecimal] = useState(false);
    const [showSuffix, setShowSuffix] = useState(false);

    useEffect(() => {
        const str = String(rawValue);
        const match = str.match(/^([\d,\.]+)(.*)$/);
        if (match) {
            const num = parseFloat(match[1].replace(/,/g, ""));
            if (!isNaN(num)) {
                setNumericPart(num);
                setHasDecimal(match[1].includes("."));
                setSuffix(match[2]);
            } else {
                setNumericPart(null);
            }
        } else {
            setNumericPart(null);
        }
        setShowSuffix(false);
    }, [rawValue]);

    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
    const display = useTransform(spring, (latest) =>
        hasDecimal
            ? latest.toLocaleString(undefined, {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
              })
            : latest.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
              })
    );

    useEffect(() => {
        if (numericPart !== null) {
            const duration = Math.min(
                0.3 + Math.log10(Math.max(numericPart, 1)) * 0.05,
                0.8
            );

            const controls = animate(motionValue, numericPart, {
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration,
                delay,
                onComplete: () => setShowSuffix(true),
            });
            return () => controls.stop();
        }
    }, [numericPart, motionValue]);

    return { display, numericPart, suffix, showSuffix };
}
