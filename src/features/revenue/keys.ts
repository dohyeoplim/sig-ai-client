export const revenueKeys = {
    all: ["revenue"] as const,
    byStore: (storeId: number) =>
        [...revenueKeys.all, "byStore", storeId] as const,
};
