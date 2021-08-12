// exercicio interpretação de codigo


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
  // vai imprimir o objeto "ususarios"

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  // nao entendi bem, rodei no console e ainda nao entendi pq 

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
  // ele imprime o item que tiver diferente de "chijo"

  // exercicio de escrita de codigo

  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},]

    const arrayPets = pets.map((item) => {
        return item.nome
       
    })
    const arrayPets2 = pets.filter((item) => {
        return item.raca === "Salsicha"
    })
    const arrayPetsPoodle = pets.filter((item) => {
        return item.raca === "Poodle"
    })
    const novoArrayPetsPoodle = arrayPetsPoodle.map((item) =>{
        return item.nome

    })
    function mensagemDesconto(valor, novoArrayPetsPoodle){
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${novoArrayPetsPoodle}`
    }   
   


    console.log(arrayPets)
    console.log(arrayPets2)
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${novoArrayPetsPoodle}`)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 function nomeProdutos(item ) {
     return item.nome
 }
 const arrayProdutos = produtos.map((nomeProdutos))

 console.log(arrayProdutos)

 function produtoPreco(item, index, array) {
    return item.nome
    
 }
 function precoProdutos(item, index, array){
     return item.preco
 }
 const produtoEPreco = produtos.map(produtoPreco)
 const precoEProduto = produtos.map(precoProdutos)
 
 const arrayPrecoProduto = [produtoEPreco + precoEProduto]

 console.log(arrayPrecoProduto)