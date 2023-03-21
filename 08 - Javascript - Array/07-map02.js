// SIMULANDO MAP - Minha mesmo
const simulacao = [1,2,3,4,5] // transformar em [2, 4, 6, 8, 10]
let final = []
for (i in simulacao) {
    final[i] = simulacao[i] * 2
}
console.log(); console.log(final); console.log()
//fim da simulação

// DESAFIO

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

//deixar só preço

const paraObjeto = (json) => JSON.parse(json) 
//transformou array em outro array com 4 objetos para acessar propriedade preco
const apenasPreco = produto => produto.preco
//acessou a propriedade preco de cada objeto dentro do array

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)