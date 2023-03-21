function anuidadePaga(mes, anuidade) {
    if (mes % 1 == 0 && mes > 0 && mes <= 12) {
        let txJuros = 1 + 0.05
        let atraso = mes - 1
        let pagamento = anuidade*txJuros**atraso
        console.log(`Você atrasou ${atraso} meses. Seu pagamento será ${pagamento.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
    } else {
        console.log('Mês informado é inválido')
    }
}
anuidadePaga(1,500)
anuidadePaga(1.5,500)
anuidadePaga(2, 500)
anuidadePaga(12,500)
anuidadePaga(13,500)



// let jurosCompostos = (capital * ((1+txJuros) ** tempo)
