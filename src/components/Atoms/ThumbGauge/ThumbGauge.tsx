import { FC, useState, useEffect } from 'react';
import styles from './ThumbGauge.module.scss'
import { Votes } from '../../../interfaces/characters.interface';
import { calcPercent } from '../../../utils/commonsService';

interface Props {
    votes: Votes
}
export const ThumbGauge: FC<Props> = ({ votes }) => {
    const [positivePercent, setPositivePercent] = useState(0);
    const [negativePercent, setNegativePercent] = useState(0);

    useEffect(() => {
        const total = votes.negative + votes.positive;
        setNegativePercent(calcPercent(votes.negative, total))
        setPositivePercent(calcPercent(votes.positive, total))
    }, [votes])
    


    return (
        <section className={styles['thumb-gauge']}>
            <div className={styles['thumb-gauge__up']} style={{ width: `${positivePercent}%` }} aria-label='thumb gauge up'>
                <img src="/img/thumbs-up.svg" alt="thumbs up" />
                <p>{positivePercent}</p>
            </div>
            <div className={styles['thumb-gauge__down']} style={{ width: `${negativePercent}%` }} aria-label='thumb gauge down'>
                <p>{negativePercent}</p>
                <img src="/img/thumbs-down.svg" alt="thumbs down" />
            </div>
        </section>
    )
}
