const formularioJugadores = document.getElementById('formulario-jugadores');
const botonIniciar = document.getElementById('boton-iniciar');
const botonR = document.getElementById('boton-ranking');


function ocultarFormulario() {
  const formulario = document.getElementById('formulario-jugadores');
  formulario.classList.remove("formulario-visible");
  formulario.classList.add("formulario-oculto");
  return false;
}

// Muestra el boton para sacar el numero
function mostrarBotonNum() {
  const botonSacarNum = document.getElementById('boton-sacarnum');
  botonSacarNum.classList.remove("formulario-oculto");
  botonSacarNum.classList.add("formulario-visible");
  return false;
}

// Función para validar si todos los campos están llenos
function todosLosCamposLlenos() {
  const inputs = formularioJugadores.querySelectorAll('input[required]');
  for (const input of inputs) {
    if (input.value === '') {
      return false;
    }
  }
  return true;
}

// Función para obtener los nombres de los jugadores del formulario
function obtenerNombresJugadores() {
  const nombres = [];
  const inputs = formularioJugadores.querySelectorAll('input[type="text"]');
  for (const input of inputs) {
    nombres.push(input.value);
  }
  return nombres;
}



// Función para activar o desactivar el botón de iniciar partida
function activarBotonIniciar() {
  if (todosLosCamposLlenos()) {
    botonIniciar.disabled = false;
    botonIniciar.style.opacity = 1;
  } else {
    botonIniciar.disabled = true;
    botonIniciar.style.opacity = 0.5;
  }
}


// Evento para iniciar la partida
botonIniciar.addEventListener('click', () => {
    nombres = obtenerNombresJugadores()
    window.alert(nombres);
    infopartida = [
        { nombre: nombres[0],
        puntaje: 0,
        ronda: 0 },
        { nombre: nombres[1],
        puntaje: 0,
        ronda: 0 },
        { nombre: nombres[2],
        puntaje: 0,
        ronda: 0 },
        { nombre: nombres[3],
        puntaje: 0,
        ronda: 0 }
    ]
    window.alert(infopartida[0].nombre);
    mostrarBotonNum()
});



activarBotonIniciar();


// Evento para detectar cambios en los campos del formulario
formularioJugadores.addEventListener('change', activarBotonIniciar)





