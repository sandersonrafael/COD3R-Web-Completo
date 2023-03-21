const fs = require('fs')

const produto = {       // irei salvar ele em disco, transformando em texto
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}
// transformar objeto em json

// __dirname é a pasta atual, o + '/16-arquivo... é o nome do arquivo gerado, o JSON.string... é o que vai ser criado nesse arquivo e a função err é para retornar algo quando der erro ou retornar o correto se não apresentar erro
fs.writeFile(__dirname + '/16-arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')

}) // ao executar, criei o 16-arquivoGerado.json