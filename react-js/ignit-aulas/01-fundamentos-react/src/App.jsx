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
  }
]

export function App() {
  
  const [commts, setCommts] = useState([
    'Post top demais'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  function handleNewCommentChange(e) {
    setNewCommentText(e.target.value)
  }

  function handleCreateNewComment(e) {
    e.preventDefault()
    setCommts([...commts, newCommentText])
    setNewCommentText('')
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
                newCommentChange={handleNewCommentChange}
                newCommentText={newCommentText}
              />
              <Comments 
                comments={commts}
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