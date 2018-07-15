export function getUpperSymbols(str: string) {
    return str.split("").filter((s) => s.toUpperCase() === s && s.trim());
}
