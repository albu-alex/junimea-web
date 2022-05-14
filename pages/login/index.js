import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Login.module.css";

export default function Login() {
    const [theme, setTheme] = useState('');
    useEffect(() => {
        const newTheme = localStorage.getItem('theme')
        setTheme(newTheme)
    })

    const router = useRouter()
    useEffect(() => {
        const authToken = localStorage.getItem('auth-token')
        if(authToken !== '') {
            router.push('/').then(() =>
                console.log("Got to main page")
            );
        }
    })

    return(
        <div className={styles.container} data-theme={theme}>
            <p className={styles.primaryText}>Welcome to juni.</p>
            <input className={styles.textInput} placeholder='Username or Email' />
            <input className={styles.textInput} placeholder='Password' />
            <button className={styles.button}>
                <p className={styles.buttonText}>Login</p>
            </button>
            <p className={styles.secondaryText}>Forgot password?</p>
        </div>
    )
}