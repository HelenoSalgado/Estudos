//import { format, formatDistanceToNow } from 'date-fns'
//import ptBR from 'date-fns/locale/pt-BR'
import { Trash } from 'phosphor-react'
import styles from './Comments.module.css'

export function Comments({ comments }) {

  return (

    <div>
      {
        comments.map(commts => {

          return (

            <div className={styles.containerComment}>
              <img className={styles.avatarComment} src="https://avatars.githubusercontent.com/u/48570772?v=4" />

              <div>
                <div className={styles.boxComment}>
                  <div className={styles.infoComment}>
                    <div>
                      <strong>Allan Gabriel</strong>
                      <time dataTime="">fffhtfh</time>
                    </div>
                    <button className={styles.trash}>
                      <Trash />
                    </button>
                  </div>
                  <div className={styles.contentComment}>
                    <p>{commts}</p>
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