const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
console.log(alunos.map(a => a.nota))

// Realiza uma sequência de operações, que inicia no termo informado e 
// sucede operando com os termos seguintes. No caso abaixo, somam-se todas
// as notas

// primeiro termo do reduce é o resultado das operações (acumulador), o 
// segundo é o termo atual trabalhado e o terceiro é o termo inicial
// terceiro termo da function é o índice e o 4º é o array completo



const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)   // trata-se do valor inicial que participará das operações. Sendo 0,
        // não vai 

console.log(resultado)