function creditos(){
  
 background("FFFFFF");
  
  textAlign(CENTER)
  stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
  textSize(15)
  text("CRÉDITOS", 0, 30, 400, 40)
  
  textAlign(CENTER)
  stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
   textSize(15)
  text("Jogo desenvolvido por Aivlys Sibelle," + "\n" + "o qual faz parte da composição do manual didático:" + "\n" + "Implementando a Compostagem como ferramenta didática nos componentes curriculares do" + "\n" + "Ensino Fundamental – Anos Iniciais (1º ao 5º ano). " + "\n" + "Este jogo e o manual integram os Produtos Tecnológicos do Programa de Pós-Graduação em" + "\n" + "Uso Sustentável de Recursos Naturais, Mestrado Profissional (PPgUSRN) do Instituto Federal de" + "\n" + "Educação, Ciência e Tecnologia do " + "\n" + "Rio Grande do Norte (IFRN).", 10, 70, 380, 380)
  
  
  
  
  

  
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
  
   


  //Discricao do programador
  
  image(imagens [37], 150, 290, 125, 125);
 
  
  
}