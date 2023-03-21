function inteirosNegativos(vetor) {
    let teste = true
    let negativos = 0
    for (i in vetor) {
        if (vetor[i] % 1 != 0) {
            teste = false
        }
    }
    if (teste) {
        for (i in vetor) {
            if (vetor[i] < 0) {
                negativos++
            }
        }
        console.log(`Neste vetor, existem ${negativos} números negativos e inteiros.`)
    } else {
        console.log(`Número inválido. Informe somente números inteiros.`)
    }
}
inteirosNegativos([1,5,-5,1,1,1.3,1,15])
inteirosNegativos([1,2,5,3,5,0,2,3,5,3,2])
inteirosNegativos([1,-2,5,-3,-5,0,2,-3,5,-3,2])