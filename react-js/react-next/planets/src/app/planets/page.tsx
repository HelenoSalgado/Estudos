import { Planets } from "@/components/Planets";
import { Suspense } from "react";

export const metadata = {
    title: 'Planets',
}

export default async function planetsAll() {

    const getPlanets = await fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', {
        headers: {
          'X-RapidAPI-Key': 'cac360f3bemsh1275474746a2d01p136844jsncdfdcc912439',
          'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        }
    });

    const planets = await getPlanets.json();

    return (
  
      <div>
        <Suspense fallback={<p>Loading</p>}>
        <Planets
          planets={planets}
        />
        </Suspense>
      </div>
  
    )
  }