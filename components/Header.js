import styles from '../styles/Header.module.css';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return(
        <div className={styles.container}>
            <h3>juni.</h3>
            <Link href="/login">
                <a className={styles.item}>Login</a>
            </Link>
            <Link href="/">
                <a className={styles.item}>Main page</a>
            </Link>
            <Link href="/user-profile">
                <FontAwesomeIcon
                    icon={ faUser }
                    className={styles.userIcon}
                />
            </Link>
            <Link href="/settings">
                <FontAwesomeIcon
                    icon={ faCog }
                    className={styles.userIcon}
                />
            </Link>
        </div>
    )
}