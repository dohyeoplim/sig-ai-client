import { Plus } from "lucide-react";

export default function FloatingButton() {
    return (
        <div className="absolute grid place-items-center size-16 bg-key-100 hover:bg-key-100/80 hover:scale-105 active:scale-95 transition-all rounded-full cursor-pointer">
            <Plus className="text-grey-800" />
        </div>
    );
}
