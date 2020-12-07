// boolean
let estaPago = true;
// number
let idade = 20;
let valor = 29.99;
// string
let empresa = 'AlgaWorks';
// Template Strings
let nome = 'João';
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);
let concatenacaoTrandicional = 'Olá, meu nome ' + nome + ' e tenho ' + idade + ' anos';
// arrays
let notas = [8, 6, 7, 9];
// tuple
let alunos = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
let corFundo = Cor.Verde;
// Any
let algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
// Biblioteca de terceiros...
// Migração de JavaScript para TypeScript...
// Outro exemplo: array com vários tipos de dados
// void
function alerta() {
    //... alert('Operação não permitida');
}
// null e undefined -> Não faz muito sentido!
let u = undefined;
let n = null;
// null e undefined são subtipos dos outros tipos
nome = undefined;
nome = null;
