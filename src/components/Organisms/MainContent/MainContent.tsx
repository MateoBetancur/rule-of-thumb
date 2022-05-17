import React, { FC } from 'react'
import { Dropdown } from '../../Atoms'
import styles from './MainContent.module.scss'
import { useState } from 'react';
export const MainContent: FC = () => {
    const [optSelected, setOptSelected] = useState('list')

    const options: string[] = ['list', 'grid'];
    const handleSelected = (opt: string): void => {
        setOptSelected(opt);
    }
    
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
