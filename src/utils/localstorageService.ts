export const toggleIfVoted = (id: string) => {
    let charactersVoted: string[] = characterVoted();
    if (charactersVoted.includes(id)) {
        charactersVoted = charactersVoted.filter(votedId => votedId !== id);
    } else {
        charactersVoted.push(id);
    }
    localStorage.setItem('charactersVoted', JSON.stringify(charactersVoted));
}

const characterVoted = (): string[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export const existInVoted = (id: string): boolean => {
    console.log(id);
    if (typeof window === 'undefined') return false;
    const charactersVoted: string[] = characterVoted();
    return charactersVoted.includes(id);
}