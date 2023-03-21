const produto = new Object // cria e atribui que produto é um objeto
produto.nome = 'Cadeira' // adiciona dinamicamente um par chave valor
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco //deleta dinamicamente o par chave valor
delete produto['marca do produto']
console.log(produto)

// é possível acessar tudo pela notação ponto, como:
// produto.usuarios.quantidadesDeUso ...