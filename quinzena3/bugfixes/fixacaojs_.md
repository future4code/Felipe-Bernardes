```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui

  if((ex * 1) + (p1 * 2) + (p2 * 3) / (6) >= 9){
    return "A"
  }else if((ex * 1) + (p1 * 2) + (p2 * 3) / (6) >= 7.5 && < 9){
    return "B"
  }else if((ex * 1) + (p1 * 2) + (p2 * 3) / (6) >= 6 && <= 7.5){
    return "C"
  }else{
    return "D"
  }
  
}