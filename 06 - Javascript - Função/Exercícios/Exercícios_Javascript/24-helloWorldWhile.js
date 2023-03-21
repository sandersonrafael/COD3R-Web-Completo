function hello() {
    let c = 0
    while (c<11) {
        console.log(`${(c + 1 < 10 ? '0' + (c+1) : (c+1))}. Hello World!`)
        c++
    }
}
hello()