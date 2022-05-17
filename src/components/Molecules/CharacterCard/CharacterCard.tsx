import { FC } from 'react'
import { Character } from '../../../interfaces/characters.interface';
import styles from './CharacterCard.module.scss';
interface Props {
    character: Character;
    type: 'list' | 'grid';
}
export const CharacterCard: FC<Props> = ({ character, type }) => {
    const {
        name,
        description,
        category,
        picture,
        lastUpdated,
        votes } = character;
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
                        <button className={`icon-button ${styles["icon-button"]}`} aria-label="thumbs up">
                            <img src="/img/thumbs-up.svg" alt="thumbs up" />
                        </button>
                        <button className={`icon-button ${styles["icon-button"]}`} aria-label="thumbs down">
                            <img src="/img/thumbs-down.svg" alt="thumbs down" />
                        </button>
                    </div>
                    <button className={`icon-button ${styles["icon-button"]} ${styles["card__body_reputation"]} `} aria-label="thumbs down">
                        <img src="/img/thumbs-down.svg" alt="thumbs down" />
                    </button>
                </div>

            </section>
        </article>
    )
}
