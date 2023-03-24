import styles from './styles/App.module.css'
import { Planets } from './components/Planets'
import axios from 'axios'
import { Header } from './components/Header';


// Resgate planetas
const planets = await axios.get('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', {
  headers: {
    'X-RapidAPI-Key': 'cac360f3bemsh1275474746a2d01p136844jsncdfdcc912439',
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
  }
})
.then(res => res.data)
.catch(error => console.error)



function App() {

  return (

    <div className={styles.body}>
      <Header />
      <Planets
        planets={planets}
      />
    </div>

  )
}

export default App
