import { FC, useEffect, useState } from 'react';
import { Character, DataResponse } from '../../../interfaces/characters.interface';
import { ThumbGauge } from '../../Atoms';
import styles from './CharacterCard.module.scss';
import { calcPercent, getSmallText } from '../../../utils/commonsService';
import { existInVoted, toggleIfVoted } from '../../../utils/localstorageService';
import api from '../../../utils/axiosConfig';

interface Props {
    character: Character;
    type: 'list' | 'grid';
}
export const CharacterCard: FC<Props> = ({ character, type, }) => {
    const [person, setPerson] = useState<Character>(character);
    const [reputation, setReputation] = useState<string>('');
    const [selectedVote, setSelectedVote] = useState<'negative' | 'positive' | undefined>(undefined);
    const [isVoted, setIsVoted] = useState<boolean>(false);
    const [smallText, setSmallText] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getReputation()
        setSmallText(getSmallText(person.lastUpdated, person.id, person.category));
        setIsVoted(existInVoted(person.id))
    }, [person, isVoted])



    const getReputation = (): void => {
        const total = person.votes.negative + person.votes.positive;
        const neg = calcPercent(person.votes.negative, total);
        const pos = calcPercent(person.votes.positive, total);
        const rep = pos >= neg ? 'thumbs up' : 'thumbs down';
        setReputation(rep);
    }

    const handleSelectVote = (voteType: 'negative' | 'positive'): void => {
        setSelectedVote(voteType);
    }

    const onSubmitVote = async (): Promise<void> => {
        setIsLoading(true)
        person.votes[selectedVote as 'negative' | 'positive']++;
        await api.put<DataResponse<string>>('/api/updateVotes', person).then((res) => {
            setPerson({ ...person, votes: { ...person.votes } })
            toggleIfVoted(res.data.data);
            setIsLoading(false)
            setSelectedVote(undefined)
        }).catch(() => {
            setIsLoading(false)
            setSmallText("Oops, something went wrong, try again")
            return new Error("error in updateVotes service")
        });
    }

    const onVoteAgain = (): void => {
        toggleIfVoted(person.id);
        setIsVoted(existInVoted(person.id));
    }

    return (
        <article className={styles[`card--${type}`]}>
            <img src={`/img/${person.picture}`} alt={person.name} />

            <section className={styles[`card__body--${type}`]}>
                <div className={styles[`card__body__info`]}>
                    <h3>{person.name}</h3>
                    <p>{person.description}</p>
                </div>
                <div className={styles[`card__body__vote`]}>
                    <small>{smallText}</small>
                    <div className={styles[`card__body__vote__btns`]}>
                        {
                            !isVoted ?
                                <>
                                    <button className={`icon-button ${styles["icon-button"]} ${selectedVote === 'positive' && styles['icon-button--selected']}`} aria-label="thumbs up"
                                        onClick={() => handleSelectVote('positive')}
                                    >
                                        <img src="/img/thumbs-up.svg" alt="thumbs up" />
                                    </button>
                                    <button className={`icon-button ${styles["icon-button"]} ${selectedVote === 'negative' && styles['icon-button--selected']}`} aria-label="thumbs down"
                                        onClick={() => handleSelectVote('negative')}
                                    >
                                        <img src="/img/thumbs-down.svg" alt="thumbs down" />
                                    </button>
                                    <button className={`icon-button`} disabled={!selectedVote || isLoading} aria-label="vote now" onClick={onSubmitVote}>
                                        {!isLoading ? 'Vote Now' : '...Loading'}
                                    </button>
                                </> :
                                <button className={`icon-button`} aria-label="vote again" onClick={onVoteAgain}>
                                    Vote Again
                                </button>
                        }
                    </div>
                    <button className={`icon-button ${styles["icon-button"]} ${styles[`card__body_reputation--${type}`]} `} aria-label={reputation}>
                        <img src={`/img/thumbs-${reputation.split(' ')[1]}.svg`} alt={reputation} />
                    </button>
                </div>
            </section>

            <section className={styles["card_thumb-container"]}>
                <ThumbGauge votes={person.votes} />
            </section>
        </article>
    )
}
