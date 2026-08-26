// Objeto
const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho"
};

document.write(`<p>${produto}</p>`);

// Acessando os atributos do objeto
document.write(`<p> ${produto.nome}, ${produto.marca}, custa R$ ${produto.preco}, ${produto.descricao}</p>`);

// Array de objetos
document.write(`<br><h3>Array de objetos: </h3>`);
const listaProdutos = [
    {
        nome: "Computador",
        marca: "Lenovo",
        preco: 3000,
        descricao: "PC moderno com bom desempenho"
    },
    {
        nome: "Tablet",
        marca: "Samsung",
        preco: 2000,
        descricao: "Ótima velocidade de processamento"
    },
    {
        nome: "Iphone",
        marca: "Apple",
        preco: 13000,
        descricao: "Ultra resistente! Não quebra nunca!"
    }
];

// Exibindo as informações com forEach
document.write(`<br><h4>Produtos em promoção: </h4><br>`);

listaProdutos.forEach(produto => {
    document.write(`<p class="produtos">
        Produto: ${produto.nome}<br>
        Marca: ${produto.marca}<br>
        preco: ${produto.preco}<br>
        Descricao: ${produto.descricao}<br><br>
        </p>`);
});