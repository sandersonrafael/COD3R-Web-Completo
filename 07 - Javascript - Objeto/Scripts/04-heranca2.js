//cadeira de protótipos
Object.prototype.atributo00 = 'Z' // evitar
const avo = {atributo1: 'A'}
const pai = { __proto__: avo, atributo2: 'B', atributo3: '3'} // atribui como protótipo de pai o avo
const filho = { __proto__: pai, atributo3: 'C'} // atribui como protótipo de filho o pai

console.log(filho.atributo1)  /* filho não tem atributo 1, mas 
 como pai é protótipo dele e avo é protótipo do pai, ele busca do avo */

console.log(filho.atributo0) /* Como o Object.prototype não tem atributo0, é undefined */
console.log(filho.atributo00) /* Agora ele tirou o atributto 00 que foi atribuído anteriormente,
levando em consideração que o avo não tem, então ele tira do Object.prototype que é protótipo do avo */

console.log(filho.atributo00, filho.atributo1, filho.atributo2, filho.atributo3) /* Mesmo tendo atributo3
no pai, o console puxou do filho porque ele encontrou primeiro, não precisando tirar do protótipo */


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing (dentro de ferrari, ele vai sobrescrever o velMax que é do seu protótipo (pai))
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // status. referencia o protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) //define que o protótipo de ferrari é carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())