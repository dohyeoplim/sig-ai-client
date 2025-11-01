import { useModal } from "../Modal/Context";
import type { AlertOpts, ConfirmOpts, PromptOpts } from "./types";

export function useModalKit() {
    const { open } = useModal();

    const alert = async ({
        title = "Alert",
        message,
        okText = "확인",
        dismissible = true,
    }: AlertOpts) => {
        await open(
            ({ close }) => (
                <div className="flex flex-col gap-6">
                    <div className="font-body06 text-grey-800">{message}</div>
                    <div className="w-full flex">
                        <button
                            onClick={() => close()}
                            className="w-full font-body04 text-grey-900 py-1.5 rounded-lg hover:bg-key-100 transition-colors cursor-pointer"
                        >
                            {okText}
                        </button>
                    </div>
                </div>
            ),
            { title, dismissible }
        );
    };

    const confirm = async ({
        title = "Confirm",
        message,
        confirmText = "확인",
        cancelText = "취소",
        // destructive = false,
        dismissible = true,
    }: ConfirmOpts) => {
        const res = await open<boolean>(
            ({ close }) => (
                <div className="flex flex-col gap-6">
                    <div className="font-body06 text-grey-800">{message}</div>
                    <div className="w-full flex">
                        <button
                            onClick={() => close(false)}
                            className="w-full font-body04 text-grey-900 py-1.5 rounded-lg hover:bg-grey-100/80 transition-colors cursor-pointer"
                        >
                            {cancelText}
                        </button>
                        <button
                            onClick={() => close(true)}
                            className="w-full font-body04 text-grey-900 py-1.5 rounded-lg hover:bg-key-100 transition-colors cursor-pointer"
                        >
                            {confirmText}
                        </button>
                    </div>
                </div>
            ),
            { title, dismissible }
        );
        return res === true;
    };

    const prompt = async ({
        title = "Prompt",
        message,
        placeholder = "",
        defaultValue = "",
        okText = "확인",
        cancelText = "취소",
        type = "text",
        dismissible = true,
    }: PromptOpts) => {
        const res = await open<string | undefined>(
            ({ close }) => (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = new FormData(e.currentTarget);
                        close(String(data.get("value") || ""));
                    }}
                    className="grid gap-6"
                >
                    {message && (
                        <div className="font-body06 text-grey-800">
                            {message}
                        </div>
                    )}
                    <input
                        name="value"
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        type={type}
                        className="input"
                    />
                    <div className="w-full flex">
                        <button
                            type="button"
                            onClick={() => close(undefined)}
                            className="w-full font-body04 text-grey-900 py-1.5 rounded-lg hover:bg-grey-100/80 transition-colors cursor-pointer"
                        >
                            {cancelText}
                        </button>
                        <button
                            type="submit"
                            className="w-full font-body04 text-grey-900 py-1.5 rounded-lg hover:bg-key-100 transition-colors cursor-pointer"
                        >
                            {okText}
                        </button>
                    </div>
                </form>
            ),
            { title, dismissible }
        );
        return typeof res === "string" ? res : undefined;
    };
    return { alert, confirm, prompt };
}
