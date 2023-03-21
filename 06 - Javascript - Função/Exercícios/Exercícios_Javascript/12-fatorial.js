function calcularFatorial(valor) {
    if (valor % 1 == 0 && valor >= 1) {
        let resultado = 1
        for (let c = valor; c >= 1; c--) {
            resultado = c * resultado
            if (c==1) {
                console.log(resultado)
            }
        }
    } else {
        console.log(`Número inválido. Digite um número inteiro maior ou igual a um.`)
    }
}
calcularFatorial(7)
calcularFatorial(1)
calcularFatorial(-1)
calcularFatorial(12)