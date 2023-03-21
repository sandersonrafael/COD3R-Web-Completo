const nums = [1,2,3,4,5]

// map() é considerado um for com propósito

let resultado = nums.map(function (e) {// function pode receber 3 parâmetros
    return e * 2                       // 1º param é valor atual, 2º é índice
})                                     // 3º é o próprio array

console.log(resultado); console.log()  // não transforma o array atual
                                       // gera um novo array
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //múltiplos map
console.log(resultado)
