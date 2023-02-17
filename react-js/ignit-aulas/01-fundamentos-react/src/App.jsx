import { Header } from './components/Header'

import './assets/css/global.css';
import style from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { HeaderPost } from './components/post/HeaderPost';
import { Post } from './components/post/Post';
import { Comment } from './components/post/Comment';
import { Comments } from './components/post/Comments';

export function App() {

  return (
  
  <div>
    <Header />

    <div className={style.wrapper}>
      <Sidebar />
        <article>
          <HeaderPost
           author='Heleno Salgado'
           job='Web developer'
          />
          <Post />
          <Comment />
          <Comments />
        </article>    
    </div>
   </div> 
  )

}