document.write("<h3>Manipulando datas:</h3>");

// Para comecarmos a manipular datas no JavaScript,
// precisamos primeiro criar uma instância da classe Date, que é nativa do JavaScript

const dataAtual = new Date();

document.write(dataAtual);

// Pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia ${dia}</p>`);

const mes = dataAtual.getMonth() + 1;
document.write(`<p>Estamos no mês ${mes}</p>`);

const ano = dataAtual.getFullYear();
document.write(`<p>O ano em que nós estamos é ${ano}</p>`);

// Exibindo data completa
document.write(`Data de hoje: ${dia}/${mes}/${ano}.`);

//Adicionando dias, meses e anos a data atual
// Adicionando 4 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 4);

// Exibindo a nova data:
document.write(`<p>Daqui a 4 dias será dia ${dataAtual.getDate()}.`);

// Adicionando 3 meses a data atual
dataAtual.setMonth(dataAtual.getMonth() + 3);
//Exibindo a nova data
document.write(`<p>Daqui a 3 meses será mês ${dataAtual.getMonth() + 1}.</p>`);

//Adicionando 2 anos a data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2);
// Exibindo a nova data
document.write(`<p>Daqui a 2 anos será ${dataAtual.getFullYear()}.`);

// #####################################

// FORMATAÇÃO DE MOEDAS
document.write("<h3>Manipulando moedas:</h3>");
const futuroSalario = 40000.3;
document.write(`<p>${futuroSalario}</p>`);
// Mostrando casas decimais
document.write(`<p>${futuroSalario.toFixed(2)}</p>`);
// Ocultando casas decimais
document.write(`<p>${futuroSalario.toFixed(0)}</p>`);
// Trocando o identificador de casas decimais
document.write(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`);

// FORMATANDO PARA REAL
document.write(`<p>
    ${futuroSalario.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}
    </p>`);

// FORMATANDO PARA DÓLAR
document.write(`<p>
    ${futuroSalario.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}
    </p>`);

// FORMATAÇÕES DE STRINGS
document.write("<h3>Formatação de Strings:</h3>");
const nome = "Diego Max";

// Alterando STRING para letras maiusculas
document.write(`<p>${nome.toUpperCase()}</p>`);
// Alternando STRINGS para letras minusculas
document.write(`<p>${nome.toLowerCase()}</p>`);

// COLOCANDO AS INICIAIS EM LETRAS MAIUSCULAS
const cidade = " sete barras";
document.write(cidade);
const cidadeFormatada = cidade
  .split(" ")
  .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
  .join(" ");
// Exibindo
document.write(`<p>${cidadeFormatada}</p>`);

// Contando o numero de caracteres
document.write(`<p>Seu nome tem ${nome.replace(/\s/g, "").length} letras`);
