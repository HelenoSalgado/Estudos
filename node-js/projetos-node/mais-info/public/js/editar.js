
// import { menu, hamburguer }from "./templates/menu.js";
import { uploadsImage, enviarImagem } from "./models/uploads.js";
import { removeImagem } from "./models/removeImagem.js";


let pagina = document.querySelector("body")
let areaInputEditar = document.createElement("div")
let textoDeEdicao = document.createElement("span")
let textoDeEdicaoLink = document.createElement("em")
let inputEditar = document.createElement("textarea")
let inputTextoLink = document.createElement("input")

inputEditar.classList.add("input-editar")

inputTextoLink.classList.add("input-texto-link")

areaInputEditar.classList.add("area-input-editar")
areaInputEditar.appendChild(inputEditar)

let esmaecer = document.createElement("span")
esmaecer.classList.add("esmaecer")

let loading = document.createElement("span")
loading.classList.add("loading")

let eventoRedesSociais = redesSociaisLinks

var contadorBotao = true 

var acaoEditarCabecalho = true;

var editarCampo = ""

// Botões editar

let botoesEditar = document.createElement("div")
botoesEditar.classList.add("botoes-editar")

let botaoSalvar = document.createElement("div")
botaoSalvar.classList.add("botao-salvar")

let botaoVoltar = document.createElement("div")
botaoVoltar.classList.add("funcao-voltar")

let botaoExcluir = document.createElement("div")
botaoExcluir.classList.add("funcao-excluir")

botaoVoltar.textContent = "Voltar"

botaoSalvar.textContent = "Salvar"

botaoExcluir.textContent = "Excluir"

botoesEditar.appendChild(botaoSalvar)
botoesEditar.appendChild(botaoExcluir)
botoesEditar.appendChild(botaoVoltar)

let botaoEditar = document.createElement("span")
botaoEditar.classList.add("botao-editar")
let botaoEditarSalvar = document.createElement("span")

botaoEditarSalvar.classList.add("botao-editar-salvar")

var controleRemoverImagem
var controleVoltar


// Configurações do Modo Editar

function modoEdicao () {
    
    pagina.appendChild(botoesEditar)
    pagina.appendChild(esmaecer)

    console.log(pagina.appendChild(esmaecer))
    
}

var modoUpload
var textoDoLink

function removeModoEdicao() {

    pagina.appendChild(loading)
    pagina.appendChild(esmaecer)
    
    if (textoDoLink) {

        areaInputEditar.removeChild(textoDeEdicaoLink)
        areaInputEditar.removeChild(inputTextoLink)

        textoDoLink = false

    }

    if (modoUpload) {

        let formUpload = document.querySelector(".caixa-upload-imagem")
        pagina.removeChild(formUpload)

        modoUpload = false

    }

    setTimeout(() => { 
            
        pagina.removeChild(esmaecer)
        pagina.removeChild(loading)
        
    }, 500);

    if (pagina.appendChild(areaInputEditar)){
            
        textoDeEdicao.textContent = ""
        
        pagina.removeChild(areaInputEditar)
 
    }
}

// Menu

pagina.appendChild(menu)

pagina.appendChild(hamburguer)

hamburguer.addEventListener("click", () => {
    
    hamburguer.classList.toggle("menu-hamburguer-ativo")
    menu.classList.toggle("menu-ativo")

    setTimeout(() => {

        sairDoGrafico.style.display = "block"
        
    }, 500);

})

sairDoGrafico.addEventListener("click", () => {
  
    caixaDeGraficos.classList.toggle("graficos-ativos")
    sairDoGrafico.style.display = "none"

})

// Grafico de Análises

var titleGrafico = 0
var exibicao = true

menu.addEventListener("click", (e) => {

    
    if (e.target.classList == "analytics") {
        
        pagina.appendChild(graficos(exibicao))
        
        titleGrafico = "Acesso por Navegadores Web"
        
        google.charts.setOnLoadCallback(desenharPizza(dataNavegadores, titleGrafico));
        
        caixaDeGraficos.classList.toggle("graficos-ativos")
        
        exibicao = false
        
    }

    if (e.target.classList == "sair"){
        
        localStorage.setItem('altenticacaoLeide', null)
        
        location.reload()
        
    }

    // if (e.target.classList == "menu-config"){

    //     location.href = "http://localhost/bio/admin/asset/telas/config-color.html"

    // }
    
})

