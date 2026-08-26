// Classes no JavaScript
class Carro {
  // Nomes de classes devem começar com a primeira letra maíscula,

  // Atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  // Métodos
  buzinar() {
    return "beep beep!";
  }
}

// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012");
// Acessando os ATRIBUTOS  e MÉTODOS do objeto
document.write(
  `<p>O carro ${carroPopular.marca},
   modelo ${carroPopular.modelo}
    é do ano ${carroPopular.ano} 
    e quando ele buzina, ele faz ${carroPopular.buzinar()}.</p>`,
);

// Criando uma nova INSTÂNCIA : Carro Conversível
const carroConversivel = new Carro();
carroConversivel.marca = "Chevrolet";
carroConversivel.modelo = "Camaro";
carroConversivel.ano = "2026"

// Adicionando um NOVO ATRIBUTO (não previsto na classe)
carroConversivel.corNeon = "Azul";
// Adicionando um novo MÉTODO (não previsto na classe)
carroConversivel.turbo = function(){
  return "Vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuum! O carro está acelerando!!"
};

document.write(
  `O carro ${carroConversivel.marca} ${carroConversivel.modelo} tem neon da cor ${carroConversivel.corNeon}.`
)

document.write(
  `<p>${carroConversivel.turbo()}</p>`
)