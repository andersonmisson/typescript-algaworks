interface Pessoa {
    idade: number;
    sexo?: string; // Colocando interrogação, não se torna obrigatorio.
}

function imprimirIdade(pessoa: Pessoa) {
    console.log(pessoa.idade);
}

let joaoMarcos = {nome: 'João Marcos', idade: 22};

imprimirIdade(joaoMarcos);