// Função anônima
const mult = function (x) {
  return x * 2;
};

const x = 1; 

document.write(`<p>O resultado da multiplicação é ${mult(x)} </p>`);

// Função seta - Arrow Function
const triplo = (y) => {
  return y * 3;
};
const y = 100;

document.write(`<p>O triplo de ${y} é ${triplo(y)} </p>`);

// Função Seta - Com mais de um parâmetro - Arrow Function
const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
// eval no JavaScript é uma função nativa que realiza cálculos matemáticos a partir de dois números e um operador.
const num1 = 8;
const operador = "*";
const num2 = 2;

document.write(
  `<p>O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1, operador, num2)} </p>`,
);

// Função imediata (IIFE - Imediately Invoked Function Expression)
const imediata = ( function () {
    document.write("<p>Estou sendo executada imediatamente!</p>");
})() // Passando os parâmetros;

// Função imediata - Com parâmretros
const loadUser = (function(user) {
    document.write(`<p>Carregando as informações do usuário: <strong> ${user}</strong>...</p>`)
    // Mostrando as informações do usuário após 3 segundos
    setTimeout(() => {
        document.write(`
            Nome: Diego <br>
            Idade: 18 anos <br>
            Cidade: Registro <br>
            Hobby: Estudar <br>
            `)
    }, 3000)
})("Diego"); // Passando o parâmetro