class Cliente {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
    }
}
let joao = new Cliente('João', 25);
let apresentacao = joao.apresentar();
console.log(apresentacao);
let maria = new Cliente('Maria', 23);
console.log(maria.apresentar());
