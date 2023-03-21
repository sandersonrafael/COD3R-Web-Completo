function comparaAltura(altura1,altura2,tx1,tx2) {
    if (altura1 < altura2) {
        console.log('A primeira criança é menor que a segunda.')
        if (tx1 > tx2) {
            let anos = 0
            while (altura1 < altura2) {
                altura1 = altura1 + tx1
                altura2 = altura2 + tx2
                anos ++
            }
        console.log(`A primeira criança alcançará a altura da segunda em ${anos} anos!`)
        } else {
            console.log(`A primeira criança nunca alcançará a altura da segunda!`)
        }
    } else if (altura1 > altura2) {
        console.log('A primeira criança é maior que a segunda.')
        if (tx1 < tx2) {
            let anos = 0
            while (altura1 > altura2) {
                altura1 = altura1 + tx1
                altura2 = altura2 + tx2
                anos ++
            }
        console.log(`A segunda criança alcançará a altura da primeira em ${anos} anos!`)
        } else {
            console.log(`A segunda criança nunca alcançará a altura da primeira!`)
        }
    } else {
        console.log('As duas crianças possuem a mesma altura.')
    }     
}
comparaAltura(100, 115, 5, 0)
console.log()
comparaAltura(100, 115, 0, 5)
console.log()
comparaAltura(115, 115, 15, 5)
console.log()
comparaAltura(115, 90, 5, 7)
console.log()
comparaAltura(115, 90, 15, 7)