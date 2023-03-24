import styles from './Planets.module.css';

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
            <div className={styles['box-planets']}>
              <div>
                <h2>{planet.name}</h2>
                <p>{planet.description}</p>
                <p>
                  <strong>Mass</strong>: 
                     <span className={styles.mass}> {planet.basicDetails[0].mass}</span>
                </p>
                <p>
                  <a className={styles['wiki-link']} href={planet.wikiLink} target="_blank" rel="noopener noreferrer">WikiLink</a>
                </p>
              </div>
              <img className={styles.img} src={planet.imgSrc[0].img} />
            </div>
          );
        })
      }
    </div>
  )
}