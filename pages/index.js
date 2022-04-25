import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import useLocalStorage from 'use-local-storage';
import { useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useLocalStorage('theme', '');
  useEffect(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(defaultDark ? 'dark' : 'light')
  }, [setTheme])
  return (
    <div className={styles.container} data-theme={theme}>
     <h2 className={styles.primaryText}>Welcome to juni.</h2>
    </div>
  )
}
