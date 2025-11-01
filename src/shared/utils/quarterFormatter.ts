export function formatQuarterLabel(value: string | number): string {
    const str = value.toString();
    if (!/^\d{6}$/.test(str)) return value.toString();

    const year = str.slice(2, 4);
    const quarter = str.slice(5);
    return `'${year} Q${quarter}`;
}
