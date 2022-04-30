import { useEffect, useState } from "react";
import { modifyTheme } from "../../methods/settings/modifyTheme";
import styles from "../../styles/Settings.module.css";
import { useRouter } from "next/router";

export default function Settings() {
    const [theme, setTheme] = useState("")
    const router = useRouter()
    useEffect(() => {
        const newTheme = localStorage.getItem('theme')
        setTheme(newTheme)
    })
    const changeTheme = () => {
      const newTheme = modifyTheme(theme)
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    }
    const logOut = () => {
        localStorage.setItem('auth-token', '');
        router.push('/login').then( () =>
            console.log("Got to login")
        )
    }
    return(
        <div className={styles.container} data-theme={theme}>
            <div className={styles.buttonContainer}>
                <button onClick={changeTheme} className={styles.button}>
                    <p>{(theme === 'dark') ? 'Dark' : 'Light'} mode</p>
                </button>
                <button onClick={changeTheme} className={styles.button}>
                    <p>Update profile</p>
                </button>
                <button onClick={logOut} className={styles.button}>
                    <p>Logout</p>
                </button>
                <button onClick={changeTheme} className={styles.button}>
                    <p>Save changes</p>
                </button>
            </div>
        </div>
    )
}