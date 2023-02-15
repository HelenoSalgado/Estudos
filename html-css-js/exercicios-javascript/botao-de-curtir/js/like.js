let mostra = document.querySelector('#mostra');
let curtidas = document.querySelector('.curtir');
let pulsar = document.querySelector('.curtir img')
let curtidasTotal;

if(localStorage.curtidas == undefined){
    localStorage.curtidas = 0;
}

function getLikes(){
    let response = await fetch("http://botao-de-curtir.atwebpages.com/php/get-likes.php");
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
    pulsar.style.animationName = "pulsar"; 
    setTimeout(() => {
        mostra.innerText = like;
        pulsar.style.animationName = "";
    }, 1000);
    
    postLike();
})

async function postLike(){

fetch("http://botao-de-curtir.atwebpages.com/php/increment-likes.php", {
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
