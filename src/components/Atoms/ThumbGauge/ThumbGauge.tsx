import { FC } from 'react'
import styles from './ThumbGauge.module.scss'
export const ThumbGauge: FC = () => {
    return (
        <section className={styles['thumb-gauge']}>
            <div className={styles['thumb-gauge__up']} style={{ width: '50%' }} aria-label='thumb gauge up'>
                <img src="/img/thumbs-up.svg" alt="thumbs up" />
                <p>50%</p>
            </div>
            <div className={styles['thumb-gauge__down']} style={{ width: '50%' }} aria-label='thumb gauge down'>
                <p>50%</p>
                <img src="/img/thumbs-down.svg" alt="thumbs down" />
            </div>
        </section>
    )
}
