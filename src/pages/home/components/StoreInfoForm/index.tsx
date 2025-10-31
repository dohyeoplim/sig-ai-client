import TextInput from "@/shared/components/FormComponents/TextInput";
import TextSelect from "@/shared/components/FormComponents/TextSelect";
import { Formik } from "formik";
import * as Yup from "yup";

type StoreInfoFormProps = {
    formID?: string;
    afterSubmit?: () => void;
};

const StoreInfoSchema = Yup.object().shape({
    storeName: Yup.string().required("필수로 입력해야하는 항목입니다."),
    storeType: Yup.string().required("필수로 입력해야하는 항목입니다."),
});

export default function StoreInfoForm({
    afterSubmit,
    formID = "storeInfoForm",
}: StoreInfoFormProps) {
    return (
        <div>
            <Formik
                initialValues={{ storeName: "", storeType: "" }}
                validationSchema={StoreInfoSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                        afterSubmit?.();
                    }, 400);
                }}
            >
                {({ touched, errors, handleSubmit }) => (
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
                            id="storeType"
                            name="storeType"
                            label="업종을 선택해주세요."
                            required
                            options={[{ value: "cafe", label: "카페" }]}
                            error={
                                touched.storeType ? errors.storeType : undefined
                            }
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
