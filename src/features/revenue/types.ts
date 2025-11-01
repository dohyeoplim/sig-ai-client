export type StoreRevenuRes = StoreRevenue[];

export type StoreRevenue = {
    monthlyRevenue?: number;
    deliverySalesRatio?: number;
    maleCustomer2030Ratio?: number;
    maleCustomer40PlusRatio?: number;
    returningCustomerRatio?: number;
    year?: number;
    month?: number;
};
