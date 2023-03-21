module.exports = function(...nomes) { // ... é argumento variável, quantos quiser passar
    return nomes.map(nome => `Boa semana ${nome}!`)
}