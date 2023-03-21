function calcularMedia (vetor) {
    let inteiro = true
    let quantidade = 0
    let soma = 0
    let media = 0
    for (i in vetor) {
        if (vetor[i] % 1 != 0) {
            inteiro = false
        }
    }
    if (inteiro) {
        for (i in vetor) {
            soma = soma + vetor[i]
            quantidade++
        }
        media = soma / quantidade
        console.log(`A média é: ${media}`)
    } else {
        console.log(`Necessário informar somente números inteiros.`)
    }
}
calcularMedia([1,1,5,7,3,65,1])
calcularMedia([1,1,5,7,3,-65,1.1])