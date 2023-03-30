//molde dos carros
let larguraCarro=50, alturaCarro=40;

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];


function mostraCarro (){

  for(let i=0; i<imagensCarros.length; i++){
    image(imagensCarros[i], xCarros[i],
          yCarros[i], larguraCarro, alturaCarro);
  } 
}

function movimentaCarro(){
  for(let i=0; i<imagensCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i=0; i<imagensCarros.length; i++){
    if (passouTodaATela(xCarros[i])){xCarros[i] = 600;}
  }  
}

function passouTodaATela(xCarros){return xCarros <- 60;}