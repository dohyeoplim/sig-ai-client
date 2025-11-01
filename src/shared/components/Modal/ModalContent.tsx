import type { ModalContentProps } from "./types";

export default function ModalContent({
    close,
    body,
    confirmMessage = "confirm",
}: ModalContentProps) {
    <div className="flex flex-col gap-6">
        <p className="font-body06 text-grey-800">{body}</p>
        <div className="w-full flex">
            <button
                onClick={() => close()}
                className="w-full font-body04 text-grey-900 py-1.5 rounded-lg hover:bg-grey-100/80 transition-colors cursor-pointer"
            >
                취소
            </button>
            <button
                onClick={() => close(confirmMessage)}
                className="w-full font-body04 text-grey-900 py-1.5 rounded-lg hover:bg-key-100 transition-colors cursor-pointer"
            >
                확인
            </button>
        </div>
    </div>;
}
