import { FC, useState } from 'react';

import styles from './MainContent.module.scss';
import { Dropdown } from '../../Atoms';
import { Character } from '../../../interfaces/characters.interface';
import { CharacterCard } from '../../Molecules';

interface Props {
    characters: Character[];
}

export const MainContent: FC<Props> = ({ characters }) => {

    const [optSelected, setOptSelected] = useState<'list' | 'grid'>('grid');

    const options: string[] = ['list', 'grid'];
    const handleSelected = (opt: 'list' | 'grid'): void => {
        setOptSelected(opt);
    }

    return (
        <main className='main-container' role='main'>
            <div className={styles['main-container__header']}>
                <h2>Previous Rulings</h2>
                <Dropdown options={options} opSelected={optSelected} handleSelected={handleSelected} />
            </div>
            <section className={styles[`main-container__cards--${optSelected}`]}>
                {characters.map(character =>
                    <CharacterCard key={character.id} character={character} type={optSelected} />
                )}
            </section>
        </main>
    )
}