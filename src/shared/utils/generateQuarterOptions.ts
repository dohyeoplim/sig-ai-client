export function generateQuarterOptions(
    startYear: number,
    endYear: number
): { label: string; value: string }[] {
    const quarters = ["1분기", "2분기", "3분기", "4분기"];
    const options: { label: string; value: string }[] = [];

    for (let y = endYear; y >= startYear; y--) {
        for (let q = 4; q >= 1; q--) {
            options.push({
                label: `${y}년 ${quarters[q - 1]}`,
                value: `${y}${String(q).padStart(1, "0")}`,
            });
        }
    }

    return options;
}
