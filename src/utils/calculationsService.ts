import { formatDistance } from "date-fns";

export const calcPercent = (vot: number, total: number): number => {
    return parseFloat(((vot / total) * 100).toFixed(1));
}


export const calcTime = (date: string): string => {
    return formatDistance(new Date(date), new Date());
}
