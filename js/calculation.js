let resultado = 0;
let expressao = '';

window.onload = () =>{
    resetar();
}
window.addEventListener(
    "keypress", (event) =>{
        if(event.key && event.key === "Delete"){
            resultado = 0;
            expressao = ''; 
        }
        else {
            botao(event.key);
        }
    },true
);

function resetar(){
    resultado = 0;
    expressao = '';
    this.document.getElementById('resultado').innerHTML = resultado;
}

/**
 * @param {string} valor
 */

function botao(valor){
    const digitosValidos = '1234567890';
    const simbolos = '/*-+.';
    const gatilhos = ["=","Enter"];
    if(valor !== undefined){
        if(digitosValidos.includes(valor) || simbolos.includes(valor) && !simbolos.includes(expressao[expressao.length - 1])){
            expressao += valor;
            this.document.getElementById("resultado").innerHTML = expressao;
        }
        else if(gatilhos.includes(valor)){
            resultado = calcular(expressao);
            this.document.getElementById("resultado").innerHTML = resultado;
        }
    }
}
/**
 * @param {string} expressao
 * @returns
 */
function calcular(expressao){
    try{
        return eval(expressao);
    }
    catch(error){
        return "Error";
    }
}