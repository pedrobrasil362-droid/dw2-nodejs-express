// Métodos de manipulação de vetores

let frutas = ["Laranja", "Maçã", "Banana"];

document.write(`<p>Os itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = "Morango";

document.write(`<p>Agora a lista é: ${frutas}</p>`);

// Método PUSH: Insere um novo elemento no FINAL do vetor
frutas.push("Abacaxi");

document.write(`<p>Agora a lista é: ${frutas}</p>`);

// Método UNSHIFT: Insere um novo elemento no INÍCIO do vetor
// frutas[0] = 'Pera'

frutas.unshift("Pera");

document.write(`<p>Agora a lista é: ${frutas}</p>`);

// Método LENGHT: Retorna o número de elementos no vetor
document.write(`<p>Na nossa lista temos ${frutas.length} frutas.</p>`);

// Método SORT: Ordena os itens do vetor
document.write(`<p>O primeiro item da lista é ${frutas[0]}</p>`);

let frutasOrdenadas = frutas.sort();

document.write(`<p>O primeiro item da lista é ${frutasOrdenadas[0]}</p>`);

document.write(`<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p>`);

// Método SORT: Ordenando em ordem CRESCENTE e DECRESCENTE
let numeros = [6, 8, 2, 9, 3, 800, 200];
 document.write(`<p>Os números são: ${numeros.sort()}</p>`);

 // Ordenando corretamente os números
 // Ordem CRESCENTE
 document.write(`<p>Os números são: ${numeros.sort((a, b)=> a - b)}</p>`);

 // Ordem DECRESCENTE
  document.write(`<p>Os números são: ${numeros.sort((a, b)=> b - a)}</p>`);