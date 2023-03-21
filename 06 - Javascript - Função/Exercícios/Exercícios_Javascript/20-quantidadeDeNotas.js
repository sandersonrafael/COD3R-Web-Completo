function quantidadeNotas (dinheiro) {
    let restante = dinheiro
    let nota100
    let nota50
    let nota10
    let nota5
    let nota1
    if (restante / 100 >= 1) {
        nota100 = ( restante - restante % 100 ) / 100
        restante = restante % 100
        console.log(`${nota100} notas de R$ 100`)
    }
    if (restante / 50 >= 1) {
        nota50 = ( restante - restante % 50 ) / 50
        restante = restante % 50
        console.log(`${nota50} notas de R$ 50`)
    }
    if (restante / 10 >= 1) {
        nota10 = ( restante - restante % 10 ) / 10
        restante = restante % 10
        console.log(`${nota10} notas de R$ 10`)
    }
    if (restante / 5 >= 1) {
        nota5 = ( restante - restante % 5 ) / 5
        restante = restante % 5
        console.log(`${nota5} notas de R$ 50`)
    }
    if (restante / 1 >= 1) {
        nota1 = ( restante - restante % 1 ) / 1
        restante = restante % 1
        console.log(`${nota1} notas de R$ 1`)
    }
}
quantidadeNotas(166)
quantidadeNotas(1000)
quantidadeNotas(-1)