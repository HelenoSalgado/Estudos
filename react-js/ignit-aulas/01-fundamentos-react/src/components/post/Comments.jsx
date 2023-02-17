import styles from './Comments.module.css'

export function Comments(){
    return(
        <div>
        <div className={styles.containerComment}>
            <img className={styles.avatarComment} src="https://avatars.githubusercontent.com/u/73316162?v=4"/>
            <div className={styles.boxComment}>
                <div className={styles.infoComment}>
                   <strong>Heleno Salgado</strong>
                   <time>Há cerca de 30min</time>
                </div>
                <div className={styles.contentComment}>
                   <p>Obrigado pelo fadeback.</p>
                </div>
            </div>
        </div>
           <div className={styles.like}>
             👍 Aplaudir . 03
           </div>
        </div>
        
    )
}