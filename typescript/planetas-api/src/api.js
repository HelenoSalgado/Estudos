const planets = fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cac360f3bemsh1275474746a2d01p136844jsncdfdcc912439',
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
  },
})

const planetsContent = document.querySelector('#planets');

function getPlanets() {
  return planets.then(data => data.json())
    .catch(err => console.log(err))
}

async function showPlanets() {

  
  const planet = await getPlanets();

  for (let i = 0; i < planet.length; i++) {

    let box = document.createElement('div');

    box.innerHTML =
      `<div>
         <h3>${planet[i].name}</h3>
           <p>${planet[i].description}</p>
             <img src="${planet[i].imgSrc[0].img}">
       </div>`;

    planetsContent.appendChild(box);
  }

}
showPlanets()




