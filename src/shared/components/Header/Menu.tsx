import { ChevronUp } from "lucide-react";
import LoginForm from "./LoginForm";
import { useSession } from "@/shared/lib/session";

type MenuProps = {
    close: () => void;
};

export default function Menu({ close }: MenuProps) {
    const { user, isAuthenticated, signOut } = useSession();

    return (
        <div className="flex flex-col gap-4 pb-2">
            <div className="flex flex-col gap-1.5 select-none">
                {isAuthenticated && user?.name ? (
                    <p className="font-caption01 text-key-primary">
                        반갑습니다, {user.name}님!
                    </p>
                ) : (
                    <>
                        <p className="font-caption02 text-key-primary">
                            소상공인 위기 예측 및 금융 솔루션 연계를 위한
                        </p>
                        <p className="font-caption01 text-key-primary">
                            AI 조기경보시스템
                        </p>
                    </>
                )}
            </div>

            <hr className="text-grey-100" />

            {isAuthenticated ? (
                <>
                    <p
                        className="font-body01 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            close();
                        }}
                    >
                        홈
                    </p>

                    <p
                        className="font-body01 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            signOut();
                        }}
                    >
                        로그아웃
                    </p>
                </>
            ) : (
                <LoginForm />
            )}

            <div
                className="flex justify-center cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    close();
                }}
            >
                <ChevronUp
                    className="text-grey-500"
                    size={24}
                    strokeWidth={1.5}
                />
            </div>
        </div>
    );
}
