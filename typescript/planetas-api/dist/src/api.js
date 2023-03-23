"use strict";
const data = async () => {
    await fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cac360f3bemsh1275474746a2d01p136844jsncdfdcc912439',
            'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        },
    })
        .then(planet => {
        return planet.json();
    });
};
const planets = document.querySelector('#planets');
const result = data();
planets.innerHTML = `${result}`;
var da = data;
console.log(data());
