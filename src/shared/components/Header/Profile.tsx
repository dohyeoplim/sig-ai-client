import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <Link to="/profile">
            <div className="size-9 grid place-items-center rounded-full bg-grey-100 hover:bg-gray-200 cursor-pointer transition-colors">
                <UserRound className="text-gray-500" size={20} />
            </div>
        </Link>
    );
}
