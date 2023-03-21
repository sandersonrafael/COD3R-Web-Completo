console.log(this===global) // o this dá uma camada a cima
console.log(this === module) // usando this nuam variável sem estar em bloco,
                             // torna ela acessível para fora (exportável)

console.log(this === module.exports)
console.log(this === exports)

function logThis() { // usando o this dentro de uma função, vai para o global
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) 
}

logThis() // ou seja, o this leva a variável a uma "camada" para cima no código

//ARROW FUNCTION É EXCEÇÃO

// AO USAR O THIS DENTRO DE UMA ARROW FUNCTION: const arrowFunction = () => { this.algo = 'algo'}
// O this vai apontar para o module.exports ou exports, assim como quando usado fora de functions