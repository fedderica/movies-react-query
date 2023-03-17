import { ImSpinner3 } from 'react-icons/fa';
import styles from "./Spinner.module.css";

export function Spinner() {
    return (
        <div className={styles.spinner}>
     <imSpinner3 size={60} />
        </div>
    )
}
