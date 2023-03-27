'use client';
import PropTypes from 'prop-types'
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { usePathname } from "next/navigation";


export function Header({ title }) {

    return(
        <header className={styles.header}>
            <div>
               <h1>{ title }</h1>
            </div>
            <nav className={styles.navegation}>
                <ul className={styles.navFlexItems}>
                    {usePathname() !== '/' 
                    ? <li>
                        <Link href = '/'>
                            Home
                        </Link>
                    </li> : ''}
                    <li><Link href = '#'>Sistema Solar</Link></li>
                    <li><Link href = '#'>Galáxia</Link></li>
                    <li><Link href = '#'>Universo</Link></li>
                </ul>
            </nav>
        </header>
    )
};