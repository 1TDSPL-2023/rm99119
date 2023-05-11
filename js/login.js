

function insereNumero(botao,visor) {

    const meuBotao = document.getElementById(botao);
    const meuVisor = document.getElementById(visor);

    meuVisor.value += meuBotao.value;

}

//TRANSFORME A FUNÇÃO EM UMA FUNÇÃO QUE RECEBA TODAS AS OPERAÇÕES

function resultado(visor) {
    const meuVisor = document.getElementById(visor);
    const expressao = meuVisor.value;
    
    let operador;
    if (expressao.includes("+")) {
        operador = "+";
    } else if (expressao.includes("-")) {
        operador = "-";
    } else if (expressao.includes("*")) {
        operador = "*";
    } else if (expressao.includes("/")) {
        operador = "/";
    }
    
    const novoVisorSemSimbolos = expressao.split(operador);
 
    let total = parseInt(novoVisorSemSimbolos[0]);
 
    for (let i = 1; i < novoVisorSemSimbolos.length; i++) {
        const numero = parseInt(novoVisorSemSimbolos[i]);
        switch (operador) {
            case "+":
                total += numero;
                break;
            case "-":
                total -= numero;
                break;
            case "*":
                total *= numero;
                break;
            case "/":
                total /= numero;
                break;
        }
    }
 
    console.log(total);
}
