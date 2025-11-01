export const storeKeys = {
    all: ["store"] as const,
    byId: (storeId: number) => [...storeKeys.all, "byId", storeId] as const,
    byOwnerPhone: (phone: string) =>
        [...storeKeys.all, "byOwnerPhone", phone] as const,
};
