let mostra = document.querySelector('#mostra');
let curtidas = document.querySelector('.curtir');
let curtidasTotal;

if(localStorage.curtidas == undefined){
    localStorage.curtidas = 0;
}

async function getLikes(){
    let response = await fetch("https://orarelabutar.com/php/get-likes.php");
    var data = await response.json();
    mostra.innerText = data.curtidas;
}getLikes();

curtidas.addEventListener("click", () =>{
    
    if(localStorage.curtidas == 0){
        localStorage.curtidas++;
        like = 1 + Number(mostra.textContent);
        curtidasTotal++;
    }else{
        localStorage.curtidas = 0;
        like = -1 + Number(mostra.textContent);
        curtidasTotal--;
    }
    mostra.innerText = like;
    data = {
      id: '1',
      curtidas: like
    }
    postLike();
})

async function postLike(){
    fetch("https://orarelabutar.com/php/increment-likes.php", {
      method: "POST",
      body: JSON.stringify(data)
    })
}