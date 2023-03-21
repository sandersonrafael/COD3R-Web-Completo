function pedido (codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log(`Seu pedido deu ${(3*quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case 200:
            console.log(`Seu pedido deu ${(4*quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case 300:
            console.log(`Seu pedido deu ${(5.5*quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case 400:
            console.log(`Seu pedido deu ${(7.5*quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case 500:
            console.log(`Seu pedido deu ${(3.5*quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        case 600:
            console.log(`Seu pedido deu ${(2.8*quantidade).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
            break
        default:
            console.log(`Produto não existente`)
    }
}
pedido (100, 2)
pedido (101, 2)
pedido (500, 3)
pedido (400, 7)