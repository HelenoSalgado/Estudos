import styles from './Post.module.css'

export function Post() {

    return (
    
     <div className={styles.postContent}>
      
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">👉 jane.design/doctorcare</a></p>

        <p><a href="#">#novoprojeto, #nlw, #rocketseat</a></p>

      </div>
    )
    
  }