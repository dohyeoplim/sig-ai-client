import { cn } from "@/shared/utils/classname";
import { Field } from "formik";
import { Asterisk } from "lucide-react";

type TextInputProps = React.ComponentProps<"input"> & {
    label?: string;
    error?: string;
    required?: boolean;
};

export default function TextInput({
    className,
    label,
    error,
    required,
    type = "text",
    ...props
}: TextInputProps) {
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

            <Field
                as="input"
                type={type}
                className={cn(
                    "font-body04 w-full rounded-lg border-[0.3px] border-grey-700 px-4 py-3.5 transition-all duration-200 outline-none",
                    "focus:ring ring-key-primary focus:border-key-primary",
                    "placeholder:text-grey-700",
                    "appearance-none [-webkit-appearance:none] [-moz-appearance:none]",
                    error && "border-danger-red focus:ring-danger-red",
                    className
                )}
                {...props}
            />

            {error && (
                <p className="font-caption02 text-danger-red mt-2">{error}</p>
            )}
        </div>
    );
}
