/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
//  */
//  console.log("Bem vindo(a) ao jogo Blackjack")



//   if (confirm("Deseja jogar uma nova rodada? ")) {
//      let primeiraCarta = comprarCarta()
//      let segundaCarta = comprarCarta()
//     let cartaPc1 = comprarCarta()
//     let cartaPc2 = comprarCarta()

//      let pontosJogador1 = primeiraCarta.valor + segundaCarta.valor
//      let pontosJogador2 = cartaPc1.valor + cartaPc2.valor

//     console.log(`Jgaodor1 - cartas: ${primeiraCarta.texto} ${segundaCarta.texto} - ${pontosJogador1}`)
//      console.log(`Jogador2 - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - ${pontosJogador2}`)

//      let redistribuir = (primeiraCarta.valor + segundaCarta.valor === 22)
//      let redistribuir2 = (cartaPc1.valor + cartaPc2.valor === 22)
    
//      if (redistribuir || redistribuir2) {
//         console.log('Um dos jogadores tiraram cartas iguais por esse motivo serão redistribuidas.')
//      } 
     
//     if (pontosJogador1 > pontosJogador2) {
//        console.log("O jogador 1, ganhou! ")
//      } else if (pontosJogador2 > pontosJogador1){
//         console.log("O jogador 2, ganhou! ")
//      } else if (pontosJogador1 === pontosJogador2) {
//        console.log("Empatou!")
//     }
//  } else {
//     console.log("Game Over!")
//  }