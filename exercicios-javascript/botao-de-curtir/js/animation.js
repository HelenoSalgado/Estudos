// Descontar a interface de navegadores em dispositivos móveis.
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

var audio = document.querySelector('audio');
var player = document.querySelector('.play');
var discPlay = document.querySelector('.disc-play');
var count = 0;
var botaoPlay = document.querySelector(".reproduzir");
var botaoPause = document.querySelector(".pause");
var capaNaruto = document.querySelector(".capa");
var animationMusic = document.querySelector(".slide");
var slides = document.getElementsByClassName("narutoSlide");

player.addEventListener("click", () =>{
    if(count == 0){
        count = 1;
            audio.play();
            botaoPlay.style.display = "none";
            botaoPause.style.display = "flex";
            showSlides();
            animationMusic.style.display = "block";
            capaNaruto.style.display = "none";
            discPlay.style.display = "block"
        }else{
            count = 0;
            audio.pause();
            botaoPlay.style.display = "block";
            botaoPause.style.display = "none";
            animationMusic.style.display = "none";
            capaNaruto.style.display = "block";
            discPlay.style.display = "none"
        }     
})

var slideIndex = 0;  
function showSlides() {
     var i;
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
     }
     slideIndex++;
     if (slideIndex > slides.length){
         slideIndex = 1
     }    
     slides[slideIndex-1].style.display = "block";  
     setTimeout(showSlides, 6000); // Change image every 2 seconds
}