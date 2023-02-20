import styles from './Comment.module.css'

export function Comment({ handleCreateNewComment }){

    return(
        <form onSubmit={handleCreateNewComment} className={styles.comment}>
            <strong>Deixe seu feedback</strong>
            <textarea 
            name="comment" 
            id="comment" 
            cols="30" 
            rows="05"
            >

            </textarea>
            <button type='submit'>Publicar</button>
        </form>
    )
}