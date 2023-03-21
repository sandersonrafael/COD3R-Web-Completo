function diaDaSemana(dia) {
    switch (dia) {
        case 2: case 3: case 4: case 5: case 6: 
            console.log(`Vá trabalhar! Hoje é dia útil!!`)
            break
        case 1: case 7:
            console.log(`Hoje é dia de descansar! Continue!!`)
            break
        default:
            console.log(`Dia informado é inválido! Digite um número inteiro de 1 a 7!`)
            break
    }
}
diaDaSemana(1)
diaDaSemana(0)
diaDaSemana(8)
diaDaSemana(1.5)
diaDaSemana(5)
diaDaSemana(7)