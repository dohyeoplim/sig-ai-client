import { MenuIcon, X } from "lucide-react";

type MenuButtonProps = {
    expanded?: boolean;
    onToggle: () => void;
};

export default function MenuButton({ expanded, onToggle }: MenuButtonProps) {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onToggle?.();
            }}
        >
            <div className="size-9 grid place-items-center cursor-pointer transition-colors">
                {expanded ? <X /> : <MenuIcon />}
            </div>
        </div>
    );
}
