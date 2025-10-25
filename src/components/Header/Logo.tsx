import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/">
            <div className="cursor-pointer">
                <img src="/logo.svg" alt="SIG:AI" className="h-6 w-auto" />
            </div>
        </Link>
    );
}
