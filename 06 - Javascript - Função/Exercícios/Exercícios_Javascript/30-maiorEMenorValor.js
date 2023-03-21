function maiorEMenorValor(vetor) {
    let maiorValor = -Infinity
    let menorValor = Infinity
    for (i in vetor) {
        if (vetor[i] > maiorValor) {
            maiorValor = vetor[i]
        }
        if (vetor[i] < menorValor) {
            menorValor = vetor[i]
        }
    }
    console.log(`O maior valor do vetor é: ${maiorValor}, enquanto o menor valor é ${menorValor}.`)
}
maiorEMenorValor([1,4,6.451,3123.534,565,123,-5,-634.4])