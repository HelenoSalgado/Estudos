import { head, corpoDocumento } from "/bio/asset/js/corpo.js";

let tituloLogin = document.createElement("h3")
tituloLogin.classList.add("titulo-login")
tituloLogin.textContent = "Login"

let caixalogin = document.createElement("div");
caixalogin.id = "buttonDiv" 

let areaLogin = document.createElement("div")
areaLogin.classList.add("area-de-login")

let backgroundLogin = document.createElement("div")
backgroundLogin.classList.add("background-login")

areaLogin.appendChild(tituloLogin)
areaLogin.appendChild(caixalogin)

backgroundLogin.appendChild(areaLogin)

// Caixa login

corpoDocumento.appendChild(backgroundLogin)

async function handleCredentialResponse(response) {
  //console.log("Encoded JWT ID token: " + response.credential);
  
  let resultToken = response.credential;
  
  const responseToken = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${resultToken}`)
  
  let dataToken = await responseToken.json()
  
  console.log(dataToken.email_verified)
  console.log(dataToken)

  verificacao(dataToken)
  
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "918052478917-tpplaom6p5s0f1h47c55h8jkl4ujfqqn.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" } 
    );
    google.accounts.id.prompt();
  }
  
  function verificacao(dataToken) {  
  
      if (dataToken.email_verified) {
  
          //localStorage.setItem('altenticaMaisBio', JSON.stringify(dataToken))
  
          // data.user == dataResponse[0].usuario && data.password == dataResponse[0].senha
  
          let scriptIndex = document.createElement("script")
          let scriptEditar = document.createElement("script")
          let scriptGrafico = document.createElement("script")
          let editorMarcacaoCss = document.createElement("link")
          let caixaMenuCss = document.createElement("link")
          let caixaAnalyticsCss = document.createElement("link")
  
  
          editorMarcacaoCss.rel = "stylesheet"
          editorMarcacaoCss.href = "http://localhost/bio/admin/asset/css/editor-marcacoes.css"
          //editorMarcacaoCss.classList.add("editor-marcacoes")
  
          caixaMenuCss.rel = "stylesheet"
          caixaMenuCss.href = "http://localhost/bio/admin/asset/css/menu.css"
  
          caixaAnalyticsCss.rel = "stylesheet"
          caixaAnalyticsCss.href = "http://localhost/bio/admin/asset/css/analytics.css"
  
  
          let dataScriptModule = [
  
              scriptIndex.src = "http://localhost/bio/asset/js/index.js",
              scriptEditar.src = "http://localhost/bio/admin/asset/js/editar.js"
  
          ]
  
          scriptGrafico.src = "https://www.gstatic.com/charts/loader.js"
  
  
          dataScriptModule.forEach((script) => {
  
              var insereScript = document.createElement("script")
  
              insereScript.type = "module"
  
              insereScript.src = script
  
              head.appendChild(insereScript)
  
          });
  
  
          head.appendChild(editorMarcacaoCss)
          head.appendChild(caixaMenuCss)
          head.appendChild(caixaAnalyticsCss)
          scriptGrafico.defer = "defer"
          head.appendChild(scriptGrafico)
  
  
          areaLogin = document.querySelector(".background-login")
  
          corpoDocumento.removeChild(areaLogin)
  
          //formLogin.reset()
  
          //localStorage.setItem('altenticacaoLeide', JSON.stringify(data))
  
      }else{
  
          if(erro)
          return
  
  
          var  mensagem = document.createElement("span")
          mensagem.classList.add("mensagem-de-login")
          mensagem.textContent = "Usuário ou senha incorretos"
          areaLogin.appendChild(mensagem)
  
          erro = true
  
      }
  
  }