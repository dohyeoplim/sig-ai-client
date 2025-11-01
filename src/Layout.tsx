import Header from "@/shared/components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            <div className="max-w-xl mx-auto px-4 pt-20 h-svh">
                <main className="overflow-x-hidden h-full">
                    <Outlet />
                </main>
            </div>
        </>
    );
}
