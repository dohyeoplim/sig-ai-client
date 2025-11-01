import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/theme.css";
import Layout from "./Layout.tsx";
import HomePage from "./pages/home/index.tsx";
import { createQueryClient } from "./shared/lib/queryClient.ts";
import { ModalProvider } from "./shared/components/Modal/Provider.tsx";
import LoadSession from "./shared/lib/session/LoadSession.tsx";
import AnalysisPage from "./pages/analysis/index.tsx";

const qc = createQueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={qc}>
            <LoadSession />
            <ModalProvider>
                <BrowserRouter basename="/sig-ai-client/">
                    <Routes>
                        <Route element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route path="analysis" element={<AnalysisPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ModalProvider>
        </QueryClientProvider>
    </StrictMode>
);
