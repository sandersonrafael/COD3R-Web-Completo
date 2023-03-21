const ladosDoTriangulo = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado1 == lado3) {
        console.log('O triângulo informado é Equilátero')
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log('O triângulo informado é Isósceles')
    } else {
        console.log('O triângulo informado é Escaleno')
    }
}
ladosDoTriangulo (30, 35, 45)
ladosDoTriangulo(30, 30, 45)
ladosDoTriangulo(30, 45, 30)
ladosDoTriangulo(45, 30, 30)
ladosDoTriangulo(45, 45, 45)