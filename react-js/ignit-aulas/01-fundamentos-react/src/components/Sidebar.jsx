import {PencilLine} from 'phosphor-react'
import styles from "./Sidebar.module.css";

import avatar from './../../lib/img/73316162.png'

export function Sidebar(){
    return (
        
        <aside className={styles.sidebar}>
           <img className={styles.cover} src="https://images.unsplash.com/photo-1615657271151-6f0f850cb992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80" />

           <img className={styles.avatar} src={avatar} alt="Imagem de perfil" />

           <div className={styles.infoProfile}>
             <h3>Heleno Salgado</h3>
             <p>Desenvolvedor Front-end</p>
           </div>

           <div className={styles.editProfile}>
              <a href="#" 
              target="_blank" 
              rel="noopener noreferrer">
                <PencilLine />
                Editar Perfil
              </a>
           </div>
        </aside>
    )
}