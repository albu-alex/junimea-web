import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { redirectToMainPage } from "../../methods/app/redirectToMainPage";
import { getTheme } from "../../methods/app/getTheme";

import styles from "../../styles/Login.module.css";

export default function Login() {
    const [theme, setTheme] = useState('');
    const [shouldRender, setShouldRender] = useState(false)
    useEffect(() => {
        setTheme(getTheme)
    })

    const router = useRouter()
    useEffect(() => {
        setShouldRender(redirectToMainPage(router))
    })

    return(
        <div data-theme={theme}>
            { shouldRender &&
                <div className={styles.container} data-theme={theme}>
                    <p className={styles.primaryText}>Welcome to juni.</p>
                    <input className={styles.textInput} placeholder='Username or Email'/>
                    <input className={styles.textInput} placeholder='Password'/>
                    <button className={styles.button}>
                        <p className={styles.buttonText}>Login</p>
                    </button>
                    <p className={styles.secondaryText}>Forgot password?</p>
                </div>
            }
        </div>
    )
}