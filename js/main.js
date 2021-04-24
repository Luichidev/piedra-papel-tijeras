// Variables globales
var empates = 0,
  victorias = 0,
  perdidas = 0,
  partidas = 10;

// funcion tirada del usuario
function tirada(tiradaJugador) {
  // Determinar la tirada del CPU
  var tiradaCPU = Math.floor(Math.random() * 3);
  var tiradas = ["piedra", "papel", "tijera"];
  tiradaCPU = tiradas[tiradaCPU];

  if (partidas > 0) {
    // actualizar GUI
    imgJugador.src = "imagenes/" + tiradaJugador + ".png";
    imgCPU.src = "imagenes/" + tiradaCPU + ".png";

    //¿hay empate?
    // si
    if (tiradaJugador === tiradaCPU) {
      // gana='nadie', empates++
      outGanador.innerHTML = "Empate";
      empates++;
      //sino
    } else {
      // ¿Gana jugador?
      // si
      if (
        (tiradaJugador === "piedra" && tiradaCPU === "tijera") ||
        (tiradaJugador === "papel" && tiradaCPU === "piedra") ||
        (tiradaJugador === "tijera" && tiradaCPU === "papel")
      ) {
        //gana='jugador', victorias++
        outGanador.innerHTML = "Has ganado!";
        victorias++;
        //sino
      } else {
        // gana='CPU', derrotas++
        outGanador.innerHTML = "Has perdido!";
        perdidas++;
      }
    }

    //partidas--
    partidas--;

    //actuliazar la interfaz gráfica
    actualizarScore();
  } else {
    ganadorFinal.style.display = "block";
    if (victorias === perdidas) {
      outGanadorFinal.innerHTML = "Ha terminado en Empate!!!";
    } else {
      victorias > perdidas
        ? (outGanadorFinal.innerHTML = "Ganaste!!!")
        : (outGanadorFinal.innerHTML = "Gana la CPU!!!");
    }

    ganadorFinal.onclick = function () {
      empates = 0;
      victorias = 0;
      perdidas = 0;
      partidas = 10;
      ganadorFinal.style.display = "none";
      //actuliazar la interfaz gráfica
      actualizarScore();
      outGanador.innerHTML = "Empieza la partida";
      imgJugador.src = "imagenes/back.png";
      imgCPU.src = "imagenes/back.png";
    };
  }
}

function actualizarScore() {
  outEmpates.innerHTML = empates;
  outVictoria.innerHTML = victorias;
  outPerdidas.innerHTML = perdidas;
  outPartidas.innerHTML = partidas;
}
