import styles from '../styles/Header.module.css';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

export default function Header() {
    const [theme, setTheme] = useState("")
    useEffect(() => {
        const newTheme = localStorage.getItem('theme')
        setTheme(newTheme)
    })
    return(
        <div className={styles.container} data-theme={theme}>
            <h3 className={styles.primaryText}>juni.</h3>
            <Link href="/login">
                <a className={styles.item}>Login</a>
            </Link>
            <Link href="/">
                <a className={styles.item}>Main page</a>
            </Link>
            <Link href="/user-profile">
                <FontAwesomeIcon
                    icon={ faUser }
                    className={styles.userIcon}
                />
            </Link>
            <Link href="/settings">
                <FontAwesomeIcon
                    icon={ faCog }
                    className={styles.userIcon}
                />
            </Link>
        </div>
    )
}