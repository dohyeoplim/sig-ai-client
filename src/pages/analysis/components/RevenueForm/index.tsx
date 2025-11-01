import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "@/shared/components/FormComponents/TextInput";
import type { StoreRevenueReq } from "@/api";
import { useCreateRevenue } from "@/features/revenue/api";

type RevenueFormProps = {
    storeId: number;
    formID?: string;
    afterSubmit?: () => void;
};

const RevenueSchema = Yup.object().shape({
    year: Yup.number()
        .required("년도를 입력해주세요.")
        .integer("년도는 정수여야 합니다.")
        .min(1950, "1950년 이후만 가능합니다.")
        .max(2100, "2100년 이전만 가능합니다."),

    month: Yup.number()
        .required("월을 입력해주세요.")
        .integer("월은 정수여야 합니다.")
        .min(1, "1월 이상만 가능합니다.")
        .max(12, "12월 이하만 가능합니다."),

    monthlyRevenue: Yup.number()
        .required("월 매출액을 입력해주세요.")
        .min(0, "0 이상이어야 합니다.")
        .typeError("월 매출액은 숫자여야 합니다."),

    deliverySalesRatio: Yup.number()
        .required("배달 매출 비율을 입력해주세요.")
        .min(0, "0% 이상이어야 합니다.")
        .max(100, "100% 이하만 가능합니다.")
        .typeError("배달 매출 비율은 숫자여야 합니다."),

    maleCustomer2030Ratio: Yup.number()
        .required("남성 2030 비중을 입력해주세요.")
        .min(0, "0% 이상이어야 합니다.")
        .max(100, "100% 이하만 가능합니다.")
        .typeError("남성 2030 비중은 숫자여야 합니다."),

    maleCustomer40PlusRatio: Yup.number()
        .required("남성 40대 이상 비중을 입력해주세요.")
        .min(0, "0% 이상이어야 합니다.")
        .max(100, "100% 이하만 가능합니다.")
        .typeError("남성 40대 이상 비중은 숫자여야 합니다."),

    returningCustomerRatio: Yup.number()
        .required("재방문 고객 비율을 입력해주세요.")
        .min(0, "0% 이상이어야 합니다.")
        .max(100, "100% 이하만 가능합니다.")
        .typeError("재방문 고객 비율은 숫자여야 합니다."),
}) as unknown as Yup.Schema<StoreRevenueReq>;

export default function RevenueForm({
    afterSubmit,
    storeId,
    formID = "revenueForm",
}: RevenueFormProps) {
    const createRevenue = useCreateRevenue(storeId);

    const initialValues: StoreRevenueReq = {
        monthlyRevenue: 0,
        deliverySalesRatio: 0,
        maleCustomer2030Ratio: 0,
        maleCustomer40PlusRatio: 0,
        returningCustomerRatio: 0,
        year: 2025,
        month: 11,
        storeId,
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={RevenueSchema}
                onSubmit={async (values, actions) => {
                    try {
                        createRevenue.mutate(values);
                        afterSubmit?.();
                    } catch (e) {
                        console.error(e);
                    } finally {
                        actions.setSubmitting(false);
                    }
                }}
            >
                {({ touched, errors, handleSubmit }) => (
                    <form
                        id={formID}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <TextInput
                            id="year"
                            name="year"
                            placeholder="기준 년도"
                            label="매출 기준 년도를 입력해주세요."
                            required
                            error={touched.year ? errors.year : undefined}
                            type="number"
                        />

                        <TextInput
                            id="month"
                            name="month"
                            placeholder="기준 월"
                            label="매출 기준 월을 입력해주세요."
                            required
                            error={touched.month ? errors.month : undefined}
                            type="number"
                        />

                        <TextInput
                            id="monthlyRevenue"
                            name="monthlyRevenue"
                            placeholder="1000000"
                            label="해당 월 매출을 입력해주세요."
                            required
                            error={
                                touched.monthlyRevenue
                                    ? errors.monthlyRevenue
                                    : undefined
                            }
                            type="number"
                        />

                        <TextInput
                            id="deliverySalesRatio"
                            name="deliverySalesRatio"
                            placeholder="비율(0-100)"
                            label="배달 매출 비율을 입력해주세요."
                            required
                            error={
                                touched.deliverySalesRatio
                                    ? errors.deliverySalesRatio
                                    : undefined
                            }
                            type="number"
                        />

                        <TextInput
                            id="maleCustomer2030Ratio"
                            name="maleCustomer2030Ratio"
                            placeholder="비율(0-100)"
                            label="20~30대 고객 비율을 입력해주세요."
                            required
                            error={
                                touched.maleCustomer2030Ratio
                                    ? errors.maleCustomer2030Ratio
                                    : undefined
                            }
                            type="number"
                        />

                        <TextInput
                            id="maleCustomer40PlusRatio"
                            name="maleCustomer40PlusRatio"
                            placeholder="비율(0-100)"
                            label="40대 이상 고객 비율을 입력해주세요."
                            required
                            error={
                                touched.maleCustomer40PlusRatio
                                    ? errors.maleCustomer40PlusRatio
                                    : undefined
                            }
                            type="number"
                        />

                        <TextInput
                            id="returningCustomerRatio"
                            name="returningCustomerRatio"
                            placeholder="비율(0-100)"
                            label="재방문 고객 비율을 입력해주세요."
                            required
                            error={
                                touched.returningCustomerRatio
                                    ? errors.returningCustomerRatio
                                    : undefined
                            }
                            type="number"
                        />

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-key-50 hover:bg-key-100 cursor-pointer transition-colors rounded-xl"
                        >
                            등록하기
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
