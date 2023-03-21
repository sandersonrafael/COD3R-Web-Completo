class Avo {
    constructor (sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // é como dizer que a função Pai tem como protótipo a função Avo
    constructor (sobrenome, profissao = 'Professor') {
        super(sobrenome)
    }
}