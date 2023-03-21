function equacao2Grau (a = 0, b = 0, c = 0) {
    let delta = b ** 2 - 4 * a * c
    if (delta >= 0) {
    let x1 = (- b + delta**(1/2)) / (2*a)
    let x2 = (- b - delta**(1/2)) / (2*a)
        console.log([x1,x2])
    } else {
        console.log(`Delta é negativo`)
    }
}
equacao2Grau(3, 15, 7)
equacao2Grau(2,4,-6)
equacao2Grau(1,-5,2)
equacao2Grau(3,0,-27)
equacao2Grau(5, -45)
equacao2Grau(1,-1,-12)