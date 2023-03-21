function calc (n1, operacao, n2) {
    switch (operacao) {
        case '+':
            console.log(`O resultado da operação é: ${n1 + n2}`)
            break
        case '-':
            console.log(`O resultado da operação é: ${n1 - n2}`)
            break
        case '*':
            console.log(`O resultado da operação é: ${n1 * n2}`)
            break
        case '/':
            console.log(`O resultado da operação é: ${n1 / n2}`)
            break
        default:
            console.log('Operação não reconhecida')
            break
    }
}
calc (10,'+', 5)
calc (10,'-', 5)
calc (10,'*', 5)
calc (10,'/', 5)
calc (10,'menos', 5)