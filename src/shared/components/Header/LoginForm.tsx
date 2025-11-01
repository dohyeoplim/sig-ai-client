import { Formik } from "formik";
import * as Yup from "yup";
import { useSession } from "@/shared/lib/session";
import PhoneNumberInput from "../FormComponents/PhoneNumberInput";
import { formatPhoneNumber } from "@/shared/utils/phoneNumberFormatter";

type LoginFormProps = {
    formID?: string;
    afterSubmit?: () => void;
};

const LoginFormSchema = Yup.object().shape({
    // name: Yup.string().required("닉네임을 입력해주세요."),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{10,11}$/, "올바른 전화번호를 입력해주세요.")
        .required("전화번호를 입력해주세요."),
});

export default function LoginForm({ formID = "loginForm" }: LoginFormProps) {
    const { signIn } = useSession();

    return (
        <Formik
            initialValues={{ phoneNumber: "" }}
            validationSchema={LoginFormSchema}
            onSubmit={async (_values, actions) => {
                try {
                    await signIn(formatPhoneNumber("010-1234-1234"));
                } catch (err: any) {
                    alert(err);
                }
                actions.setSubmitting(false);
            }}
        >
            {({ handleSubmit, isValid, dirty }) => (
                <form
                    id={formID}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 px-px"
                >
                    {/* <TextInput
                        id="name"
                        name="name"
                        placeholder="닉네임"
                        type="text"
                    /> */}

                    <PhoneNumberInput
                        id="phoneNumber"
                        name="phoneNumber"
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
