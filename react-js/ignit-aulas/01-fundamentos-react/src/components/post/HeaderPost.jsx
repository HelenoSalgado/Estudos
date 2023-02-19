import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './HeaderPost.module.css'



export function HeaderPost({ author }){
    const publishedDateFormated = format(author.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })
    const publishedRealativeNow = formatDistanceToNow(author.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    return(
        <header className={styles.headerPost}>
            <div>
                <img className={styles.avatar} src={author.avatarUrl} alt="Foto de perfil" />
                <div className={styles.infoProfile}>
                    <strong>{author.name}</strong>
                    <p><em>{author.job}</em></p>
                </div>
            </div>
                <div className={styles.dataPublic}>
                    <time title='16 de fevereiro às 8:00 h' dateTime={publishedDateFormated}>{publishedRealativeNow}</time>
                </div>
        </header>
    )
}