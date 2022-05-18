import { formatDistance } from "date-fns";
import { existInVoted } from "./localstorageService";

export const calcPercent = (vot: number, total: number): number => {
    return parseFloat(((vot / total) * 100).toFixed(1));
}


export const calcTime = (date: string): string => {
    return formatDistance(new Date(date), new Date());
}


export const getSmallText = (lastUpdated: string, id: string, category: string): string => {
    if (existInVoted(id)) {
        return 'Thank you for your vote!';
    }
    return `${calcTime(lastUpdated)} in ${category}`;
}