// Variables globales
var empates = 0,
  victorias = 0,
  perdidas = 0,
  partidas = 0;

// funcion tirada del usuario

function tirada(tiradaJugador) {
  // Determinar la tirada del CPU
  var tiradaCPU = Math.floor(Math.random() * 3);
  var tiradas = ["piedra", "papel", "tijera"];
  tiradaCPU = tiradas[tiradaCPU];

  // actualizar GUI
  imgJugador.src = "imagenes/" + tiradaJugador + ".png";
  imgCPU.src = "imagenes/" + tiradaCPU + ".png";

  //¿hay empate?
  // si

  // gana='nadie', empates++
  //sino
  // ¿Gana jugador?
  // si
  //gana='jugador', victorias++
  //sino
  // gana='CPU', derrotas++
  //partidas++
  //actuliazar la interfaz gráfica
  outEmpates.innerHTML = partidas;
  outVictoria.innerHTML = partidas;
  outPerdidas.innerHTML = partidas;
  outPartidas.innerHTML = partidas;
}
