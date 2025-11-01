import { cn } from "@/shared/utils/classname";
import { formatPhoneNumber } from "@/shared/utils/phoneNumberFormatter";
import { Field, type FieldProps } from "formik";
import { Asterisk } from "lucide-react";

type PhoneNumberInputProps = React.ComponentProps<"input"> & {
    label?: string;
    error?: string;
    required?: boolean;
};

export default function PhoneNumberInput({
    className,
    label,
    error,
    required,
    type = "tel",
    ...props
}: PhoneNumberInputProps) {
    return (
        <Field name={props.name}>
            {({ field, form }: FieldProps) => {
                const phoneNumberFilter = (
                    e: React.ChangeEvent<HTMLInputElement>
                ) => {
                    const { value } = e.target;
                    const numericValue = value.replace(/[^0-9]/g, "");
                    form.setFieldValue(field.name, numericValue);
                };

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

                        <input
                            {...field}
                            {...props}
                            type={type}
                            value={formatPhoneNumber(field.value)}
                            onChange={phoneNumberFilter}
                            maxLength={13}
                            className={cn(
                                "font-body04 w-full rounded-lg border-[0.3px] border-grey-700 px-4 py-3.5 transition-all duration-200 outline-none",
                                "focus:ring ring-key-primary focus:border-key-primary",
                                "placeholder:text-grey-700",
                                "appearance-none [-webkit-appearance:none] [-moz-appearance:none]",
                                error &&
                                    "border-danger-red focus:ring-danger-red",
                                className
                            )}
                        />

                        {error && (
                            <p className="font-caption02 text-danger-red mt-2">
                                {error}
                            </p>
                        )}
                    </div>
                );
            }}
        </Field>
    );
}
