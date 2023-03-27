type Mars = {
    img_src: string,
}[]


export function Mars({photos}: any) {
    console.log(photos)
    return (
        <div>
           {
            photos[0].map(image => {
                console.log(image[0].img_src)
                return(
                    <img src={image.img_src}/>
                )
            })
           }
        </div>
    )
}