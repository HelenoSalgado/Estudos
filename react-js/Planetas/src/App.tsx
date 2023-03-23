import styles from './App.module.css'
import { Planets } from './components/Planets'
import axios from 'axios'

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

  console.log(typeof planets)

  return (

    <div className={styles.body}>
      <div id="google_translate_element" className='boxTradutor'></div>

      <Planets
        planets={planets}
      />

      <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

    </div>

  )
}

export default App
