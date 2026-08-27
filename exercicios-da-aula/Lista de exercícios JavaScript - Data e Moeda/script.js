const dataAtual = new Date();

// Data e hora atuais no formato completo
document.write("<h2>Compra Internacional</h2>");

document.write("<p>Data e hora atual:</p>");
document.write("<p>" + dataAtual + "</p>");

// Data no formato DD/MM/AAAA
const dia = String(dataAtual.getDate()).padStart(2, "0");
const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
const ano = dataAtual.getFullYear();

document.write("<p>Data atual: " + dia + "/" + mes + "/" + ano + "</p>");


// Valor da compra em dólar
const compraInternacional = 500.75;

const valorDolar = compraInternacional.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});

document.write("<p>Valor da compra em dólar: " + valorDolar + "</p>");


// Conversão de dólar para real
const cotacaoDolar = 5.50;
const valorReal = compraInternacional * cotacaoDolar;

const valorEmReal = valorReal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});

document.write("<p>Valor da compra em real: " + valorEmReal + "</p>");


// Data de entrega daqui a 12 dias
const dataEntrega = new Date(dataAtual);
dataEntrega.setDate(dataEntrega.getDate() + 12);

const diaEntrega = String(dataEntrega.getDate()).padStart(2, "0");
const mesEntrega = String(dataEntrega.getMonth() + 1).padStart(2, "0");
const anoEntrega = dataEntrega.getFullYear();

document.write(
    "<p>Data de entrega: " +
    diaEntrega + "/" + mesEntrega + "/" + anoEntrega +
    "</p>"
);


// Nome do cliente
const nomeCliente = "pedro henrique";

const nomeFormatado = nomeCliente
    .toLowerCase()
    .split(" ")
    .map(function(nome) {
        return nome.charAt(0).toUpperCase() + nome.slice(1);
    })
    .join(" ");

document.write("<p>Olá, " + nomeFormatado + "! Obrigado pela sua compra.</p>");