import { Header } from './components/Header'
import { Post } from './Post'

import './assets/css/global.css';

export function App() {

  return (
  
  <div>
    <Header />
    
      <Post
         author="Heleno Salgado"
         content="Aprende react na rocketseat."
       />
      <Post
        author="Gabriel Fernandes"
        content="O curso de react da rocketseat está excelênte."
      />
   </div> 
  )

}