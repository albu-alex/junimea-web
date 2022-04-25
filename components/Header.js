import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return(
        <div className={styles.container}>
            <p>Test 1</p>
            <p>Test 2</p>
            <FontAwesomeIcon
                icon={faUser}
                className={styles.userIcon}
            />

        </div>
    )
}