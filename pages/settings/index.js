import {useEffect, useState} from "react";
import { modifyTheme } from "../../methods/settings/modifyTheme";
import styles from "../../styles/Settings.module.css";

export default function Settings() {
    const [theme, setTheme] = useState("")
    useEffect(() => {
        const newTheme = localStorage.getItem('theme')
        setTheme(newTheme)
    })
    const changeTheme = () => {
      const newTheme = modifyTheme(theme)
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    }
    return(
        <div className={styles.container} data-theme={theme}>
            <div className={styles.buttonContainer}>
                <button onClick={changeTheme} className={styles.button}>
                    <p>{(theme === 'dark') ? 'Dark' : 'Light'} mode</p>
                </button>
            </div>
        </div>
    )
}