import { motion } from "motion/react";
import { useHeaderMenu } from "./headerStore";
import { useCollapsible } from "@/shared/hooks/useCollapsible";
import { SMOOOTH } from "@/styles/transitions";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Dimmed from "../Dimmed";

export default function Header() {
    const expanded = useHeaderMenu((s) => s.expanded);
    const setExpanded = useHeaderMenu((s) => s.setExpanded);
    const toggleStore = useHeaderMenu((s) => s.toggle);
    const closeStore = useHeaderMenu((s) => s.close);

    // const { expanded, toggle, close, contentMotion } = useCollapsible({});
    const { contentMotion } = useCollapsible({
        expandedProp: expanded,
        onExpandedChange: setExpanded,
    });

    return (
        <>
            <div className="fixed w-full flex justify-center bg-background z-999">
                <motion.div
                    layout
                    className="flex w-full max-w-xl px-4 flex-col"
                    transition={SMOOOTH}
                >
                    <div className="flex w-full h-16 items-center justify-between">
                        <Logo />
                        <MenuButton
                            expanded={expanded}
                            onToggle={toggleStore}
                        />
                    </div>

                    <motion.div {...contentMotion}>
                        <Menu />
                    </motion.div>
                </motion.div>
            </div>

            <Dimmed on={expanded} opacity={0.2} onClick={closeStore} />
        </>
    );
}
