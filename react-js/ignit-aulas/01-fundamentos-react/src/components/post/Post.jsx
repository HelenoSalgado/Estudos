import styles from './Post.module.css'

export function Post({ content }) {
  
    return (

      <div className={styles.postContent}>

        {content.map(line => {
          if (line.type == 'paragraph'){
            return <p>{line.content}</p>
          } else if(line.type == 'link'){
            return <p><a href="">{line.content}</a></p>
          }
        })}

      </div>
    )
    
  }