import { Plus } from "lucide-react";

type FloatingButtonProps = {
    className?: string;
} & React.ComponentProps<"button">;

export default function FloatingButton({
    className,
    ...props
}: FloatingButtonProps) {
    return (
        <div className={className}>
            <button {...props}>
                <div className="grid place-items-center size-16 bg-key-100 hover:bg-key-100/80 scale-95 hover:scale-100 active:scale-90 transition-all rounded-full cursor-pointer">
                    <Plus className="text-grey-800" />
                </div>
            </button>
        </div>
    );
}
