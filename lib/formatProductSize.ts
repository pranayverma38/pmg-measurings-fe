/** Display product lengths as meters only, e.g. "3mtr" instead of "3m (16mm)". */
export function formatProductSize(value: string): string {
    return value
        .replace(/\s*\(\d+mm\)/gi, "")
        .replace(/(\d+(?:\.\d+)?)m(?!tr)/gi, "$1mtr");
}

/** Display product lengths with blade width, e.g. "3mtr | 16mm". */
export function formatProductSizeWithWidth(value: string): string {
    const match = value.match(/^\s*(\d+(?:\.\d+)?)\s*m(?:tr)?\s*\((\d+)\s*mm\)\s*$/i);

    if (!match) {
        return formatProductSize(value);
    }

    const [, length, width] = match;
    return `${length}mtr | ${width}mm`;
}

/** Format one or more available size values for the product spec panel. */
export function formatAvailableSizes(values: string[]): string {
    return values.map(formatProductSizeWithWidth).join("\n");
}

export function isAvailableSizeLabel(label: string): boolean {
    return /^Available Size(s)?$/i.test(label);
}
