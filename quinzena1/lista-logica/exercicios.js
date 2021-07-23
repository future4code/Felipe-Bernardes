// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = prompt('Digite a altura: ')
  const largura = prompt('Digite a largura: ')

  console.log(altura*largura)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt('Em que ano estamos?')
  const anoNascimento = prompt('Em que ano você nasceu?')

  console.log(anoAtual-anoNascimento)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt('Qual seu peso? ')
  const altura = prompt('Qual sua altura? ')

  const IMC = altura * altura

  console.log(peso/IMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Qual o nome? ')
  const idade = prompt('Qual idade? ')
  const email = prompt('Qual e-mail? ')

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cores = prompt['car1', 'cor2', 'cor3']

  console.log(cores)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavra = prompt("Digite algo: ")
  const palavraMaiuscula = palavra.toUpperCase()

  console.log (palavraMaiuscula)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = prompt('Valor do espetaculo: ')
  const valorIngresso = prompt('Valor do ingresso: ')

  const custoNum = Number(custo)
  const valorIngressoNum = Number(valorIngresso)

  console.log(custoNum/valorIngressoNum)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const palavra1 = prompt('Primeira palavra: ')
  const palavra2 = prompt('Segunda palavra: ')

  const retorno = (palavra1.length >= palavra2.length)

  console.log(retorno)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const palavra1 = prompt('Primeira palavra: ')
  const palavra2 = prompt('Segunda palavra: ')

  const retorno1 = palavra1.toUpperCase()
  const retorno2 = palavra2.toUpperCase()

  const retorno3 = (retorno1 == retorno2)

  console.log(retorno3)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Em que ano estamos? '))
  const anoNascimento = Number(prompt('Em que ano nasceu? '))
  const anoRgEmitido = Number(prompt('Em que ano seu RG foi emitido? '))

  let ano20 = anoAtual - anoNascimento <= 20 && anoAtual - anoRgEmitido >= 5
  let ano50 = anoAtual - anoNascimento > 20  < 50 && anoAtual - anoRgEmitido >= 10
  let ano50Mais = anoAtual - anoNascimento > 50 && anoAtual - anoRgEmitido >= 15

  const renovacaoRG = ano20 || ano50 || ano50Mais

  console.log(renovacaoRG)


}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}