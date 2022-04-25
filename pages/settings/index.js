import useLocalStorage from 'use-local-storage';
import {useEffect, useState} from "react";
import { modifyTheme } from "../../methods/settings/modifyTheme";

export default function Settings() {
    const [theme, setTheme] = useState("")
    useEffect(() => {
        const newTheme = localStorage.getItem('theme')
        setTheme(newTheme)
    }, [])
    const changeTheme = () => {
      const newTheme = modifyTheme(theme)
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    }
    return(
        <div>
            <button onClick={() => changeTheme()} data-theme={theme}>
                <p>{(theme === 'dark') ? 'Dark' : 'Light'} mode</p>
            </button>
        </div>
    )
}