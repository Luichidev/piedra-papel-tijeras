// Variables globales
var empates = 0,
  victorias = 0,
  perdidas = 0,
  partidas = 0;

// funcion tirada del usuario

function tirada(imagen, jugada) {
  jugada = jugada.toUpperCase(); // para evitar errores convertimos a mayúsculas

  // Determinar la tirada del CPU
  let cpu = tiradaCPU();

  imgJugador.src = imagen.src;
  imgJugador.alt = imagen.alt;

  imgCPU.src = cpu.img;
  imgCPU.alt = cpu.jugada;

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

  return (outResultado.innerHTML = `
    <div class="opciones flex-container">
      yo: ${jugada}
      CPU: ${cpu.jugada}
    </div>
  `);
}

function tiradaCPU() {
  let cpuJugada = ["piedra", "papel", "tijera"];
  let tipoJugada = cpuJugada[random()].toUpperCase();
  let imgJugada = `imagenes/${tipoJugada}.png`;
  return (cpu = {
    jugada: tipoJugada,
    img: imgJugada,
  });
}

function random() {
  return Math.floor(Math.random() * 3);
}
