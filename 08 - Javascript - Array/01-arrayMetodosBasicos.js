console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // atribui direto um valor ao termo do array
console.log(aprovados[3])

aprovados.push('Abia') // adiciona um novo termo ao array
console.log(aprovados[4])
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

aprovados.sort()        // ordena os termos do array, alterando ele
console.log(aprovados) 

delete aprovados[1] // deleta o termo do array, sem mudar as demais posições. Atribui undefined
console.log(aprovados[1])
console.log(aprovados[2])
console.log()

aprovados = ['Bia','Carlos','Ana']

//adiciona elementos; remove elementos ou remove e deleta ao mesmo tempo
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //primeiro termo é o elemento do índice "1", o segundo é quantos elementos deleta
// para adicionar elementos, basta usar '' com texto
console.log(aprovados)



console.log()