import { useEffect, useState } from "react";
import { modifyTheme } from "../../methods/settings/modifyTheme";
import { useRouter } from "next/router";

import styles from "../../styles/Settings.module.css";
import {getTheme} from "../../methods/app/getTheme";

export default function Settings() {
    const [theme, setTheme] = useState("")
    const [isLoggedIn, changeLoggedStateTo] = useState(false);
    const router = useRouter()
    useEffect(() => {
        setTheme(getTheme())
    })
    useEffect(() => {
        const authToken = localStorage.getItem('auth-token');
        changeLoggedStateTo((authToken !== ""));
    }, [])
    const changeTheme = () => {
      const newTheme = modifyTheme(theme)
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    }
    const logOut = () => {
        localStorage.setItem('auth-token', '');
        router.push('/login').then(() =>
            console.log("Got to login")
        );
    }
    return(
        <div className={styles.container} data-theme={theme}>
            <div className={styles.buttonContainer}>
                <button onClick={changeTheme} className={styles.button}>
                    <p className={styles.buttonText}>{(theme === 'dark') ? 'Dark' : 'Light'} mode</p>
                </button>
                <button onClick={changeTheme} className={styles.button}>
                    <p className={styles.buttonText}>Update profile</p>
                </button>
                <button onClick={logOut} className={styles.button}>
                    <p className={styles.buttonText}>{(isLoggedIn) ? 'Logout' : 'Login'}</p>
                </button>
                <button onClick={() => router.push('/')} className={styles.button}>
                    <p className={styles.buttonText}>Save changes</p>
                </button>
            </div>
        </div>
    )
}