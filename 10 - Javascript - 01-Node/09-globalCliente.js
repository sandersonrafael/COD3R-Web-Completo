require('./08-global')

console.log(MinhaApp.saudacao())
MinhaApp.nome = 'Eita!'

console.log(MinhaApp.nome) // Foi modificado no arquivo global do módulo requerido