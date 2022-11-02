import { postConteudo } from "../models/postConteudo.js";
import { getConteudo } from "../../../../asset/js/components/getConteudo.js";
import { menuConfig, hamburguer } from "../templates/menuConfig.js";

// Buscar cores e inserir no corpo da página conforme a opção selecionada

var getColors = await getConteudo()

var colors = document.querySelector("#colors");
var body = document.querySelector("body");
var visibleCodigo = document.querySelector(".visible-codigo-color");

// Menu

body.appendChild(menuConfig)

body.appendChild(hamburguer)

hamburguer.addEventListener("click", () => {
    
    hamburguer.classList.toggle("menu-hamburguer-ativo")
    menuConfig.classList.toggle("menu-ativo")

})

// Fim

// Opções de cores

colors.addEventListener("click", (e) => {

  var optionColor;
  
  if (e.target.value == "Cor de Fundo") {
    optionColor = getColors[0].cor_de_fundo;
  }

  if (e.target.value == "Cor de Fonte") {
    optionColor = getColors[0].cor_de_fonte;
  }

  if (e.target.value == "Cor Caixa de Link") {
    optionColor = getColors[0].cor_caixa_link;
  }

  if (e.target.value == "Cor Fonte Link") {
    optionColor = getColors[0].cor_fonte_link;
  }

  document.body.style.setProperty('--cor-fundo', optionColor);
  visibleCodigo.value = optionColor;
  
})

document.body.style.setProperty('--cor-fundo', getColors[0].cor_de_fundo)

// Fim

var colorPicker = new iro.ColorPicker('#picker', {
  width: 320,
  color: "#f00"
});

var hex = colorPicker.color.hexString;

colorPicker.on('color:change', function(color) {
  
  body.style.backgroundColor = color.hexString;
  menuConfig.style.backgroundColor = color.hexString;
  
  visibleCodigo = document.querySelector(".visible-codigo-color");
  visibleCodigo.value = color.hexString;
  
});

const alterar = document.querySelector(".alterar");

alterar.addEventListener("click", () =>{
  
  const body = document.querySelector("body");
  const visibleCodigo = document.querySelector(".visible-codigo-color");
  visibleCodigo.id = "";
  
  body.style.backgroundColor = visibleCodigo.value;

  var color = visibleCodigo;

  if (colors.value == "Cor de Fundo") {
    visibleCodigo.id = "cor_de_fundo";
  }

  if (colors.value == "Cor de Fonte") { 
    visibleCodigo.id = "cor_de_fonte";
  }

  if (colors.value == "Cor Caixa de Link") {
    visibleCodigo.id = "cor_caixa_link";
  }

  if (colors.value == "Cor Fonte Link") {
    visibleCodigo.id = "cor_fonte_link";
  }

  postConteudo(visibleCodigo, color);
  
})

