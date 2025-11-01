export type SessionUser = {
    phoneNumber: string;
    name?: string | null;
    storeId: number;
};

export type SessionState = {
    isAuthenticated: boolean;
    user: SessionUser | null;
    signIn: (phoneNumber: string) => Promise<void>;
    signOut: () => void;
};
