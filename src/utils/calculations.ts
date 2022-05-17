export const calcPercent = (vot: number, total: number): number => {
    return parseFloat(((vot / total) * 100).toFixed(1));
}