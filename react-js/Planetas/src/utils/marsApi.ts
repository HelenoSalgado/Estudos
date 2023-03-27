import axios from "axios";

// Resgate Mars
const mars = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=qdj430yRVrTdyKq9uu0Hl2xtao15TCcWdF6eh6tD')
.then(res => res.data)
.catch(error => console.error)

console.log(mars);

export default mars;