import styles from './Comment.module.css'

export function Comment({ newComment, newCommentChange, newCommentText }){

    return(
        <form onSubmit={newComment} className={styles.comment}>
            <strong>Deixe seu feedback</strong>
            <textarea 
            name="comment" 
            id="comment" 
            cols="30" 
            rows="05"
            onChange={newCommentChange}
            value={newCommentText}
            >

            </textarea>
            <button type='submit'>Publicar</button>
        </form>
    )
}