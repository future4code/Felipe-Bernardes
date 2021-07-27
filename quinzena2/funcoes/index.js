// *****EXERCICIO INTERPRETAÇÃO DE CODIGO*****


function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
// Vai imprimir primeiro "console.log", que foi dado o valor de "2" x 5, e posteriormente o valor do segundo "console.log".
// se tirar os "console.log" não ira imprimir nada, pois o console.log é o de imprimir.

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// essa função vai transformar todas as letras em minusculas e verificar se tem a palavra "cenoura"
// depois considerando os 3 textos o "console.log" vai imprimir true para os tres ja que os 3 tem a palavra "cenoura"


// *****EXERCICIO ESCRITA DE CODIGO*****


// EX - 1-A

function minhasInformacoes(){
    console.log("Eu sou Felipe, tenho 28 anos, moro em São Paulo e estou desempregado")
}
minhasInformacoes()

// 1-B

function sobreMim(nome, idade, endereco, trabalho){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro na ${endereco} e atualmente estou ${trabalho}`)
}
sobreMim("Felipe", "28", "Estrada do Jacaranda, 370" , "desempregado")

//EX 2-A
function somaNumeros(num1, num2){
    const soma = num1 + num2
    console.log(soma)
}
somaNumeros(5, 6)

// 2-B
function maiorOuIgual(num1, num2){
    const num = num1 >= num2
    console.log(num)
}
maiorOuIgual(3, 5)

// 2-C
function parOuImpar(num1){
    const num = num1 % 2 === 0
    console.log(num)
}
parOuImpar(14)

// 2-D

function tamanhoMsg(msg){
    const msg1 = msg.toUpperCase()
    console.log(msg1)
    console.log(msg1.length)
}
tamanhoMsg("Olá Mundo!")

// EXERCICIO 3
const numero1 = Number(prompt('Insira um numero: ')) 
const numero2 = Number(prompt('insira outro numero: '))

function soma(){
    console.log(numero1 + numero2)
}
soma()

function subtracao(){
    console.log(numero1 - numero2)
}
subtracao()

function multiplicacao(){
    console.log(numero1 * numero2)
}
multiplicacao()

function divisao(){
    console.log(numero1 /numero2)
}
divisao()