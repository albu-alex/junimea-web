import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faHome, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import styles from '../styles/Header.module.css';

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
                <div className={styles.item}>
                    <FontAwesomeIcon
                        icon={ faSignOut }
                        className={styles.userIcon} />
                    <a className={styles.item}>Login</a>
                </div>
            </Link>
            <Link href="/">
                <div className={styles.item}>
                    <FontAwesomeIcon
                        icon={ faHome }
                        className={styles.userIcon} />
                    <a className={styles.item}>Main page</a>
                </div>
            </Link>
            <Link href="/user-profile">
                <div className={styles.item}>
                    <FontAwesomeIcon
                        icon={ faUser }
                        className={styles.userIcon} />
                    <a className={styles.item}>User Profile</a>
                </div>
            </Link>
            <Link href="/settings">
                <div className={styles.item}>
                    <FontAwesomeIcon
                        icon={ faCog }
                        className={styles.userIcon} />
                    <a className={styles.item}>Settings</a>
                </div>
            </Link>
        </div>
    )
}