let contador = 

function modoEdicaoImagem () {

  pagina.appendChild(botaoEditar)
  pagina.appendChild(esmaecer)

  if (contadorBotao == true) {

      modoEdicaoBotoes()
 
  }else if(contadorBotao == false){
     
      modoEdicaoLoading()

      setTimeout(() => { 

          botaoEditar.removeChild(botaoEditarSalvar)
          pagina.removeChild(esmaecer)
          pagina.removeChild(loading)
  
          pagina.removeChild(botaoEditar)
  
  
      }, 1000);
  
  
      contadorBotao = true
      acaoEditarCabecalho = true

  }

}