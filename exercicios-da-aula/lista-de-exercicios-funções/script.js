// Função simples
function apresentar() {
  document.write("Nome: Pedro Henrique <br>");
  document.write("Idade: 18 <br>");
  document.write("Cidade: Sete Barras <br>");
}

apresentar();

// Função com parâmetros
function dividir(num1, num2) {
  const resultado = num1 / num2;
  document.write("O resultado da divisão foi: " + resultado + "<br>");
}

dividir(20, 4);

// Função retorno
function multiplicar(numero1, numero2, numero3) {
  return numero1 * numero2 * numero3;
}

const resultado = multiplicar(2, 3, 4);
document.write("O resultado da multiplicação é: " + resultado + "<br>");

// Função com mais de um retorno
function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade <br>";
  } else {
    return "Menor de idade <br>";
  }
}

document.write(verificarIdade(20));

// Função anônima
const verificarMedia = function (nota1, nota2) {
  const media = (nota1 + nota2) / 2;

  if (media <= 5) {
    return "Reprovado <br>";
  } else {
    return "Aprovado <br>";
  }
};

document.write(verificarMedia(7, 8));

// Arrow function com parâmetro único
const triplo = (numero) => {
  return numero * 3;
};

document.write("O triplo do número é: " + triplo(5) + "<br>");

// Arrow function com mais de um parâmetro
const soma = (num1, num2, num3, num4) => {
  return num1 + num2 + num3 + num4;
};

document.write("A soma dos números é igual a " + soma(10, 20, 30, 40) + "<br>");

// IIFE
(function (nome) {
  document.write("Olá, " + nome + "! Seja bem-vindo(a).");
})("Pedro Henrique");