caixaDeGraficos.addEventListener("click", (event) => {

    
    if (event.target.classList == "cidades") {
        
        titleGrafico = "Acesso por Cidade"
        
        google.charts.setOnLoadCallback(desenharPizza(dataCidades, titleGrafico));
        
    }
    if (event.target.classList == "navegadores") {
        
        titleGrafico = "Ordem de acesso por Navegadores Web"
        
        google.charts.setOnLoadCallback(desenharPizza(dataNavegadores, titleGrafico));
        
    }
    if (event.target.classList == "resolucoes") {
        
        titleGrafico = "Acesso por Sistema Operacional"
        
        google.charts.setOnLoadCallback(desenharPizza(dataDispositivos, titleGrafico));
        
    }
    if (event.target.classList == "trafico") {
        
        titleGrafico = "Acesso por fonte de Tráfego"
        
        google.charts.setOnLoadCallback(desenharPizza(dataTrafegos, titleGrafico));
        
    }
    if (event.target.classList == "visitantes-frequentes") {
        
        titleGrafico = "Total de Visualizações"
        
        google.charts.setOnLoadCallback(desenharPizza(dataDasVisitas, titleGrafico));
        
    }
})

// Upload de Imagens

function exibirUploadImagem(editarCampo){
    
    pagina.appendChild(uploadsImage())
      
    enviarImagem(editarCampo)

    modoUpload = true

    controleRemoverImagem = document.querySelector(".funcao-remover-imagem")
    
    controleVoltar = document.querySelector(".funcao-voltar")

    removerImagem(editarCampo)
    
    voltar()
    
}

// Remover imagem

function removerImagem(editarCampo) {

    controleRemoverImagem.addEventListener("click", () => {

        var remove = ""

        removeImagem(editarCampo, remove)


    })
    
}

// Função voltar

function voltar(){
    
    controleVoltar.addEventListener("click", () => {

        removeModoEdicao()
        
        //window.history.back();
        
        //location.reload()
        
    })
    
}

// Editar cabeçalho

cabecalhoPrimario.addEventListener("click", (e) => {
    
    if(e.target.classList == "cabecalho-primario" || e.target.classList == "caixa-texto-cabecalho"){

        let imgDeFundo = document.querySelector(".img-de-fundo")
        
        editarCampo = imgDeFundo
        
        exibirUploadImagem(editarCampo)
        
        modoEdicaoImagem()
        
        return
        
    }else if (e.target.classList == "img-perfil") {
        
        editarCampo = e.target
        
        exibirUploadImagem(editarCampo)
        
        modoEdicao()
        
        return
        
        
    }else if(e.target.classList == "cabecalho-titulo-primario"){

        
        inputEditar.value = e.target.textContent
        
        editarCampo = e.target
        
        textoDeEdicao.textContent = "Titulo"
        
        
    }else if(e.target.classList == "cabecalho-primario-citacao"){
        
        inputEditar.value = e.target.textContent
        
        editarCampo = e.target
        
        textoDeEdicao.textContent = "Citação"
        
    }
    
    areaInputEditar.appendChild(textoDeEdicao)
    areaInputEditar.appendChild(botoesEditar)
    pagina.appendChild(areaInputEditar)  
    
    
    if(e.target.classList == "botao-salvar"){
        
        botaoEditarGeral() 
        
    }else{
        controleVoltar = document.querySelector(".funcao-voltar")
        voltar()
    }
    
})

// Editar Redes Sociais

eventoRedesSociais.forEach((rede) => {
    
    rede.addEventListener("click", (e) => {
        
        e.preventDefault()
        
        inputEditar.value = rede.href
        
        editarCampo = rede
        
        textoDeEdicao.textContent = "Link para o " + rede.classList
        
        areaInputEditar.appendChild(textoDeEdicao)
        areaInputEditar.appendChild(botoesEditar)
        redesSociais.appendChild(areaInputEditar)
        
        if(e.target.classList == "botao-salvar"){
            
            botaoEditarGeral() 
            
        }else{
            controleVoltar = document.querySelector(".funcao-voltar")
            voltar()
        }
        
    })
    
});

// Editar Links | conteudo principal

caixaConteudoPrimario.appendChild(adicionarLinks())

var conteLinks
var linkAlvoDelete

