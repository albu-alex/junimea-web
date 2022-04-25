import styles from '../styles/Home.module.css';
import {useEffect, useState} from "react";

export default function Home() {
  const [theme, setTheme] = useState("")
  useEffect(() => {
    const newTheme = localStorage.getItem("theme")
    setTheme(newTheme)
  }, [setTheme])
  return (
    <div className={styles.container} data-theme={theme}>
     <h2 className={styles.primaryText}>Welcome to juni.</h2>
    </div>
  )
}
