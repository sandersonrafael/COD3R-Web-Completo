const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']
const todos = filhas.concat(filhos, 'Nome Adicional', 1)
// Cria um vetor "todos" que é uma união de filhos ao vetor filhas
// O método concat permite adicionar novos termos manualmente
console.log(todos)

console.log([].concat([1, 2], [3, 4], 5, [[6,7]]))