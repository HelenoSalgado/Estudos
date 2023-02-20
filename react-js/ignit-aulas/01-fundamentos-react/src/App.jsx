import { Header } from './components/Header'

import './../lib/css/global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { HeaderPost } from './components/post/HeaderPost';
import { Post } from './components/post/Post';
import { Comment } from './components/post/Comment';
import { Comments } from './components/post/Comments';
import { useState } from 'react';

const posts = [

  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/73316162?v=4',
      name: 'Heleno Salgado',
      job: 'Web developer',
      publishedAt: new  Date()
    },

    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 leno.design/doctorcare'},
      { type: 'link', content: '#novoprojeto, #nlw, #rocketseat'}
    ],

    comments: [
      {
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/48570772?v=4',
          name: 'Allan Gabriel',
          publishedAt: new  Date()
        },
        content: 'Muito bom...',
      }
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/48570772?v=4',
      name: 'Allan Gabriel',
      job: 'Web developer',
      publishedAt: new  Date()
    },

    content:[
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Tem projeto novo no meu portfólio 🚀' },
      { type: 'link', content: '👉 allan.design/doctorcare'},
      { type: 'link', content: '#novoprojeto, #nlw, #rocketseat'}
    ],

    comments: [
      {
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/73316162?v=4',
          name: 'Heleno Salgado',
          publishedAt: new  Date()
        },
        content: 'Muito bom...',
      }
    ]
  }
]

export function App() {
  
  const [commts, setCommts] = useState([
    'Post top demais'
  ])

  function handleCreateNewComment(e) {

    e.preventDefault()
    //setCommts(commts + e.target.comment.value)
  
  }

  return (
  
  <div>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <article>
      {
        posts.map(post => {
          return (
            <div>
              <HeaderPost
                author={post.author}
              />   
              <Post 
                content={post.content}
              />
              <Comment 
                newComment={handleCreateNewComment}
              />
              <Comments 
                comments={post.comments}
              />
            </div>
          )
        })
      }  
      </article>   
    </div>
   </div> 
  )

}