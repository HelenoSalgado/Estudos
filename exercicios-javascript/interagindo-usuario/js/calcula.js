// Parece que não é necessário o document.querySelector quando o conversor de valor é usado para o id.
// Percebi aque quando o código JS é interno, ou seja, está na mesma página HTML, não é preciso selecionar os inputs.

function calcular(){

    var form = document.querySelector('form');
    var inputIdade = document.querySelector('#inputIdade').value;
    var inputCarteira = document.querySelector('#inputCarteira').value.toLowerCase(); 

    var mensagem = 
    ['VOCÊ PODE DIRIGIR, POIS TEM CNH E IDADE PERMITIDA.', 
    'PREENCHA OS CAMPOS.', 
    'PREENCHA O CAMPO CARTEIRA.', 
    'PREENCHA O CAMPO IDADE.', 
    'POR FAVOR, INSIRA "N"(não) OU "S"(sim) NO CAMPO CARTEIRA.',
    'VOCÊ NÃO PODE DIGIGIR.'
    ];


    resposta.innerHTML = "";


    if (inputIdade > 17 && inputCarteira == "s"){
        resposta.innerHTML += ("<strong>" + mensagem[0] + "</strong>");

    }else if(inputIdade == "" && inputCarteira == ""){
        resposta.innerHTML += ("<strong>" + mensagem[1] + "</strong>");

    }else if(inputIdade == inputIdade && inputCarteira == ""){
        resposta.innerHTML += ("<strong>" + mensagem[2] + "</strong>");
        return

    }else if(inputIdade == "" && inputCarteira == inputCarteira){
        resposta.innerHTML += ("<strong>" + mensagem[3] + "</strong>");
        return

    }else if(inputCarteira != "n" && inputCarteira != "s"){
        resposta.innerHTML += ("<strong>" + mensagem[4] + "</strong>");
        return
    
    }else{
        resposta.innerHTML +=("<strong>" + mensagem[5] + "</strong>") 

    } 

    form.reset();
}