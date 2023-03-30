let imagemDaEstrada, imagemDoAtor;
let imagemCarro01, imagemCarro02, imagemCarro03;

//sons do jogo
let somDaTrilha, somDaColisao, somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  
  //carros
  imagemCarro01 = loadImage("imagens/carro-1.png");
  imagemCarro02 = loadImage("imagens/carro-2.png");
  imagemCarro03 = loadImage("imagens/carro-3.png");
  imagemCarro04 = loadImage("imagens/carro-2.png");
  imagemCarro05 = loadImage("imagens/carro-1.png");
  imagemCarro06 = loadImage("imagens/carro-3.png");
  
  
  imagensCarros = [imagemCarro01, imagemCarro02, imagemCarro03, imagemCarro04,  imagemCarro05,  imagemCarro06];
  
  
  //sons do jogo
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/raquetada.mp3");
  somDoPonto = loadSound("sons/ponto.mp3");

}