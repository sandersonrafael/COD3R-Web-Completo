const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio -> Todos os alunos são bolsistas? / Algum aluno é bolsista? 
// Com .reduce()

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
// resultado e bolsistas já possuem true ou false da própria denominação, pois é o resultado das comparações com true e false + a comparação com o termo atual

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
