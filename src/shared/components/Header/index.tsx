import { motion } from "motion/react";
import { useCollapsible } from "@/shared/hooks/useCollapsible";
import { SMOOOTH } from "@/styles/transitions";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

export default function Header() {
    const { expanded, toggle, contentMotion } = useCollapsible({});

    return (
        <div className="fixed w-full flex justify-center bg-white px-4 z-999 shadow-xs">
            <motion.div
                layout
                className="flex w-full flex-col"
                transition={SMOOOTH}
            >
                <div className="flex w-full max-w-2xl h-16 items-center justify-between">
                    <Logo />
                    <MenuButton expanded={expanded} onToggle={toggle} />
                </div>

                <motion.div {...contentMotion}>
                    <Menu />
                </motion.div>
            </motion.div>
        </div>
    );
}
