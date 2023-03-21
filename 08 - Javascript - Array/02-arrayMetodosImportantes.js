const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()           // exclui o último elemento do array
console.log(pilotos); console.log()

pilotos.push('Verstappen')  // adiciona o termo como último 
console.log(pilotos); console.log()

pilotos.shift()         // remove o primeiro termo e puxa os seguintes
console.log(pilotos); console.log()

pilotos.unshift('Hamilton') // adiciona o termo no índice 0
console.log(pilotos); console.log()

pilotos.splice(2, 0, 'Botas','Massa') /* escolhe o índice, fala quantos termos vai 
excluir e pode adicionar termos a partir do índice escolhido, movendo o termo
que estava no índice antes para a frente*/
console.log(pilotos); console.log()

pilotos.splice(3, 1) // escolhe o índice 3 (4º termo) e exclui 1 (ele mesmo)
console.log(pilotos); console.log()


const algunsPilotos1 = pilotos.slice(2) // cria novo array a partir do índice selecionado (2)
console.log(algunsPilotos1); console.log()


const algunsPilotos2 = pilotos.slice(1, 4) // cria do índice 1 até ANTES do índice 4 (não inclui o próprio 5º termo ou índice 4)
console.log(algunsPilotos2); console.log();
