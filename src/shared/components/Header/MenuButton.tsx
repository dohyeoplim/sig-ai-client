import MenuButtonIcon from "./MenuButtonIcon";

type MenuButtonProps = {
    expanded: boolean;
    onToggle: () => void;
};

export default function MenuButton({ expanded, onToggle }: MenuButtonProps) {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onToggle();
            }}
        >
            <MenuButtonIcon toggled={expanded} />
        </div>
    );
}
