const formularioJugadores = document.getElementById('formulario-jugadores');
const botonIniciar = document.getElementById('boton-iniciar');
const botonR = document.getElementById('boton-ranking');
const botonJug1 = document.getElementById('boton-jugador1');
const botonJug2 = document.getElementById('boton-jugador2');
const botonJug3 = document.getElementById('boton-jugador3');
const botonJug4 = document.getElementById('boton-jugador4');
const items = document.getElementById('game');
infojugadores = 0;
tamanoCarton = 0;




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



numeroRonda = 0;
//arrnumeros25 = [];

function changeNum(){
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

fil = [];
colum = [];
diag = []

function generarfilcoldiag(tamanoCarton, infojugadores){
  for( var i=0; i< 4; i++){
    jug = infojugadores[i];
    c = infojugadores[i].Cartonjug;
    if (tamanoCarton == 3){
      fil = [[c[0], c[1], c[2]], [c[3], c[4], c[5]], [c[6], c[7], c[8]]]
      colum = [[c[0], c[3], c[6]], [c[1], c[4], c[7]], [c[2], c[5], c[8]]]
      diag = [[c[0], c[4], c[8]], [c[6], c[4], c[2]]] 
      infojugadores[i].filas = fil;
      infojugadores[i].columnas = colum;
      infojugadores[i].diagonales = diag;
    }
    if (tamanoCarton == 4){
      fil = [[c[0], c[1], c[2], c[3]], [c[4], c[5], c[6], c[7]], [c[8], c[9], c[10], c[11]], [c[12], c[13], c[14], c[15]],]
      colum = [[c[0], c[4], c[8], c[12]], [c[1], c[5], c[9], c[13]], [c[2], c[6], c[10], c[14]], [c[3], c[7], c[11], c[15]] ]
      diag = [[c[0], c[5], c[10], c[15]], [c[12], c[9], c[6], c[3]] ]
      infojugadores[i].filas = fil;
      infojugadores[i].columnas = colum;
      infojugadores[i].diagonales = diag;
    }
    if (tamanoCarton == 5){
      fil = []
      colum = []
      diag = []
      infojugadores[i].filas = fil;
      infojugadores[i].columnas = colum;
      infojugadores[i].diagonales = diag;
      
  }
}

}
/* NO FUNCIONA ARREGLAR

function sumarpunt(infojugadores, tamanoCarton){
  for( var i=0; i< 4; i++){
    jug = infojugadores[i];
    for( var k=0; k< tamanoCarton; k++){
      fil= infojugadores[i].filas[k];
      colum = infojugadores[i].columnas[k];
      sumFil = fil.reduce((a, b) => a + b, 0);
      sumColum = colum.reduce((a, b) => a + b, 0);
      if(sumFil == 0){
        infojugadores[i].puntaje = infojugadores[i].puntaje + 1; 
      }
      if(sumColum == 0){
        infojugadores[i].puntaje = infojugadores[i].puntaje + 1; 
      }
    }
    for( var j=0; j<2; j++){
      diag = infojugadores[i].diagonales;
      sumDiag = diag.reduce((a, b) => a + b, 0);
      if(sumDiag == 0){
        infojugadores[i].puntaje = infojugadores[i].puntaje + 3; 
      }

    }
    
    sumTot = infojugadores[i].Cartonjug.reduce((a, b) => a + b, 0);
    if (sumTot == 0){
      infojugadores[i].puntaje = infojugadores[i].puntaje + 5; 
    }

  }

}
*/



// Evento para iniciar la partida
botonIniciar.addEventListener('click', () => {
    nombres = obtenerNombresJugadores()
    window.alert(nombres);
    mostrarBotonNum()
    mostrar()
    tamanoCarton = formularioJugadores.querySelector("#tamano-carton");
    Cartones = generarCartones(tamanoCarton.value);
    mostrar2(document.getElementById('contenedor-juego'));
    mostrar2(document.getElementById('ver-cartones-contenedor'))
    infojugadores = [{nam: nombres[0],
    puntaje: 0, 
    Cartonjug: Cartones[0], 
    diagonales: 0,
    filas: 0,
    columnas: 0}, 
    {nam: nombres[1],
    puntaje: 0, 
    Cartonjug: Cartones[1], 
    diagonales: 0,
    filas: 0,
    columnas: 0}, 
    {nam: nombres[2],
    puntaje: 0, 
    Cartonjug: Cartones[2], 
    diagonales: 0,
    filas: 0,
    columnas: 0}, 
    {nam: nombres[3],
    puntaje: 0, 
    Cartonjug: Cartones[3], 
    diagonales: 0,
    filas: 0,
    columnas: 0}]
    generarfilcoldiag(tamanoCarton.value, infojugadores)
    
});





activarBotonIniciar();


// Evento para detectar cambios en los campos del formulario
formularioJugadores.addEventListener('change', activarBotonIniciar)

function generarCartonVisual(numerosCarton){
  if (numerosCarton.length == 9){
    for( var i=0; i< numerosCarton.length; i++){
      
      let box = document.createElement('div');
      box.className = 'item1';
      box.innerHTML = numerosCarton[i];
      document.querySelector('.game').appendChild(box);
  
    }
  } 
  if(numerosCarton.length == 16){
    for( var i=0; i< numerosCarton.length; i++){
      let box = document.createElement('div');
      box.className = 'item2';
      box.innerHTML = numerosCarton[i];
      document.querySelector('.game').appendChild(box);
  }
}
  if(numerosCarton.length == 25){
    for( var i=0; i< numerosCarton.length; i++){
      let box = document.createElement('div');
      box.className = 'item3';
      box.innerHTML = numerosCarton[i];
      document.querySelector('.game').appendChild(box);
  }
  }
}


j1 = false;
j2 = false;  
j3 = false;
j4 = false;  

//Cuando se da click se guarda el numero en un variable numB
botonSacarNum.addEventListener('click', () => {
  changeNum();;
  numB = numeroGenerado();
  for (var i=0; i< 4; i++){
    persona = infojugadores[i]
    for (var k=0; k<persona.Cartonjug.length; k++){
      if(persona.Cartonjug[k]==numB){
        persona.Cartonjug[k]='0';
        k=persona.Cartonjug.length;
      }
    }
    sumarpunt(infojugadores, tamanoCarton.value)
  }


  if(j1==true){
    document.querySelector(".game").innerHTML = '';
    generarCartonVisual(infojugadores[0].Cartonjug);
    
  }
  if(j2==true){
    document.querySelector(".game").innerHTML = '';
    generarCartonVisual(infojugadores[1].Cartonjug);
  }
  if(j3==true){
    document.querySelector(".game").innerHTML = '';
    generarCartonVisual(infojugadores[2].Cartonjug);
  }
  if(j4==true){
    document.querySelector(".game").innerHTML = '';
    generarCartonVisual(infojugadores[3].Cartonjug);
  }



});



 



botonJug1.addEventListener('click', () => {
  j1 = true;
  j2 = false;  
  j3 = false;
  j4 = false;  
  document.getElementById('nombre-jug').innerHTML = infojugadores[0].nam;
  document.querySelector(".game").innerHTML = '';
  document.getElementById('numero-puntaje').innerHTML = infojugadores[0].puntaje;
  generarCartonVisual(infojugadores[0].Cartonjug);
});


botonJug2.addEventListener('click', () => {
  j1 = false;
  j2 = true;  
  j3 = false;
  j4 = false;  
  document.getElementById('nombre-jug').innerHTML = infojugadores[1].nam;
  document.querySelector(".game").innerHTML = '';
  document.getElementById('numero-puntaje').innerHTML = infojugadores[1].puntaje
  generarCartonVisual(infojugadores[1].Cartonjug)
});

botonJug3.addEventListener('click', () => {
  j1 = false;
  j2 = false;  
  j3 = true;
  j4 = false;  
  document.getElementById('nombre-jug').innerHTML = infojugadores[2].nam;
  document.querySelector(".game").innerHTML = '';
  document.getElementById('numero-puntaje').innerHTML = infojugadores[2].puntaje
  generarCartonVisual(infojugadores[2].Cartonjug)
});

botonJug4.addEventListener('click', () => {
  j1 = false;
  j2 = false;  
  j3 = false;
  j4 = true; 
  document.getElementById('nombre-jug').innerHTML = infojugadores[3].nam;
  document.querySelector(".game").innerHTML = '';
  document.getElementById('numero-puntaje').innerHTML = infojugadores[3].puntaje
  generarCartonVisual(infojugadores[3].Cartonjug)
});
  
