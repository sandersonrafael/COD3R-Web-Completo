function divisao (dividendo,divisor) {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    let divisaoComResto = (dividendo - resto) / divisor
    if (resto != 0) {
        console.log(`O resultado inteiro é: ${divisaoComResto}, com resto ${resto}`)
    } else {
        console.log(`O resultado da divisão é: ${resultado}`)
    }
}
divisao(99,2)
divisao(15,8)
divisao(100,9)
divisao(100,2)