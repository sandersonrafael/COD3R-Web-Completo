function aumento (plano, salario) {
    switch (plano) {
        case 'A':
            console.log(`Seu novo salário será: ${(salario*1.1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case 'B':
            console.log(`Seu novo salário será: ${(salario*1.15).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case 'C':
            console.log(`Seu novo salário será: ${(salario*1.2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        default:
            console.log('Plano de trabalho informado é inválido')
            break
    }
}
aumento('A', 1350)
aumento('B', 1350)
aumento('C', 1350)
aumento('D', 1350)
aumento(1, 1350)