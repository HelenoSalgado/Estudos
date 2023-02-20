import style from './Header.module.css'

import IgnitLogo from './../../lib/img/Ignite-simbol-logo.svg'

export function Header() {
    return (
        <div className={style.header}>
            <img src={IgnitLogo} alt="Logotipo do ignite" />
        </div>
    )
}