export type ModalOptions = {
    title?: string;
    ariaLabel?: string;
    dismissible?: boolean;
    onClose?: () => void;
};

export type ModalControls = { close: (value?: unknown) => void };

export type ModalRenderer =
    | React.ReactNode
    | ((controls: ModalControls) => React.ReactNode);

export type OpenModal = <T = unknown>(
    content: ModalRenderer,
    options?: ModalOptions
) => Promise<T | undefined>;

export type ModalEntry = {
    id: number;
    renderer: ModalRenderer;
    options: Required<Omit<ModalOptions, "onClose">> & { onClose?: () => void };
    resolve: (value: any) => void;
};

export type ModalContentProps = {
    body?: string;
    confirmMessage?: string;
} & ModalControls;
