// EXERCÍCIO 01
function inverteArray(array) {
const inverter = []
while(array.length){
  inverter.push(array.pop())
}
return inverter
}


// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let segundoArray = []
for(let i = 0; i< array.length; i++){
  if (array[i] % 2 === 0){
    segundoArray.push(array[i] * array[i])
  }
}
return segundoArray
} 



// EXERCÍCIO 03
function retornaNumerosPares(array) {
 let segundoArray = []
 for(let i = 0; i < array.length; i++){
   if(array[i] % 2 === 0){
     segundoArray.push(array[i])
   }
 }
 return segundoArray
}



// EXERCÍCIO 04
function retornaMaiorNumero(array) {
let maior = array[0]
for(let i = 0; i< array.length; i++){
  if(maior < array[i]){
    maior = array[i]
  }
}
return maior
}


// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  let tamanhoArray = array.length
  return tamanhoArray
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
return [false, false, true, true, true]
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
let numNPar = []
for(let i = 0; numNPar.length < n; i++){
  if(i % 2 === 0) {
    numNPar.push(i)
  }
}
return numNPar
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
