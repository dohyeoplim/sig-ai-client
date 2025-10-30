import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import type { BannerWithIconProps } from "./types";

export default function BannerWithIcon({
    title,
    description,
    label,
    buttonLabel,
    icon = `${import.meta.env.BASE_URL}icons/warning.png`,
}: BannerWithIconProps) {
    return (
        <div className="card-designed px-4 py-4 relative flex flex-col gap-4 overflow-hidden">
            <motion.img
                src={icon}
                className="absolute h-[225px] w-auto -right-16 -bottom-16 pointer-events-none select-none opacity-20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2, y: [0, -8, 0] }}
                transition={{
                    duration: 1.2,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    y: { duration: 6, repeat: Infinity, repeatType: "mirror" },
                }}
            />

            <div className="flex flex-col gap-2.5">
                <span className="font-caption02 text-grey-700">{label}</span>
                <div className="flex flex-col gap-1.5">
                    <span className="font-head01 text-grey-900">{title}</span>
                    <span className="font-body06 text-grey-800">
                        {description}
                    </span>
                </div>
            </div>

            <div className="w-fit flex items-center pt-1.5 rounded-sm text-key-primary cursor-pointer hover:underline">
                <span className="font-caption01">{buttonLabel}</span>
                <ChevronRight size={16} />
            </div>
        </div>
    );
}
