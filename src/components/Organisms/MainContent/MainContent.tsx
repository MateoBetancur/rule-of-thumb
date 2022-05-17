import { FC, useEffect, useState } from 'react';

import styles from './MainContent.module.scss';
import { Dropdown } from '../../Atoms';
import { Character, DataResponse } from '../../../interfaces/characters.interface';

interface Props {
    characters: Character[];
}

export const MainContent: FC<Props> = ({ characters }) => {
    console.log(characters);

    const [optSelected, setOptSelected] = useState('list')

    const options: string[] = ['list', 'grid'];
    const handleSelected = (opt: string): void => {
        setOptSelected(opt);
    }

    useEffect(() => {
        // console.log("Acá");
        // async function fetchData() {
        //     const { data } = await api.get<DataResponse>('/api/getCharacters');
        //     console.log(data);
        // }
        // fetchData()
        // setEntries(res.data.entriesData);
    }, []);

    return (
        <main className='main-container' role='main'>
            <div className={styles["main-container__header"]}>
                <h2>Previous Rulings</h2>
                <Dropdown options={options} opSelected={optSelected} handleSelected={handleSelected} />
            </div>
            <div className=''>

            </div>
        </main>
    )
}