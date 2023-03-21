/* Métodos Para Exportar Módulos 
(tornar acessível em outro arquivo) */

this.ola = 'Fala Pessoal' // c/ this, o termo pode ser usado noutro arquivo
exports.bemVindo = 'Bem vindo ao node'
module.exports.ateLogo = 'Até o próximo exemplo' // método ideal 