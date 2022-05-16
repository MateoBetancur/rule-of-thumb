export interface DataResponse {
    data: Character[];
    message: string
}

export interface Character {
    name: string;
    description: string;
    category: string;
    picture: string;
    lastUpdated: Date;
    votes: Votes;
}

export interface Votes {
    positive: number;
    negative: number;
}
