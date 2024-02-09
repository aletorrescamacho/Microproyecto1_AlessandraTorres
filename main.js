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

function mostrar() {
  const botonSacarNum = document.getElementById('contenedor-datospartida');
  botonSacarNum.classList.remove("formulario-oculto");
  botonSacarNum.classList.add("formulario-visible");
  return false;
}

function mostrarNumeroBingo() {
  const botonSacarNum = document.getElementById('contenedor-datospartida');
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

function mostrar2(n) {
  n.classList.remove("formulario-oculto");
  n.classList.add("formulario-visible");
  return false;
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
    mostrar()
    tamanoCarton = formularioJugadores.querySelector("#tamano-carton");
    Cartones = generarCartones(tamanoCarton.value);
    mostrar2(document.getElementById('contenedor-juego'));
    
});



activarBotonIniciar();


// Evento para detectar cambios en los campos del formulario
formularioJugadores.addEventListener('change', activarBotonIniciar)


numeroRonda = 0;
//arrnumeros25 = [];

function changeText(){
  if(numeroRonda<25){
  numeroRonda++;
  document.getElementById('numero-ronda').innerHTML = numeroRonda;
  }
  else{
    document.getElementById('numero-ronda').innerHTML = "";
    document.getElementById('titulo-ronda').innerHTML = "Partida terminada";
  }

}

const botonSacarNum = document.getElementById('boton-sacarnum');
function generarArregloAleatorio25(min, max, cantidad) {
  const numeros = [];
  const usados = new Set(); // Almacena los números ya usados

  while (numeros.length < cantidad) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;

    // Si el número no está usado, se agrega al arreglo
    if (!usados.has(numero)) {
      numeros.push(numero);
      usados.add(numero);
    }
  }

  return numeros;
}

const min = 1;
const max = 50;
const cantidad = 25;

//Arreglo de numero aleatorios
const numerosAleatorios = generarArregloAleatorio25(min, max, cantidad)

//Funcion para generar el numero que se canta en el bingo y mostrarlo, se retorna el mismo valor
function numeroGenerado() {
    idx = numeroRonda - 1;
    document.getElementById('nuevo-num').innerHTML = numerosAleatorios[idx];
    return numerosAleatorios[idx];
}


//Variable que tiene el tamano del que tiene que se el carton



function generarArregloCarton(n) {
  const numeros = [];
  const usados = new Set(); // Almacena los números ya usados

  for (let i = 0; i < n; i++) {
    let numero;
    do {
      numero = Math.floor(Math.random() * 50) + 1; // Genera un número aleatorio del 1 al 50
    } while (usados.has(numero)); // Si el número ya está usado, se genera otro

    numeros.push(numero);
    usados.add(numero);
  }

  return numeros;
}

function generarCartones(tamanoCarton){
  arrVal4Cartones = [];
  totalnum = tamanoCarton*tamanoCarton;
  contador = 0;
  while (contador < 4 ){
    carton = generarArregloCarton(totalnum)
    arrVal4Cartones.push(carton);
    contador = contador + 1;
  }
  return arrVal4Cartones;
}



//Cuando se da click se guarda el numero en un variable numB
botonSacarNum.addEventListener('click', () => {
  changeText();
  window.alert(numerosAleatorios);
  numB = numeroGenerado();
  window.alert(tamanoCarton.value);

  window.alert(Cartones[0]);
  window.alert(Cartones[1]);
  window.alert(Cartones[2]);
  window.alert(Cartones[3]);

});


