import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./shared/api/client.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/theme.css";
import Layout from "./Layout.tsx";
import HomePage from "./pages/home/index.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={client}>
            <BrowserRouter basename="/sig-ai-client/">
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>
);
