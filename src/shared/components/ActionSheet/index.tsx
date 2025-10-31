import { Sheet } from "react-modal-sheet";

type SheetProps = {
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    disableDrag?: boolean;
    children: React.ReactNode;
};

export default function ActionSheet({
    title,
    isOpen,
    onClose,
    disableDrag,
    children,
}: SheetProps) {
    return (
        <Sheet
            isOpen={isOpen}
            onClose={onClose}
            tweenConfig={{ ease: [0.25, 0.9, 0.3, 1], duration: 0.42 }}
            disableDrag={disableDrag}
            avoidKeyboard
        >
            <Sheet.Container className="rounded-t-2xl!">
                <Sheet.Header>
                    <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center p-6 gap-2">
                        {!disableDrag && <Sheet.DragIndicator />}
                        <div className="w-full flex items-center justify-between">
                            <h1 className="font-head01 text-grey-900">
                                {title}
                            </h1>
                            <button
                                className="font-body04 text-grey-900 hover:text-grey-700 cursor-pointer transition-colors"
                                onClick={onClose}
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </Sheet.Header>
                <Sheet.Content>
                    <div className="w-full max-w-xl mx-auto px-6">
                        {children}
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    );
}
