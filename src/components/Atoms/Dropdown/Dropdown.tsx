import { FC, useState } from "react"
import styles from './Dropdown.module.scss'
interface Props {
    options: string[],
    opSelected: string;
    handleSelected(opt: string): void;
}
export const Dropdown: FC<Props> = ({ options, opSelected, handleSelected }) => {

    const [isOpen, setIsOpen] = useState(false);
    const isOpenToggle = (): void => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={styles["dropdown"]}>
            <button className={`icon-button`} onClick={isOpenToggle}>
                <span>{opSelected}</span>
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 7L6.11959e-07 -9.17939e-07L10.5 0L5.25 7Z" fill="#333333" />
                </svg>
            </button>
            <ul className={isOpen ? styles["dropdown-list--open"] : styles["dropdown-list--closed"]}>
                {options?.length && options.map((opt) =>
                    <li key={opt}>
                        <button className={`icon-button`}
                            onClick={() => {
                                handleSelected(opt);
                                isOpenToggle()
                            }}
                        >
                            {opt}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}
