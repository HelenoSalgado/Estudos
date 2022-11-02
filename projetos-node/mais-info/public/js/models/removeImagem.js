let removeImagem = (imagem, remove) => {

  
      // Publicar endereço vazio para a imagem
  
      let dataImagem = {
  
        id: imagem.id,
        conteudo: remove
  
      }
  
    function postConteudo() {
  
        fetch("http://localhost/bio/admin/asset/php/post-conteudo.php", {
           method: "POST",
           body: JSON.stringify(dataImagem)
        })
        
    }postConteudo()

    location.reload()
  
}

export { removeImagem }