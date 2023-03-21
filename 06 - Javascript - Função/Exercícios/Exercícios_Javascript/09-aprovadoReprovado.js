function aprovadoOuNao(nota = 0) {
    if (nota >= 0 && nota < 38) {
        console.log(`A sua nota é ${nota}. Infelizmente você não atingiu a média de 40 e foi reprovado!`)
    } else if (nota >= 38 && nota <= 100) {
        for (this.c = 0; c * 5 <= nota; c++) {}
        if ((c*5-nota) <= 2) {
            nota = c * 5
            console.log(`A sua nota foi arredondada para ${nota}. Você atingiu a média de 40 e foi aprovado!`)
        } else {
            console.log(`Você tirou nota ${nota}. Você atingiu a média de 40 e foi aprovado!`)
        }
    } else {
        console.log(`A nota informada é inválida. A nota do aluno precisa ser de 0 a 100!`)
    }
}
aprovadoOuNao(-5)
aprovadoOuNao(35)
aprovadoOuNao(38)
aprovadoOuNao(74)
aprovadoOuNao(72)
aprovadoOuNao(101)