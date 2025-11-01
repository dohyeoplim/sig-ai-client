import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    base: "/",
    server: {
        proxy: {
            "/api": {
                target: "http://3.35.81.101:8080",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api\//, "/"),
            },
        },
    },
});
