import styles from './HeaderPost.module.css'



export function HeaderPost(props){
    return(
        <header className={styles.headerPost}>
            <div>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/73316162?v=4" alt="Foto de perfil" />
                <div className={styles.infoProfile}>
                    <strong>{props.author}</strong>
                    <p><em>{props.job}</em></p>
                </div>
            </div>
                <div className={styles.dataPublic}>
                    <time title='16 de fevereiro às 8:00 h' dateTime='16-02-2013, 8:00h'>Publicado há 1 hora</time>
                </div>
        </header>
    )
}