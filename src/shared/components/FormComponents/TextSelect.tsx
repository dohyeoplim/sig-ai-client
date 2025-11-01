import { cn } from "@/shared/utils/classname";
import { Field } from "formik";
import { Asterisk, ChevronDown } from "lucide-react";

type TextSelectProps = React.ComponentProps<"select"> & {
    label?: string;
    error?: string;
    required?: boolean;
    options: { value: string; label: string }[];
};

export default function TextSelect({
    className,
    label,
    error,
    required = true,
    options,
    ...props
}: TextSelectProps) {
    return (
        <div className="flex flex-col gap-2.5 w-full">
            <div className="flex">
                {label && (
                    <label
                        htmlFor={props.id}
                        className="font-body04 text-grey-800 select-none"
                    >
                        {label}
                    </label>
                )}
                {required && (
                    <Asterisk
                        size={14}
                        strokeWidth={2}
                        className="text-key-primary"
                    />
                )}
            </div>

            <div className="relative">
                <Field
                    as="select"
                    className={cn(
                        "font-body04 w-full rounded-lg border-[0.3px] border-grey-700 px-4 py-3.5 transition-all duration-200 outline-none",
                        "focus:ring ring-key-primary focus:border-key-primary",
                        "placeholder:text-grey-700",
                        "appearance-none [-webkit-appearance:none] [-moz-appearance:none]",
                        "has-[option[value='']:checked]:text-grey-700",
                        error && "border-danger-red focus:ring-danger-red",
                        className
                    )}
                    {...props}
                >
                    <option value="" disabled hidden>
                        선택해주세요
                    </option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </Field>

                <ChevronDown
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-grey-700 pointer-events-none"
                />
            </div>

            {error && (
                <p className="font-caption02 text-danger-red mt-2">{error}</p>
            )}
        </div>
    );
}
