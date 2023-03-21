// # Exercício: Simular forEach

// meu jeito

const aprovados2 = {
    forEach2(nome) {
        let i = 0
        for (indice in nome) {
            i++
            console.log(`${i}) ${nome[indice]}`)
        }
    }
}
const nome = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados2.forEach2(nome)

console.log()

// jeito do professor

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice ) { 
    console.log(`${indice +1}) ${nome}`)    
})

