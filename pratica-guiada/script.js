// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

// pratica guiada 1

/*

function darOlaPessoa(nome){
    const frase = `ola: ${nome}`
    console.log(frase)
}

darOlaPessoa('Renan')
darOlaPessoa('Renanzin')
darOlaPessoa('renola')

//mesma função so que não nomeada
const darOlaPessoaExtra = function(nome){
    const frase = `ola: ${nome}`
    console.log(frase)
}

darOlaPessoaExtra('Renan')
darOlaPessoaExtra('reonao')
darOlaPessoaExtra('ninho')

*/
/*
//pratica guiada 2
function operarNumero(numero){
    const ehPar = numero % 2 === 0
    const somar = numero + 10
    const multiplica = numero * numero

    const frase = `O número ${numero} é par? ${ehPar}. Somado com 1O, o resultado é ${somar} e multiplicado por ele mesmo o resultado é  ${multiplica}`

    return frase

}

console.log(operarNumero(4))
console.log(operarNumero(5))
console.log(operarNumero(10))

// a variavel soma esta fora do escopo
*/

//pratica guiada 3
function verificarLoguinESenha(loguin, senha){
    const loguinArmazenao = 'renandall1'
    const senhaArmazenada = '33441592rR*'

    const comparaLoguin = loguin === loguinArmazenao
    const comparaSenha = senha === senhaArmazenada

    const verificaInfos = comparaLoguin && comparaSenha 

    const frase = `as informações de loguin estão corretas?: ${verificaInfos}`

    return frase

}

console.log(verificarLoguinESenha('renandall1', '33441592rR*'))
console.log(verificarLoguinESenha('renandall1', 'senha incorreta'))
console.log(verificarLoguinESenha('loguin incorreto', '33441592rR*'))




//exercicio de fixação
/*
function verificarMaioridade(nome, anoDeNascimento, anoAtual){
    const idade = anoAtual - anoDeNascimento
    const ehMaior = idade >= 18
  
    const frase = `${nome} é maior de idade ? ${ehMaior} `

    return frase
}

const pessoa1 = verificarMaioridade('renan', 1996, 2023)
console.log(pessoa1)

const pessoa2 = verificarMaioridade('lola', 1995, 2023)
console.log(pessoa2)

const pessoa3 = verificarMaioridade('perola', 2000, 2023)
console.log(pessoa3)
*/