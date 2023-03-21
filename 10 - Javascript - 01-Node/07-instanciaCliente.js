const contadorA = require('./05-instanciaUnica') // retorna objeto
const contadorB = require('./05-instanciaUnica') // retorna objeto

const contadorC = require('./06-instaciaNova')() // retorna função
const contadorD = require('./06-instaciaNova')() 

contadorA.inc()  // incrementou duas vezes o contadorA (chama função this.valor++)
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) //embora só tenha adicionado no contadorA, o B também é afetado devido ao cache do require

contadorC.inc() //incrementou duas vezes o contador c
contadorC.inc()

console.log(contadorC.valor, contadorD.valor)
                            
/*
usando a estratégia de criar o module.exports nos outros arquivos para uma function em vez de um object,
é possível se usar a autoinvocação e se livrar do salvamento de cache quando se usam
dois requires diferentes que referenciam o mesmo módulo. Ou seja, um não altera o outro.
*/
