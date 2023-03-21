function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto //quando se cria uma função através do new, o novo objeto possui mesmo protótipo
// que o original, no caso: MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {} //obj3 é um vetor vazio
console.log(obj3.falar) // deu undefined
obj3.__proto__ = MeuObjeto.prototype // obj3 agora tem como protótipo MeuObjeto
obj3.nome = 'Obj3'
obj3.falar()
console.log()

//Resumo

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) // se criar objeto com função, a Function.prototype aponta para o mesmo protótipo que Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // é nulo pois não tem nada depois disto