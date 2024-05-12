class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = '';
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let ninja = new Heroi("Seiji", 29, "Ninja");
let guerreiro = new Heroi("Arthur", 38, "Guerreiro");
let mago = new Heroi("Merlin", 19, "Mago");
let monge = new Heroi("Jeff", 45, "Monge");

if (ninja.tipo === "Ninja") {
    ninja.ataque = "shuriken";
}

if (guerreiro.tipo === "Guerreiro") {
    guerreiro.ataque = "espada";
}

if (monge.tipo === "Monge") {
    monge.ataque = "artes marciais";
}

if (mago.tipo === "Mago") {
    mago.ataque = "magia";
}

mago.atacar(); 
