//FUNÇÕES COM RETORNO
const n1 = 4;
const n2 = 3;

//ESSA FUNÇÃO GERA UM RESULTADO E O EXPORTA
function multiolicar(n1, n2) {
    return n1 * n2; // * -> operador de multiplicação
}

//EXIBINDO O RESULTADO
document.write(`<P>A multiplicação de ${n1} por ${n2} é igual a <strong>${multiolicar(n1, n2)}</strong></P>`,);

//FUNÇÕES COM MAIS DE UM RETORNO
const number = 16   ;

function parImpar(number){
    if (number % 2 == 0){
        return "par";
    }else{ return "imapar";
    }
}

document.write(`<p>O numero ${number} é <strong>${parImpar(number)}!</strong></p>`)