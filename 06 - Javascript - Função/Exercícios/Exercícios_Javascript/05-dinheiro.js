function emReais(dinheiro) {
    console.log(dinheiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
}
emReais(1231.54324)
emReais((146123+231212))