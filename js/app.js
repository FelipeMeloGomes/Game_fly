document.getElementById("cronometro").innerHTML = tempo;
let criaMosquito = setInterval(function () {
  posicaoRandomica();
}, criaMosquitoTempo);
changeBackgroundImage();
