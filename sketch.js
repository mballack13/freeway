function setup() {
  createCanvas(500, 400);
  //somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  
  //ator
  mostraAtor();
  movimentaAtor();
  
  //carro
  mostraCarro();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  
  //pontos
  incluiPontos();
  marcaPonto();
}