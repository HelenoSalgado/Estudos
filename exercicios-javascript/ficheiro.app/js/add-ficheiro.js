const botaoAdicionar = document.querySelector("#adicionar");
const novoFicheiro = document.querySelector(".ficheiro");

botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();

    const form = document.querySelector("#adicionar-ficheiro");
    
    const novoFicheiro = obtemNovoFicheiro(form);
    console.log(novoFicheiro);

    const montaFicheiro = geraFicheiro(novoFicheiro);

});

function obtemNovoFicheiro(form){
  
    const ficheiro = {
       categoria: form.categoria.value,
       titulo: form.titulo.value,
       texto: form.texto.value,
       url: form.url.value,
       arquivo: form.arquivo.value,
       data: form.data.value,
    }
    return ficheiro
}

function geraFicheiro(ficheiro){

    const card = document.createElement("div");

    const categoriaFicheiro = document.createElement("em");
    const tituloFicheiro = document.createElement("h1");
    const textoFicheiro = document.createElement("p");
    const urlFicheiro = document.createElement("a");
    const arquivoFicheiro = document.createElement("div");
    const dataFicheiro = document.createElement("i");

    categoriaFicheiro.innerHTML = "<strong>Categoria</strong>: " + ficheiro.categoria + ".";
    tituloFicheiro.textContent = ficheiro.titulo;
    textoFicheiro.textContent = ficheiro.texto;
    urlFicheiro.textContent = ficheiro.url;
    arquivoFicheiro.textContent = ficheiro.arquivo;
    dataFicheiro.textContent = ficheiro.data;

    card.appendChild(tituloFicheiro);
    card.appendChild(textoFicheiro);
    card.appendChild(categoriaFicheiro);
    card.appendChild(urlFicheiro);
    card.appendChild(arquivoFicheiro);
    card.appendChild(dataFicheiro);
    
    novoFicheiro.appendChild(card);
    card.classList.add("ficheiro-visivel");

    return card
}

