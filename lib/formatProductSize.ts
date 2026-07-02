/** Display product lengths as meters only, e.g. "3mtr" instead of "3m (16mm)". */
export function formatProductSize(value: string): string {
    return value
        .replace(/\s*\(\d+mm\)/gi, "")
        .replace(/(\d+(?:\.\d+)?)m(?!tr)/gi, "$1mtr");
}

export function isAvailableSizeLabel(label: string): boolean {
    return /^Available Size(s)?$/i.test(label);
}
