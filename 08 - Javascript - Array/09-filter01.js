const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
// método for (eu que fiz)
let nomes = []
for (i in produtos) {
    nomes[i] = produtos[i].nome
}
console.log(nomes)
// Fim

// recebe: elemento, índice e array 
// se o return for false, o novo vetor não vai ter o item testado
// se o return for true, o item será adicionado no novo array

console.log(produtos.filter(function(p) { 
        return (p.preco >= 500 && p.fragil)
}))

const somenteFragil = (p) => p.fragil
console.log(produtos.filter(somenteFragil))

console.log(produtos.filter((p) => p.fragil)) // forma super reduzida