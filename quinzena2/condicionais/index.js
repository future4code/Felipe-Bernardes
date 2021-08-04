// // EXERCICO DE INTERPRETAÇÃO DE CODIGO
// // 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// // VAI VERIFICAR SE O NUMERO É DIVISIVEL POR "2" OU SEJA NUMEROS PARES
// // // NUMEROS PAR ELE RETORNA PASSOU NO TESTE
// // // NUMEROS IMPARES ELE RETORNA NAO PASSOU NO TESTE


// // //2
// // let fruta = prompt("Escolha uma fruta")
// // let preco
// // switch (fruta) {
// //   case "Laranja":
// //     preco = 3.5
// //     break;
// //   case "Maçã":
// //     preco = 2.25
// //     break;
// //   case "Uva":
// //     preco = 0.30
// //     break;
// //   case "Pêra":
// //     preco = 5.5
// //     // BREAK PARA O ITEM c.
// //   default:
// //     preco = 5
// //     break;
// // }
// // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// // // O CODIGO SERVE PARA LISTAR E DAR CONDIÇÕES PARA CADA AÇÃO QUE O USUARIO TOMAR
// // // SE ESCOLHER A MAÇA VAI APARECER A FRUTA E A MAÇA
// // // VAI IMPRIMIR A PERA E O VALOR DA PERA

// // //3
// // const numero = Number(prompt("Digite o primeiro número."))

// // if(numero > 0) {
// //   console.log("Esse número passou no teste")
// // 	let mensagem = "Essa mensagem é secreta!!!"
// // }

// // console.log(mensagem)

// // A PRIMEIRA LINHA DECLARA UMA VARIAVEL E PEDE AO USUARIO QUE ATRIBUA UM VALOR A ELA
// // SE O USUARIO DIGITAR O NUMERO 10 QUE É MAIOR QUE ZERO VAI IMPRIMIR O CONSOLE.LOG DENTRO DO "IF" MAS SE ELE COLOCAR -10 NAO IMPRIMIR NADA JA QUE ESSA CONDIÇÃO NAO FOI DECLARADA
// // SIM POIS NA ULTIMA LINHA O CONSOLE.LOG NAOA ACESSA A VARIAVEL DE DENTRO DA CONDIÇÃO.


// //EXERCICO DE ESCRITA DE CODIGO
// //EXERCICIO 1 

// const idade = Number(prompt('qual sua idade? '))

// if (idade >= 18) {
//     console.log('Você pode dirigir, va ate uma auto escola para conseguir emitir sua CNH ')
// } else{
//     console.log('Que pena vc ainda nao tem idade suficiente para dirigir, assim que fizer 18 anos pode tirar sua CNH')
// }
// // EXERCICIO 2
// const turno = prompt('Em qual turno vc estuda? ultilize M para Matutino, V para Vespertino ou N para noturno, por favor ultilize apenas as letras solicitadas de acordo com o perido.')

// if(turno === "M"){
//     console.log('Bom dia!')
// } else if(turno === "V"){
//     console.log('Boa tarde!')
// }else {
//     console.log('Boa noite!')
// }
// // EXERCICIO 3
// let turno = prompt('Em qual turno vc estuda? ultilize M para Matutino, V para Vespertino ou N para noturno, por favor ultilize apenas as letras solicitadas de acordo com o perido.')

// switch (turno){
//     case "M":
//         console.log('Bom dia!')
//         break
//     case "V" :  
//         console.log('Boa tarde!')
//     break
//     default:
//         console.log('Boa noite"')
// }

// EXERCICIO 4
const filme = prompt('Qual genero de filme deseja assistir? ')
const valor = Number(prompt('Qual o valor do filme? R$'))

let filme1 = filme.toUpperCase() === "FANTASIA" 
let valor1 = valor < 15 

if(filme1 && valor1)  {
    console.log('Bom filme!')
} else{
    console.log('Escolha outro filme :(')
}

// *******DESAFIO*******

const filme = prompt('Qual genero de filme deseja assistir? ')
const valor = Number(prompt('Qual o valor do filme? R$'))

let filme1 = filme.toUpperCase() === "FANTASIA" 
let valor1 = valor < 15 

if(filme1 && valor1)  {
    const lanche = prompt('Gostaria de comer algo enquanto assiste o filme: ')
    console.log(`Bom filme! `)
    console.log(`Aproveite  ${lanche}`)
} else{
    console.log('Escolha outro filme :(')
}

// *******DESAFIO 2*******













