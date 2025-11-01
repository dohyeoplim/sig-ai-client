export const memberKeys = {
    all: ["member"] as const,
    byId: (memberId: number) => [...memberKeys.all, "byId", memberId] as const,
    byPhone: (phone: string) => [...memberKeys.all, "byPhone", phone] as const,
};
