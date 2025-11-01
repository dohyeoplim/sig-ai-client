import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "@/shared/components/FormComponents/TextInput";
import TextSelect from "@/shared/components/FormComponents/TextSelect";
import {
    SERVICE_INDUSTRY_OPTIONS,
    serviceIndustryMap,
    type ServiceIndustryCode,
} from "@/shared/utils/mappers/serviceIndustryMapper";
import type { StoreReq } from "@/api";
import { useUpdateStore } from "@/features/store/api";

type StoreInfoFormProps = {
    phoneNumber: string;
    store: StoreReq & { id: number };
    formID?: string;
    afterSubmit?: () => void;
};

const StoreInfoSchema = Yup.object().shape({
    storeName: Yup.string().required("필수로 입력해야하는 항목입니다."),
    serviceIndustry: Yup.mixed<ServiceIndustryCode>()
        .oneOf(Object.keys(serviceIndustryMap) as ServiceIndustryCode[])
        .required("필수로 입력해야하는 항목입니다."),
    gu: Yup.string().required("필수로 입력해야하는 항목입니다."),
    dong: Yup.string().required("필수로 입력해야하는 항목입니다."),
    openingDate: Yup.string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD 형식으로 입력해주세요.")
        .required("필수로 입력해야하는 항목입니다."),
    franchise: Yup.boolean(),
}) as unknown as Yup.Schema<StoreReq>;

export default function StoreInfoForm({
    afterSubmit,
    phoneNumber,
    store,
    formID = "storeInfoForm",
}: StoreInfoFormProps) {
    const { id, storeName, serviceIndustry, gu, dong, openingDate, franchise } =
        store;
    const updateStore = useUpdateStore(phoneNumber, id);

    const initialValues: StoreReq = {
        storeName,
        serviceArea: "SA_3110001" as StoreReq.serviceArea,
        serviceIndustry,
        gu,
        dong,
        openingDate,
        franchise,
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={StoreInfoSchema}
                onSubmit={async (values, actions) => {
                    try {
                        updateStore.mutate(values);
                        afterSubmit?.();
                    } catch (e) {
                        console.error(e);
                    } finally {
                        actions.setSubmitting(false);
                    }
                }}
            >
                {({ touched, errors, handleSubmit, values, setFieldValue }) => (
                    <form
                        id={formID}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <TextInput
                            id="storeName"
                            name="storeName"
                            placeholder="가게 이름"
                            label="가게 이름을 입력해주세요."
                            required
                            error={
                                touched.storeName ? errors.storeName : undefined
                            }
                            type="text"
                        />

                        <TextSelect
                            id="serviceIndustry"
                            name="serviceIndustry"
                            label="업종을 선택해주세요."
                            required
                            options={SERVICE_INDUSTRY_OPTIONS}
                            error={
                                touched.serviceIndustry
                                    ? (errors.serviceIndustry as
                                          | string
                                          | undefined)
                                    : undefined
                            }
                            onChange={(
                                e: React.ChangeEvent<HTMLSelectElement>
                            ) =>
                                setFieldValue(
                                    "serviceIndustry",
                                    e.target.value as ServiceIndustryCode
                                )
                            }
                            value={values.serviceIndustry || ""}
                        />

                        <TextInput
                            id="gu"
                            name="gu"
                            placeholder="구 (예: 노원구)"
                            label="구를 입력해주세요."
                            required
                            error={touched.gu ? errors.gu : undefined}
                            type="text"
                        />

                        <TextInput
                            id="dong"
                            name="dong"
                            placeholder="동 (예: 공릉동)"
                            label="동을 입력해주세요."
                            required
                            error={touched.dong ? errors.dong : undefined}
                            type="text"
                        />

                        <TextInput
                            id="openingDate"
                            name="openingDate"
                            label="개업일을 선택해주세요."
                            required
                            error={
                                touched.openingDate
                                    ? errors.openingDate
                                    : undefined
                            }
                            type="date"
                            placeholder="YYYY-MM-DD"
                        />

                        <TextSelect
                            id="franchise"
                            name="franchise"
                            label="프랜차이즈 여부"
                            required
                            options={[
                                { value: "false", label: "일반" },
                                { value: "true", label: "프랜차이즈" },
                            ]}
                            error={
                                touched.franchise
                                    ? (errors.franchise as string | undefined)
                                    : undefined
                            }
                            onChange={(
                                e: React.ChangeEvent<HTMLSelectElement>
                            ) =>
                                setFieldValue(
                                    "franchise",
                                    e.target.value === "true"
                                )
                            }
                            value={String(values.franchise)}
                        />

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-key-50 hover:bg-key-100 cursor-pointer transition-colors rounded-xl"
                        >
                            저장하기
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
