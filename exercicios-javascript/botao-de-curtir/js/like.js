let mostra = document.querySelector('#mostra');
let curtidas = document.querySelector('.curtir');
let curtidasTotal;

if(localStorage.curtidas == undefined){
    localStorage.curtidas = 0;
}

async function getLikes(){
    let response = await fetch("botao-de-curtir.atwebpages.com/php/get-likes.php");
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
    
    postLike();
})

async function postLike(){

fetch("botao-de-curtir.atwebpages/php/increment-likes.php", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: like
  })
  .then(res => res.json()) 
  //.then(response => console.log('Success:', JSON.stringify(response)))
  //.catch(error => console.error('Error:',error))
}
