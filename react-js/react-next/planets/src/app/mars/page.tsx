// type Mars = {
//     img_src: string,
// }[]


// export default async function Mars() {

//     const photos = fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=qdj430yRVrTdyKq9uu0Hl2xtao15TCcWdF6eh6tD');

//     const resultPhotos = (await photos).json();

//     console.log(resultPhotos);

//     return (
//         <div>
//            {
//             resultPhotos[0].map(image => {

//                 console.log(image[0].img_src)

//                 return(
//                     <img src={image.img_src}/>
//                 )
//             })
//            }
//         </div>
//     )
// }