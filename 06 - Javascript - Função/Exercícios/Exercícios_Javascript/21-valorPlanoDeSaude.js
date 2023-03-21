function valorPlano (idade) {
    if (idade % 1 != 0 || idade < 0) {
        console.log('Digite um número inteiro e positivo para representar a sua idade')
    } else {
        let base = 100
        let adicional
        if (idade < 10) {
            adicional = 80
        } else if (idade >= 10 && idade <= 30) {
            adicional = 50
        } else if (idade > 30 && idade <= 60) {
            adicional = 95
        } else {
            adicional = 130
        }
        const mensalidade = base + adicional
        console.log(`Você tem ${idade} anos. Sua mensalidade será: ${mensalidade}`)
    }
}
valorPlano(-1)
valorPlano(0)
valorPlano(1.5)
valorPlano(30)
valorPlano(60)
valorPlano(10)
valorPlano(150)