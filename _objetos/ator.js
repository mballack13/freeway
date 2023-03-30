
let yAtor=366, xAtor=85, larguraAtor=30, alturaAtor=30;
let colisao=false;
let meusPontos=0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
  //print(yAtor)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){yAtor -=3;}
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor +=3;  
    }
    
  }
  if (keyIsDown(LEFT_ARROW)){xAtor -=3;}
  if (keyIsDown(RIGHT_ARROW)){xAtor +=3}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for(let i=0; i<imagensCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15)
    {
      if (colisao){
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
          if (pontosMaiorQueZero()){
            meusPontos-=1;
          }
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){yAtor = 366;}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,255,60))
  text(meusPontos, width/5, 27)
}


function marcaPonto(){
  if (yAtor < 15){
    meusPontos+=1;
    voltaAtorParaPosicaoInicial();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}