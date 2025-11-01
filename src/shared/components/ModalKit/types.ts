export type AlertOpts = {
    title?: string;
    message: React.ReactNode;
    okText?: string;
    dismissible?: boolean;
};

export type ConfirmOpts = {
    title?: string;
    message: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    destructive?: boolean;
    dismissible?: boolean;
};

export type PromptOpts = {
    title?: string;
    message?: React.ReactNode;
    placeholder?: string;
    defaultValue?: string;
    okText?: string;
    cancelText?: string;
    type?: string;
    dismissible?: boolean;
};
