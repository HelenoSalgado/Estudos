let uploadsImage = () => {

  let inputImagem = document.createElement("div")
  inputImagem.classList.add("caixa-upload-imagem")

    inputImagem.innerHTML = `

      <form class="form-upload-imagem" id="myForm">

         <span>Insira imagem</span>

            <input type="file" id="inputFile">

            <div class="form-botoes">

            <input type="submit" value="Upload"></input>

            <span class="voltar funcao-remover-imagem">Remover</span>

            <span class="voltar funcao-voltar">Voltar</span>

            </div>

      </form>`

     


    return inputImagem
}

let enviarImagem = (imagem) => {

let myForm = document.getElementById("myForm")
let inputFile = document.getElementById("inputFile")

 myForm.addEventListener("submit", e => {

    e.preventDefault()

    let endpoint = "http://localhost/bio/admin/asset/php/upload-imagem.php"

    let formData = new FormData()

    formData.append("inputFile", inputFile.files[0])  

    fetch(endpoint, {

      method: "post",
      body: formData

    }).catch(console.error)

    // Publicar endereço da Imagem

    let enderecoUploads = "http://localhost/bio/asset/uploads/"
    let nomeDaImagem = inputFile.files[0].name

    let dataImagem = {

      id: imagem.id,
      conteudo: enderecoUploads + nomeDaImagem

    }

  function postConteudo() {

      fetch("http://localhost/bio/admin/asset/php/post-conteudo.php", {
         method: "POST",
         body: JSON.stringify(dataImagem)
      })

      setTimeout(() => {
        location.reload()
      }, 500);
      
  }postConteudo()

  })

}

export { uploadsImage, enviarImagem }