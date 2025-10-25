import type { CardTheme } from "./types";

export const cardThemes: Record<CardTheme, string> = {
    plain: "bg-white border-[0.3px] border-grey-300",
    green: "bg-key-50 border-[0.3px] border-grey-200",
    orange: "bg-orange-50 border-[0.3px] border-grey-200",
    red: "bg-rose-50 border-[0.3px] border-grey-200",
    grey: "bg-slate-50 border-[0.3px] border-grey-200",
};
