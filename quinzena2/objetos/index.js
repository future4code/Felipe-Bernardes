// EXERCICIOS DE INTERPRETAÇÃO
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
// Primeira linha do console, vai exibir a primeira(no caso a posição 0) string que estiver dentro do array "ELENCO"
// Segunda linha do console, vai exibir o ultimo nome do elenco.
// Terceira linha do console, vai exibir a terceira linha do array de transmissoes(no caso esta na posição)

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
// Primeiro console, vai exibir todas as informações do objeto cachorro 
// Segundo console, vai exibir o nome dado no gato e os restante das informações do cachorro como idade e raça
// Terceiro console, vai exibir o nome do "gato" com as vogais "A" substituidas por vogais"O" que sera o nome da tartaruga
// A sintaxe "..." ela copia as outras propriedades

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
// primeiro console, vai exibir "false" ja que a definição de backender esta false
// Segundo console, nao vai exibir nada (undefined) ja que no objeto pessoa nao tem "altura"

// EXERCICIO ESCRITA DE CODIGO

// EX 1

function euMesmo() {
const pessoa1 ={
    nome: "Felipe",
    apelidos: ["Feh", " Feliperaz ", " O Brabo"],
}
const novoApelido = {...pessoa1, apelidos: ["Feliperaz", " O Brabo", " Feh"],

}
console.log(`Eu sou ${novoApelido.nome}, mas pode me chamar de ${novoApelido.apelidos}`)
}
euMesmo()



// EX 2

function pessoasAeB() {

const pessoaA = {
    nome: "Alessandra", 
    idade: 33,
    profissao: "Fisica Nuclear", 
}
const pessoaB = {
    nome: "Giseli", 
    idade: 38,
    profissao: "Professora", 
}

console.log([pessoaA.nome, pessoaA.nome.length, pessoaA.idade, pessoaA.profissao, pessoaA.profissao.length])
console.log([pessoaB.nome, pessoaB.nome.length, pessoaB.idade, pessoaB.profissao, pessoaB.profissao.length])
}
pessoasAeB()

// EX 3

const carrinho = []

function frutas() {
const fruta1 = {
    nome: "Laranja", 
    disponivel: true ,
}
const fruta2 = {
    nome: "Maça", 
    disponivel: true, 
}
const fruta3 = {
    nome: "Morango", 
    disponivel: true, 
}
carrinho.push(fruta1)
carrinho.push(fruta2)
carrinho.push(fruta3)

console.log(carrinho)
}
frutas()


// ******DESAFIO******

// 1
const dados = {
    nome: prompt('Qual seu nome? '),
    idade: prompt('Qual sua idade? '), 
    profissao: prompt('Qual sua profissao? '), 
}

console.log(dados)

// 2

const filme1 = {
    anoLancamento: 2006,
    nome: "O Labirinto do Fauno",
}
const filme2 = {
    anoLancamento: 2001,
    nome: "A viagem de Chihiro",
}

const antes = filme1.anoLancamento < filme2.anolancamento
const apos = filme1.anolancamento >= filme2.anolancamento

console.log("O primeiro filme foi lançado antes do segundo? ", antes)
console.log("O segundo filme foi lançado no mesmo ano do segundo?", apos)






