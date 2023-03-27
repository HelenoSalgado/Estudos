import styles from '../styles/Footer.module.css'

export function Footer() {

    let date: string = new Date().getFullYear().toString()

    return (
        <footer className={styles.footer}>
            <div>
                <p>{date}</p>
            </div>
        </footer>
    )
}