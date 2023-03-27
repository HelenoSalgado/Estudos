import styles from './styles/App.module.css'
import { Planets } from './components/Planets'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import axios from 'axios'
import { Mars } from './pages/Mars';
import mars from './utils/marsApi';


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
      <Footer />
      <Mars 
       photos={mars}
      />
    </div>

  )
}

export default App
