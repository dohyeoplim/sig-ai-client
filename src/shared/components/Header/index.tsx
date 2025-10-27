import { motion } from "motion/react";
import { useCollapsible } from "@/shared/hooks/useCollapsible";
import { SMOOOTH } from "@/styles/transitions";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Dimmed from "../Dimmed";

export default function Header() {
    const { expanded, toggle, close, contentMotion } = useCollapsible({});

    return (
        <>
            <div className="fixed w-full flex justify-center bg-white z-999 shadow-xs">
                <motion.div
                    layout
                    className="flex w-full max-w-2xl px-4 flex-col"
                    transition={SMOOOTH}
                >
                    <div className="flex w-full h-16 items-center justify-between">
                        <Logo />
                        <MenuButton expanded={expanded} onToggle={toggle} />
                    </div>

                    <motion.div {...contentMotion}>
                        <Menu close={close} />
                    </motion.div>
                </motion.div>
            </div>

            <Dimmed on={expanded} opacity={0.2} onClick={close} />
        </>
    );
}
