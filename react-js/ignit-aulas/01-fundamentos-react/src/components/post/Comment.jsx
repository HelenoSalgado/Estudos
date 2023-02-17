import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <strong>Deixe seu feedback</strong>
            <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="06"
            >

            </textarea>
            <button>Publicar</button>
        </div>
    )
}