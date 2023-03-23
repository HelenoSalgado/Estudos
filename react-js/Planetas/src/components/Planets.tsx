import styles from './Planets.module.css';
import axios from 'axios';

type Planet = {
  name: string; 
  description: string; 
  imgSrc: { img: string }[]
}

export function Planets({planets}: any) {
 
  return (
    <div>
      {
        planets.map((planet: Planet) => {

          return (
            <div className={styles['box-planets']}>
              <div>
                <h3>{planet.name}</h3>
                <p>{planet.description}</p>
              </div>
              <img className={styles.img} src={planet.imgSrc[0].img} />
            </div>
          )
        })
      }
    </div>
  )

}