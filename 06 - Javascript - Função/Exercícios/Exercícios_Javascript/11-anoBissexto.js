function anoBissexto (ano) {
    if (ano % 400 == 0) {
        console.log(`É ano bissexto!`)
        return true
    } else if (ano % 400 == 0) {
        console.log(`É ano bissexto!`)
        return true
    } else if (ano % 4 == 0) {
        console.log(`É ano bissexto!`)
        return true
    } else {
        console.log(`Não é ano bissexto!`)
        return false
    }
}
anoBissexto(100)
anoBissexto(400)
anoBissexto(401)
anoBissexto(2022)
anoBissexto(2024)
anoBissexto(2400)