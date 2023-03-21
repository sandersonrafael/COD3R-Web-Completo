const obj = { a:1, b:2, c:3, soma() { return a + b + c }}
console.log(JSON.stringify(obj)) // converte objeto em JSON (não considera funções)

// errado: console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
// errado também: console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) /* correto. Converte JSON em objeto. 
Aspas simples por fora e aspas duplas nos atributos */

// Possibilidades

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))