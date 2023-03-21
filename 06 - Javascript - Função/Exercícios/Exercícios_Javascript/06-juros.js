function calcularJuros (capital, txJuros, tempo) {
    let jurosSimples = (capital + capital * (txJuros) * tempo).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    let jurosCompostos = (capital * ((1+txJuros) ** tempo)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    capital = capital.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    txJuros = `${txJuros*100}%`
    console.log(`Aplicando ${capital}, durante ${tempo} meses, a uma taxa de juros de ${txJuros} ao mês, a juros simples, resulta em: ${jurosSimples}}`)
    console.log(`Aplicando ${capital}, durante ${tempo} meses, a uma taxa de juros de ${txJuros} ao mês, a juros compostos, resulta em: ${jurosCompostos}}`)
}
calcularJuros(10000,0.005,12)