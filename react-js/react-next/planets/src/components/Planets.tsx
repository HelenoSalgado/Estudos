/* eslint-disable react/jsx-key */
import styles from '../styles/Planets.module.css';

type Planet = {
  name: string,
  description: string,
  basicDetails: {
    mass: string,
  }[],
  imgSrc: { 
    img: string
  }[],
  wikiLink: string,
}

export function Planets({ planets }: any) {

  return (
    <div>
      {
        planets.map((planet: Planet ) => {

          return (
            <div className={styles.boxPlanets}>
              <div>
                <h2>{planet.name}</h2>
                <p>{planet.description}</p>
                <p>
                  <strong>Mass</strong>: 
                     <span className={styles.mass}> {planet.basicDetails[0].mass}</span>
                </p>
                <p>
                  <a className={styles.wikiLink} href={planet.wikiLink} target="_blank" rel="noopener noreferrer">WikiLink</a>
                </p>
              </div>
              <picture>
              <img
                className={styles.imagePlanet} 
                src={planet.imgSrc[0].img}
                alt={planet.name}
                title={planet.name}
              />
              </picture>
              
            </div>
          );
        })
      }
    </div>
  )
}