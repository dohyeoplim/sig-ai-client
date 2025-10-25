import Logo from "./Logo";
import Profile from "./Profile";

export default function Header() {
    return (
        <div className="fixed w-full flex justify-center">
            <div className="flex w-full max-w-2xl px-4 items-center justify-between bg-white py-4">
                <Logo />
                <Profile />
            </div>
        </div>
    );
}
