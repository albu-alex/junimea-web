import {useEffect, useState} from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '../../styles/UserProfile.module.css';

export default function UserProfile() {
    const [theme, setTheme] = useState('');
    useEffect(() => {
        const newTheme = localStorage.getItem('theme')
        setTheme(newTheme)
    })
    return (
        <div className={styles.container} data-theme={theme}>
            <div className={styles.header}>
                <div className={styles.profile}>
                    <FontAwesomeIcon
                        icon={ faUserCircle }
                        className={styles.icon} />
                    <p className={styles.primaryText}>username</p>
                </div>
            </div>
        </div>
    )
}