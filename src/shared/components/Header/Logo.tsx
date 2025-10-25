import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/">
            <div className="cursor-pointer">
                <img
                    src={`${import.meta.env.BASE_URL}logo.svg`}
                    alt="SIG:AI"
                    className="w-auto h-6"
                />
            </div>
        </Link>
    );
}
