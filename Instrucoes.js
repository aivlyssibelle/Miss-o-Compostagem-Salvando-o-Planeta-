function instrucoes(){
  
  background("FFFFFF");
  
  textAlign(CENTER)
  stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
  textSize(15)
  text("INSTRUÇÕES", 0, 30, 400, 40)
  
  textAlign(CENTER)
  stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
  textSize(15)
  text("Jogo de perguntas e respostas," + "\n" + "voltado para a Educação Ambiental Infantil," + "\n" + "para alunos a partir do Primeiro ano do Ensino Fundamental. Com o objetivo de estimular a" + "\n" + "Educação Ambiental através da Compostagem." + "\n" + " Leia a pergunta e escolha uma das opções." + "\n" + "Apenas uma resposta está correta." + "\n" + "Você só pode responder uma vez cada pergunta." + "\n" + "Lembre-se dos conceitos de compostagem." + "\n" + "Divirta-se!" , 0, 100, 400, 300)
  
  

  
  //Botao para voltar ao menur
 
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  
  if(mouseX >= 330 && mouseX <= 390 && mouseY >= 360 && mouseY <=380){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(330, 360, 60, 20)
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  textSize(10)
  text("Voltar",330, 365, 60, 20)
  
   
}