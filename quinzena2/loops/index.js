// interpretação de codigo

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// de verdade nao sei, dei um console log e so me bugou mais ainda e ate agora eu nao sei pq ele imprime 10 

// 2
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// vai ser impresso no console todos os numeros maiores que 18
// sim seria possivel so declarar no "if" a condição para imprimir
 
// 3 

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// vai imprimir 4 asteriscos


// exercicio escrita de codigo

// const animais = Number(prompt('Quantos animais de estimação você tem? '))

// if (animais <= 0) {
//     console.log('Que pena! você nao tem animais de estimação mas se uqiser pode adotar')
// }else { let i = 0
//    while(i !== animais){
// const nomeAnimais = prompt(['Digite o nome dos animais: '])
// i++
// console.log(nomeAnimais)
//    }
   
// }

// exercicio escrita de codigo 2

const arrayOriginal = ['80', '30', '130', '40', '60', '21', '70', '120', '90', '103', '110', '55']
const num = Number([arrayOriginal])
console.log([arrayOriginal])

function original() {
    console.log(num)
}


function divisao(){
    console.log([num / 10])
}
divisao()

function numerosPares() {
    let par = num % 2 === 0
    console.log(par)
}
numerosPares()







