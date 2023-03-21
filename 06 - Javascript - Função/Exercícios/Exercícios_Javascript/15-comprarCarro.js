function vende (carro) {
    switch (carro) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo')
            break
        default:
            console.log('Não trabalhamos com esse automóvel aqui')
            break
    }
}
vende('hatch')
vende('sedan')
vende('motocicleta')
vende('caminhonete')
vende('hilux')