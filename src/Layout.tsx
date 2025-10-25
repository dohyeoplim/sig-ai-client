import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            <div className="max-w-2xl mx-auto px-4 pt-17.5 h-svh">
                <main className="overflow-x-hidden">
                    <Outlet />
                </main>
            </div>
        </>
    );
}
