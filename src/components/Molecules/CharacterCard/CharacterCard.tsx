import { FC, useEffect, useState } from 'react';
import { Character } from '../../../interfaces/characters.interface';
import { ThumbGauge } from '../../Atoms';
import styles from './CharacterCard.module.scss';
import { calcPercent } from '../../../utils/calculations';

interface Props {
    character: Character;
    type: 'list' | 'grid';
}
export const CharacterCard: FC<Props> = ({ character, type }) => {
    const { name, description, category, picture, lastUpdated, votes } = character;
    const [reputation, setReputation] = useState<string>('');
    const [selectedVote, setSelectedVote] = useState<string>('');
    useEffect(() => {
        getReputation();
    }, [])

    const getReputation = (): void => {
        const total = votes.negative + votes.positive;
        const neg = calcPercent(votes.negative, total);
        const pos = calcPercent(votes.positive, total);
        const rep = pos >= neg ? 'thumbs up' : 'thumbs down';
        setReputation(rep);
    }

    const handleSelectVote = (type: 'negative' | 'positive'): void => {
        setSelectedVote(type);
    }

    const onSubmitVote = () => {
        alert(selectedVote)
    }

    return (
        <article className={styles[`card--${type}`]}>
            <img src={`/img/${picture}`} alt={name} />

            <section className={styles[`card__body--${type}`]}>
                <div className={styles[`card__body__info`]}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <div className={styles[`card__body__vote`]}>
                    <small>24 days ago in Business</small>
                    <div className={styles[`card__body__vote__btns`]}>
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
                        <button className={`icon-button`} disabled={!selectedVote} aria-label="vote now" onClick={onSubmitVote}>
                            Vote Now
                        </button>
                    </div>
                    <button className={`icon-button ${styles["icon-button"]} ${styles[`card__body_reputation--${type}`]} `} aria-label={reputation}>
                        <img src={`/img/thumbs-${reputation.split(' ')[1]}.svg`} alt={reputation} />
                    </button>
                </div>
            </section>
            <section className={styles["card_thumb-container"]}>
                <ThumbGauge votes={votes} />
            </section>
        </article>
    )
}
