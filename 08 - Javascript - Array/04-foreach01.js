const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice, array ) { 
    this.array = array                      // primeiro parâmetro sempre é o nome
    console.log(`${indice +1}) ${nome}`)    // segundo parâmetro é índice                    
}); console.log(); console.log(array)       // terceiro parâmetro é o próprio array
console.log()

aprovados.forEach(nome => console.log(nome)) // 2º método
console.log()

// 3º método -> salvar função numa constante (ou variável)
const exibirAprovados = (aprovado, indice) => console.log(indice + 1 + ')', aprovado)
aprovados.forEach(exibirAprovados); console.log()