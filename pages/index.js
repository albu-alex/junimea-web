import {useEffect, useState} from "react";

import {getTheme} from "../methods/app/getTheme";

import styles from '../styles/Home.module.css';

export default function Home() {
  const [theme, setTheme] = useState("")
  useEffect(() => {
    setTheme(getTheme())
  }, [setTheme])
  return (
    <div className={styles.container} data-theme={theme}>
     <h2 className={styles.primaryText}>Welcome to juni.</h2>
    </div>
  )
}
