import { Plus } from "lucide-react";

type FloatingButtonProps = {
    position?: FloatingButtonPosition;
    className?: string;
} & React.ComponentProps<"button">;

type FloatingButtonPosition = "start" | "center" | "end";

export default function FloatingButton({
    position = "end",
    className,
    ...props
}: FloatingButtonProps) {
    return (
        <div className={`w-full flex justify-${position} ${className}`}>
            <button {...props}>
                <div className="grid place-items-center size-16 bg-key-100 hover:bg-key-100/80 scale-95 hover:scale-100 active:scale-90 transition-all rounded-full cursor-pointer">
                    <Plus className="text-grey-800" />
                </div>
            </button>
        </div>
    );
}
