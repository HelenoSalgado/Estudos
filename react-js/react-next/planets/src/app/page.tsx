import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
        <Link href = './planets'>Planets</Link>
    </div>
  )
}
