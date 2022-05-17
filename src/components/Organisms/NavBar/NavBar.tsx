import Image from 'next/image'
import React, { FC } from 'react'
import styles from './NavBar.module.scss';
export const NavBar: FC = () => {
    return (
        <nav className={styles["nav"]} role="navigation">
            <h1 className={styles["nav__logo"]}>Rule of thumb.</h1>
            <button className={`icon-button ${styles["nav__hamburger"]}`}>
                <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fillRule="nonzero" />
                </svg>
            </button>
            <ul className={styles["nav__links"]}>
                <li>
                    <a href="#">Past Trials</a>
                </li>
                <li>
                    <a href="#">How It Works</a>
                </li>
                <li>
                    <a href="#">Login / Sign Up</a>
                </li>
                <li>
                    <form action="javascript:void(0)">
                        <input className={styles["nav__search-input"]} aria-label="search" type="text" />
                        <button className={`icon-button ${styles["nav__search icon-button"]}`} type="submit">
                            <Image src={"/img/search.svg"} height={36} width={36} alt="search" />
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
    )
}
