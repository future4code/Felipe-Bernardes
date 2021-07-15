// *******Exercicio interpretação de codigo*******.
// Ex : 01

let a = 10
let b = 10

console.log(b)
// o comando imprime apenas a variavel (b) que tem o valor de "10"

b = 5
console.log(a, b)
// o comando imprime as variaveis (a, b) que tem o valor a=10 e posteriormente a variavel b recebe o valor de 5

// Ex : 02

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)
// o comando imprime o valor da variavel "a" ja que todas recebem o mesmo valor.

// Ex : 03

/*let p (sugestão=horasDia) = prompt("Quantas horas você trabalha por dia?")
let t (sugestão=salarioDia) = prompt("Quanto você recebe por dia?")

alert(`Voce recebe ${t/p} por hora`)*/

// *******Exercicio escrita de codigo*******

// Ex : 01

let nome = prompt("Qual seu nome?")

let idade = prompt("Qual sua idade?") 

console.log(typeof nome)
console.log(typeof idade)
/* Quando usamos "const" ele ja nos obriga a dar um valor para essa variavel entao ele apresenta erro
Quando usamos "let" podemos deixar essa variavel com valor "undefined" que seria um valor ainda nao definido
que é o valor que aparece quando usamos o "typeof"*/

/* Apos usar o "prompt" podemos guardar um valor dado pelo usuario assim atribuindo um valor para a variavel
apos o usuario declarar o valor que é pedido o comando "typeof" apresenta "string" pois por padrão
"prompt" é uma string*/

console.log("Olá", nome, "você tem", idade, "anos")

// Ex : 02

let ler = prompt("Você gosta de ler?")
let bolo = prompt("Você gosta de bolo?")
let got = prompt("Você gosta de Game of Thrones?")

console.log("Você gosta de ler?", ler)
console.log("Você gosta de bolo?", bolo)
console.log("Você gosta de Game of Thrones?", got)

//Ex : 03

let a = 10
let b = 25
let c = a

 a = b
 b = c
 c = b

 console.log("O novo valor de a é : ", a)
 console.log("O novo valor de b é : ", b)

// **********DESAFIO**********

let primeiroNumero = prompt("Digite um numero")
let segundoNumero = prompt("Digite outro numero")

let pN = Number(primeiroNumero)
let sN = Number(segundoNumero)


console.log("O primeiro numero:", primeiroNumero,  "Somado ao segundo numero:", segundoNumero,  "Resulta em:",  pN + sN)
console.log("O primeiro numero:", primeiroNumero,  "Multiplicado ao segundo numero:", segundoNumero,  "Resulta em:",  pN * sN)

