import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Trash } from 'phosphor-react'
import styles from './Comments.module.css'

export function Comments({ comments }){

  return console.log(result)

    return(
        <div>
            {
              comments.map(commts =>{

                //return console.log(commts.author.publishedAt)

                const dataComment = format(commts.author.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
                  locale: ptBR,
                })

                const publishedRealativeNow = formatDistanceToNow(commts.author.publishedAt, {
                  locale: ptBR,
                  addSuffix: true
              })

                  return(
                    <div className={styles.containerComment}>
                      <img className={styles.avatarComment} src={commts.author.avatarUrl}/>

                      <div>
                          <div className={styles.boxComment}>
                          <div className={styles.infoComment}>
                        <div>
                          <strong>{commts.author.name}</strong>
                          <time dataTime={dataComment}>{publishedRealativeNow}</time>
                        </div>
                          <button className={styles.trash}>
                             <Trash />
                          </button>
                      </div>
                        <div className={styles.contentComment}>
                          <p>{commts.content}</p>
                        </div> 
                     </div>
                     <div className={styles.like}>
                       👍 Aplaudir . 03
                     </div>
                     </div>
                    </div>
                  )
              })   
            }   
        </div>     
    )
}