caixaConteudoPrimario.addEventListener("click", (elink) => {
    
    elink.preventDefault()

    linkAlvoDelete = elink.target // para exclusão
    
    if(elink.target.classList == "img_link"){
        
        editarCampo = elink.target
        
        exibirUploadImagem(editarCampo)
        
        return
        
        
    }else if(elink.target.classList[0] == "link"){

        editarCampo = elink.target

        if (elink.target.classList[1] == "link-add") {

            conteLinks = document.querySelector(".caixa-conteudo-primario").childElementCount + 1

            var novoLinkId = document.createElement("span")
            novoLinkId.id = "link_0"+Number(conteLinks - 1)

            editarCampo = novoLinkId
        
        }

        inputEditar.value = elink.target.href
        
        inputTextoLink.value = elink.target.textContent
        
        textoDeEdicaoLink.textContent = "Texto"
        textoDeEdicao.textContent = "Link"
        
        areaInputEditar.appendChild(textoDeEdicao)
        areaInputEditar.appendChild(textoDeEdicaoLink)
        areaInputEditar.appendChild(inputTextoLink)
        areaInputEditar.appendChild(botoesEditar)
        
        pagina.appendChild(areaInputEditar)

        textoDoLink = true
        
        if(elink.target.classList == "botao-salvar"){
            
            botaoEditarGeral() 
            
        }else{
            controleVoltar = document.querySelector(".funcao-voltar")
            voltar()
        }
        
    }

    
})

// Excluir Link

botaoExcluir.addEventListener("click", () => {

    editarCampo.id = "texto_" + linkAlvoDelete.id
                    
    inputEditar.value = "" 

    let dataConteudo = {
        id: editarCampo.id,
        conteudo: inputEditar.value, 
    }
        
    fetch("http://localhost/bio/php/bio/leidemara/post-conteudo.php", {
    method: "POST",
    body: JSON.stringify(dataConteudo)

    }) 
    
    setTimeout(() => {
        
         location.reload()

    }, 1000);
   
})

rodapePrimarioCaixa.addEventListener("click", (e) => {


    editarCampo = document.querySelector("#copywrite")

    if (e.target.id == "copywrite") {

         inputEditar.value = e.target.textContent

    }
    
    textoDeEdicao.textContent = "Insira texto de direitos reservados"
    
    areaInputEditar.appendChild(textoDeEdicao)
    areaInputEditar.appendChild(botoesEditar)
    pagina.appendChild(areaInputEditar)
    
    if(e.target.classList == "botao-salvar"){ 
         
        botaoEditarGeral() 
        
    }else{
        controleVoltar = document.querySelector(".funcao-voltar")
        voltar()
    }
    
    
})

botaoSalvar.addEventListener("click", () => {
    
    botaoEditarGeral()
    
})


function botaoEditarGeral() {
    
    
    if (contadorBotao == false) {

        pagina.appendChild(esmaecer)
 
    }else if(contadorBotao == true){

        pagina.appendChild(loading)
        
        if(editarCampo.href || editarCampo.id){
            
            editarCampo.href = inputEditar.value
            
            if(editarCampo.classList[0] == "link" || editarCampo.id){
                
                editarCampo.textContent = inputTextoLink.value
                
                editarCampo.href = inputEditar.value

                setTimeout(() => {

                    editarCampo.id = "texto_" + editarCampo.id
                    
                    inputEditar.value = editarCampo.textContent
 
                    atualizaData()
                    
                }, 1000);

                // Verifica se houve adição de novo link

                if (conteLinks) {

                    setTimeout(() => {

                        editarCampo.id = "numero_de_links"
                        
                        inputEditar.value = conteLinks
   
                        atualizaData()

                        setTimeout(() => {

                            location.reload()
                            
                        }, 100);
                        
                    }, 1500);
                    
                }
                
                //pagina.removeChild(areaInputEditar)

            }
            
        }else if 
        ( editarCampo.classList == "cabecalho-titulo-primario" 
        || editarCampo.classList == "cabecalho-primario-citacao" )
        {
            
            editarCampo.textContent = inputEditar.value 
            
            
        }
        
        atualizaData()

        removeModoEdicao()
        
        contadorBotao = false
        acaoEditarCabecalho = true
        
    } 
    
}

function atualizaData(){
    
    
    let dataConteudo = {
        id: editarCampo.id,
        conteudo: inputEditar.value, 
    }
    
    console.log(dataConteudo)
    
    // Publicar Conteúdo
    
    function postConteudo() {
        
        fetch("http://localhost/bio/php/bio/leidemara/post-conteudo.php", {
        method: "POST",
        body: JSON.stringify(dataConteudo)
    })
    
}postConteudo()

}
