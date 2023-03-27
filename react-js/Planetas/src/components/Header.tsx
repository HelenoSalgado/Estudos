import styles from '../styles/Header.module.css'

export function Header() {
    return(
        <header className={styles.header}>
            <div>
               <h1>Planets</h1>
            </div>
            <nav className={styles.navegation}>
                <ul className={styles.navFlexItems}>
                    <li>Sistema Solar</li>
                    <li>Galáxia</li>
                    <li>Universo</li>
                </ul>
            </nav>
        </header>
    )
}