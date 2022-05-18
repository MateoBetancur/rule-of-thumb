import { FC, useState, useEffect } from 'react';
import styles from './ThumbGauge.module.scss'
import { Votes } from '../../../interfaces/characters.interface';
import { calcPercent } from '../../../utils/commonsService';

interface Props {
    votes: Votes
}
export const ThumbGauge: FC<Props> = ({ votes }) => {
    const [upPercent, setUpPercent] = useState(0);
    const [downPercent, setDownPercent] = useState(0);

    useEffect(() => {
        const total = votes.negative + votes.positive;
        setDownPercent(calcPercent(votes.negative, total))
        setUpPercent(calcPercent(votes.positive, total))
        console.log(votes);
        
    }, [votes])
    


    return (
        <section className={styles['thumb-gauge']}>
            <div className={styles['thumb-gauge__up']} style={{ width: `${upPercent}%` }} aria-label='thumb gauge up'>
                <img src="/img/thumbs-up.svg" alt="thumbs up" />
                <p>{upPercent}</p>
            </div>
            <div className={styles['thumb-gauge__down']} style={{ width: `${downPercent}%` }} aria-label='thumb gauge down'>
                <p>{downPercent}</p>
                <img src="/img/thumbs-down.svg" alt="thumbs down" />
            </div>
        </section>
    )
}
