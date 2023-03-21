function vetor(numero) {
    let par = 0
    let impar = 0
    for ( i in numero) {
        if (numero[i] % 2 == 0) {
            par++
        }
        if (numero[i] % 2 != 0) {
            impar++
        }
    }
    console.log(`${par} números pares e ${impar} números ímpares.`)
}
vetor([1,5,2,5,12,2,6,4,2])
