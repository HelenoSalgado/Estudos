import { Trash } from 'phosphor-react'
import styles from './Comments.module.css'

export function Comments({ comments }){
    //return console.log(comments.author.avatarUrl)
    return(
        <div>
            {
              comments.map(commts =>{
                  return(
                    <div className={styles.containerComment}>
                      <img className={styles.avatarComment} src={commts.author.avatarUrl}/>

                      <div>
                          <div className={styles.boxComment}>
                          <div className={styles.infoComment}>
                        <div>
                          <strong>{commts.author.name}</strong>
                          <time>data</time>
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