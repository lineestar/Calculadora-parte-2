//referencia para o campa de tela (display)
const tela = document.getElementById("tela")

//parametros sao coisas obrigatorias para a função ser usada

//função que sera chamada toda vez que quisermos 
function adicionarValor(valor){
    tela.value += valor
}

function apagarTela(){ 
    tela.value = ""
}

function apagarValor(){
    tela.value = tela.value.slice(0,-1)
}

function resultadoCalcular(){
    try {
        tela.value = eval(tela.value)
    }
    catch (erro){
        tela.value = "Erro"
    }
}
// avalia a expressão textual (ex. :"2+3=4") e coloca o resultado na tela
//eval executa codigo de javascrip - funciona para expressões matematicas simples, mas requer cuidade com entreda do usuario

//adicionando evento no teclado
document.addEventListener("keydown",function(evento){
    const tecla = evento.key
    if("0123456789+-/*.".includes(tecla)) //se os numeros forem de 0 ao 9 e os simbolos 
        adicionarValor(tecla) //se adiciona os digitos

    if (tecla === "Enter" || tecla === "="){ // se a tecla for enter
        resultadoCalcular() // aparecera o resultado
    }

    if (tecla === "Backspace"){ //se a tela for backspace
        apagarValor() //remove tira o ultimo digito
    }

    if (tecla === "Delete" || tecla === "Escape"){ //se a for a tecla delete 
        apagarTela()//limpa todo o digito
    }

}
)

