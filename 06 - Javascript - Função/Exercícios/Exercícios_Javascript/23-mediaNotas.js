function mediaAluno(n1=0,n2=0,n3=0) {
    let media
    if ( n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >= 0 && n3 <= 10) {
        if (n1 > n2 && n1 > n3 || n1 == n2 && n1 > n3 || n1 == n3 && n1 > n2) {
            media = (n1*4 + n2*3 + n3*3 ) / 10
        } else if (n2 > n1 && n2 > n3 || n2 == n1 && n2 > n3 || n2 == n3 && n2 > n1) {
            media = (n1*3 + n2*4 + n3*3) / 10
        } else if (n3 > n1 && n3 > n2 || n3 == n1 && n3 > n2 || n3 == n2 && n3 > n1) {
            media = (n1*3 + n2*3 + n3*4) / 10
        } else {
            media = n1
        }
        if (media >= 5) {
            console.log(`Aprovado com média ${media}!`)
        } else {
            console.log(`Reprovado com média ${media}!`)
        }
    } else {
        console.log('Nota(s) informada(s) inválida(s). Todas as notas informadas precisam ser de 0 a 10')
    }
}
mediaAluno(0,0,0)
mediaAluno(-1,0,0)
mediaAluno(0,0, 10)
mediaAluno(5.5,5.1,5,5)
mediaAluno(11,10,10)
mediaAluno(7,7,5)