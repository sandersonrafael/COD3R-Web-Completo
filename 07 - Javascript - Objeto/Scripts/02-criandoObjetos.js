// notação literal
const obj1 = {}
console.log(obj1)

// JS
const obj2 = new Object
console.log(obj2)

// funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto ('Caneta', 7.99, 0.15)
console.log(p1.getPrecoComDesconto())

//função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
let filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)