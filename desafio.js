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
 */

    let player = []
    let computador = []
    
    if(confirm("Welcome to the Blackjack game!" + "\n" + "Want to start a new round?")){
    
       
       let cartasOk = false
       while (!cartasOk){
          player.push(comprarCarta())
          player.push(comprarCarta())
          computador.push(comprarCarta())
          computador.push(comprarCarta())
          if ((player[0].valor === 11 && player[1].valor === 11) ||
             (computador[0].valor === 11 && computador[1].valor === 11)) {
                player = []
                computador = []
          } else {
             cartasOk = true
          }
       }
    
       let comprando = true
    
       while(comprando){
          let textos = ""
          let pontos = 0
          for (let carta of player){
             textos += carta.texto + " "
             pontos += carta.valor
          }
    
          if (pontos > 21){
             comprando = false
          } else {
             let confirmCompra = confirm(
                `Your cards are ${textos}. The computer's revealed card is ${computador[0].texto}.` +
                "\n"+ 
                "Do you want to buy another card?"
             )
          
             if (confirmCompra){
                player.push(comprarCarta())
             } else {
                comprando = false
             }
          }
       }
   
       let pontosComputador = 0
       let textosComputador = ""
       let pontosJogador = 0
       let textosJogador = ""
    
       for (let carta of computador){
          pontosComputador += carta.valor
          textosComputador += carta.texto + " "
       }
       for (let carta of player){
          pontosJogador += carta.valor
          textosJogador += carta.texto + " "
       }
    
       if (pontosJogador <= 21){
          while (pontosComputador < pontosJogador && pontosComputador <= 21){
             computador.push(comprarCarta())
             pontosComputador = 0
             textosComputador = ""
             for (let carta of computador){
                pontosComputador += carta.valor
                textosComputador += carta.texto + " "
             }
          }
       }
      
       let resultado = ""
       if (pontosJogador > pontosComputador && pontosJogador <= 21){
          resultado = "The user won!"
       } else if (pontosComputador > pontosJogador && pontosComputador <= 21){
          resultado = "the computer won!"
       } else if (pontosComputador > 21 && pontosJogador <= 21){
          resultado = "The user won!"
       } else if (pontosJogador > 21 && pontosComputador <= 21){
          resultado = "the computer won!"
       } else {
          resultado = "Empate!"
       }
       alert(
          `User - Cards: ${textosJogador} - Punctuation: ${pontosJogador}` + 
          "\n" + 
          `Computer - Cards: ${textosComputador} - Punctuation: ${pontosComputador}` + 
          "\n" + 
          resultado
       )
       
    } else {
       alert("The game is over.")
    }