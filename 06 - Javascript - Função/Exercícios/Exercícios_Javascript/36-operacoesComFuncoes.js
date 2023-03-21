(function operacao1 (vetor1, mult1) {
    for (i1 in vetor1) {
        vetor1[i1] = vetor1[i1]*mult1
    }
    console.log(vetor1)
})([1,2,5,6,2,3,2],2)




function operacao2 (vetor2, mult2) {
    if (mult2 > 5) {
    for (i2 in vetor2) {
        vetor2[i2] = vetor2[i2]*mult2
    }
    console.log(vetor2)
    } else {
        console.log('Digite um número multiplicador maior que 5.')
    }
}
operacao2([1,2,5,6,2,3,2],6)