import { useHeaderMenu } from "@/shared/components/Header/headerStore";
import { useSession } from "@/shared/lib/session";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
    const { isAuthenticated } = useSession();
    const { open } = useHeaderMenu();

    return (
        <div className="relative">
            <div className="relative z-10 flex flex-col gap-3 pt-5.5">
                <h1 className="font-title01 text-grey-900 flex flex-col gap-0.5">
                    <p>AI로 읽는</p>
                    <p>당신의 비즈니스.</p>
                </h1>

                <div className="flex flex-col gap-2">
                    <h2 className="font-body04 text-grey-800 flex flex-col gap-px">
                        <p>SIG:AI로,</p>
                        <p>보이지 않던 위험을 발견하세요.</p>
                    </h2>

                    {isAuthenticated ? (
                        <Link
                            to="/analysis"
                            className="w-fit flex items-center pt-1.5 rounded-sm text-key-primary cursor-pointer hover:underline"
                        >
                            <span className="font-body05">
                                내 비즈니스 분석하기
                            </span>
                            <ChevronRight size={16} />
                        </Link>
                    ) : (
                        <button
                            className="w-fit flex items-center pt-1.5 rounded-sm text-key-primary cursor-pointer hover:underline"
                            onClick={() => open()}
                        >
                            <span className="font-body05">
                                내 비즈니스 분석하기
                            </span>
                            <ChevronRight size={16} />
                        </button>
                    )}
                </div>
            </div>

            <img
                src={`${import.meta.env.BASE_URL}hero-icon.png`}
                alt="SIG:AI"
                className="absolute top-0 right-0 h-50 z-0"
            />
        </div>
    );
}
