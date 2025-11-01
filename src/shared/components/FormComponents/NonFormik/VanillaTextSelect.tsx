import { cn } from "@/shared/utils/classname";
import { ChevronDown } from "lucide-react";

type VanillaTextSelectProps = {
    options: { value: string; label: string }[];
} & React.ComponentProps<"select">;

export default function VanillaTextSelect({
    options,
    className,
    ...props
}: VanillaTextSelectProps) {
    return (
        <div className="relative">
            <select
                className={cn(
                    "font-body06 w-full card-designed pl-4 pr-11 py-3 transition-all duration-200 outline-none",
                    // "focus:ring ring-key-primary focus:border-key-primary",
                    "placeholder:text-grey-700",
                    "appearance-none [-webkit-appearance:none] [-moz-appearance:none]",
                    "has-[option[value='']:checked]:text-grey-700",
                    className
                )}
                {...props}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            <ChevronDown
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-grey-700 pointer-events-none"
            />
        </div>
    );
}
