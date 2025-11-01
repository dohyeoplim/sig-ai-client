import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../FormComponents/TextInput";
import PhoneNumberInput from "../FormComponents/PhoneNumberInput";

type LoginFormProps = {
    formID?: string;
    afterSubmit?: () => void;
};

const LoginFormSchema = Yup.object().shape({
    nickname: Yup.string().required("닉네임을 입력해주세요."),
    phonenumber: Yup.string()
        .matches(/^[0-9]{10,11}$/, "올바른 전화번호를 입력해주세요.")
        .required("전화번호를 입력해주세요."),
});

export default function LoginForm({
    afterSubmit,
    formID = "loginForm",
}: LoginFormProps) {
    return (
        <Formik
            initialValues={{ nickname: "", phonenumber: "" }}
            validationSchema={LoginFormSchema}
            onSubmit={(_values, actions) => {
                setTimeout(() => {
                    actions.setSubmitting(false);
                    afterSubmit?.();
                }, 400);
            }}
        >
            {({ handleSubmit, isValid, dirty }) => (
                <form
                    id={formID}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 px-px"
                >
                    <TextInput
                        id="nickname"
                        name="nickname"
                        placeholder="닉네임"
                        type="text"
                    />

                    <PhoneNumberInput
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="전화번호"
                        type="tel"
                    />

                    <button
                        type="submit"
                        className="font-body06 w-full py-3.5 bg-key-100 disabled:bg-transparent disabled:text-grey-700 text-grey-900 disabled:cursor-not-allowed hover:bg-key-100 cursor-pointer transition-colors rounded-xl"
                        disabled={!(isValid && dirty)}
                    >
                        로그인
                    </button>
                </form>
            )}
        </Formik>
    );
}
