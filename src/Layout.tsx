import Header from "@/shared/components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            <div className="max-w-xl mx-auto px-4 pt-16 h-svh">
                <main className="overflow-x-hidden h-full pb-8">
                    <Outlet />
                </main>
            </div>
        </>
    );
}
