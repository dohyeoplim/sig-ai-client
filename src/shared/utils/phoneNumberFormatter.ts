export const formatPhoneNumber = (value: string) => {
    const numeric = value.replace(/\D/g, "");
    if (numeric.length < 4) return numeric;
    if (numeric.length < 8) return `${numeric.slice(0, 3)}-${numeric.slice(3)}`;
    return `${numeric.slice(0, 3)}-${numeric.slice(3, 7)}-${numeric.slice(
        7,
        11
    )}`;
};
