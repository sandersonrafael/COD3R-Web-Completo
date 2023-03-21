const pai = { nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai) //cria o objeto filha1 já tendo como protótipo o objeto pai

filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { //primeiro parâmetro é o protótipo e os demais são características
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //atributos por herança não são listados, embora possam ser acessados
console.log(Object.keys(filha2))
console.log()
for (let key in filha1) { // já nesse caso, vai ser exibido, pois todos atributos são impressos
    console.log(key)
}
console.log()
for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}
