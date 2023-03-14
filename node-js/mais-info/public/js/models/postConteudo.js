function postConteudo(editarCampo, inputEditar) {

  let dataConteudo = {

     id: editarCampo.id,
     conteudo: inputEditar.value

  }

  console.log(dataConteudo)

  fetch("http://localhost/bio/admin/asset/php/post-conteudo.php", {

      method: "POST",
      body: JSON.stringify(dataConteudo)

  });
  
}

export { postConteudo }
