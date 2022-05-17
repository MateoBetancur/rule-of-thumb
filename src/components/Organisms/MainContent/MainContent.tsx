import { FC, useEffect, useState } from 'react';

import styles from './MainContent.module.scss';
import { Dropdown } from '../../Atoms';
import { Character, DataResponse } from '../../../interfaces/characters.interface';
import { CharacterCard } from '../../Molecules';

interface Props {
    characters: Character[];
}

export const MainContent: FC<Props> = ({ characters }) => {
    console.log(characters);

    const [optSelected, setOptSelected] = useState<'list' | 'grid'>('list');

    const options: string[] = ['list', 'grid'];
    const handleSelected = (opt: 'list' | 'grid'): void => {
        setOptSelected(opt);
    }

    return (
        <main className='main-container' role='main'>
            <div className={styles["main-container__header"]}>
                <h2>Previous Rulings</h2>
                <Dropdown options={options} opSelected={optSelected} handleSelected={handleSelected} />
            </div>
            <div className=''>
                {characters.map(character =>
                    <CharacterCard key={character.id} character={character} type={optSelected} />
                )}
            </div>
        </main>
    )
}