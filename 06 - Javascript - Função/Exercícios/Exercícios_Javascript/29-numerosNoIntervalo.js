function vetor(numeros) {
    let dentroDoIntervalo = 0
    let foraDoIntervalo = 0
    for (i in numeros) {
        numeros[i] >= 10 && numeros[i] <= 20 ? dentroDoIntervalo++ : foraDoIntervalo++
    }
    console.log(`Há ${dentroDoIntervalo} números dentro do intervalo de 10 a 20 e ${foraDoIntervalo} números fora do intervalo.`)
}
vetor([1,2,6,8,123,5,34,15,23,14,13,16,23])