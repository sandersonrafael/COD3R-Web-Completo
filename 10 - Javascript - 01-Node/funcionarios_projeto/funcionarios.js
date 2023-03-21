/* Desafio -> Retirar Dessa URL -> Mulher Chinesa com Menor Salário */

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Meu Método

axios.get(url).then(response => {
    const funcionarios = response.data          // constante funcionarios se torna todos os dados contidos na resposta da url
    const mulheresChinesas = funcionarios.filter((funcionario) => (funcionario.pais === 'China' && funcionario.genero === 'F'))     // filtrou somente residentes do país 'China' e do gênero 'F' (feminino)
    const menorValor = mulheresChinesas.map(a => a.salario).reduce((menorSalario, salarioAtual) => {   // 1º obteve array só com os salarios com .map() e com .reduce(), obteve sempre o menor salario da sequência
        return salarioAtual < menorSalario ? salarioAtual : menorSalario 
    })
    console.log(mulheresChinesas.filter(pobre => pobre.salario === menorValor)) // pegou o vetor completo de mulheres + china e filtrou o objeto que possuía salário igual ao menorValor "2435.61" e informou o objeto completo
});

// Método do Professor

const chineses = f => f.pais === 'China'    // f de funcionário (tanto faz o termo); pega os chineses
const mulheres = f => f.genero === 'F'      // pega todos com gênero 'F' 
const menorSalario = (func, funcAtual) => { // pega funcionário (acumulativo)
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then((response) => {
    const funcionarios = response.data
    console.log(funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario))
})