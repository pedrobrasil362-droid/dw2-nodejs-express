class Heroi {
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr() {
        return this.nome + " está correndo.";
    }

    andar() {
        return this.nome + " está andando.";
    }

    atacar() {
        return this.nome + " está atacando.";
    }

    defender() {
        return this.nome + " está se defendendo.";
    }
}

// Homem-Aranha
const homemAranha = new Heroi("Homem-Aranha", 100, 90, 80);
homemAranha.teia = 1;

homemAranha.sentidoAranha = function() {
    return "Homem-Aranha detectou perigo!";
};

// Superman
const superman = new Heroi("Superman", 150, 100, 100);
superman.podeVoar = 1;

superman.visaoCalor = function() {
    return "Superman está usando sua visão de calor.";
};

// Batman
const batman = new Heroi("Batman", 100, 80, 90);
batman.esconder = 1;

batman.investigar = function() {
    return "Batman está investigando um crime.";
};


// Exibindo no navegador

// Homem-Aranha
document.write("<h2>" + homemAranha.nome + "</h2>");
document.write("<p>Vida: " + homemAranha.vida + "</p>");
document.write("<p>Velocidade: " + homemAranha.velocidade + "</p>");
document.write("<p>Força: " + homemAranha.forca + "</p>");

if (homemAranha.teia > 0) {
    document.write("<p>Ele pode soltar teia.</p>");
}

document.write("<p>" + homemAranha.sentidoAranha() + "</p>");


// Superman
document.write("<h2>" + superman.nome + "</h2>");
document.write("<p>Vida: " + superman.vida + "</p>");
document.write("<p>Velocidade: " + superman.velocidade + "</p>");
document.write("<p>Força: " + superman.forca + "</p>");

if (superman.podeVoar > 0) {
    document.write("<p>Ele pode voar.</p>");
}

document.write("<p>" + superman.visaoCalor() + "</p>");


// Batman
document.write("<h2>" + batman.nome + "</h2>");
document.write("<p>Vida: " + batman.vida + "</p>");
document.write("<p>Velocidade: " + batman.velocidade + "</p>");
document.write("<p>Força: " + batman.forca + "</p>");

if (batman.esconder > 0) {
    document.write("<p>Ele pode se esconder.</p>");
}

document.write("<p>" + batman.investigar() + "</p>");