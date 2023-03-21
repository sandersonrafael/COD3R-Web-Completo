const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// indica o protótipo do objeto (objeto pai) 
console.log(ferrari.__proto__)

//objetos criados por padrão, apontam para Object.prototype
console.log(ferrari.__proto__ === Object.prototype)

console.log(volvo.__proto__ === Object.prototype)

//o Object.prototype teria um prototype? -> Não tem, é nulo (null)

console.log(Object.prototype.__proto__) 

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
