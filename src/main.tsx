import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/theme.css";
import Layout from "./Layout.tsx";
import HomePage from "./pages/home/index.tsx";
import ProfilePage from "./pages/profile/index.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
