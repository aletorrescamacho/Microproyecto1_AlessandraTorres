const formularioJugadores = document.getElementById('formulario-jugadores');
const botonIniciar = document.getElementById('boton-iniciar');
const botonR = document.getElementById('boton-ranking');
const botonJug1 = document.getElementById('boton-jugador1');
const botonJug2 = document.getElementById('boton-jugador2');
const botonJug3 = document.getElementById('boton-jugador3');
const botonJug4 = document.getElementById('boton-jugador4');
const items = document.getElementById('game');
infojugadores = 0;
cartonCompleto = false;
const botonRein = document.getElementById('boton-reiniciar');





function obtenerPosicionMayorPuntaje(listaDiccionarios) {
  let mayorPuntaje = -Infinity;
  let posicionMayor = -1;
  for (let i = 0; i < listaDiccionarios.length; i++) {
    if (listaDiccionarios[i].puntaje > mayorPuntaje) {
      mayorPuntaje = listaDiccionarios[i].puntaje;
      posicionMayor = i;
    }
  }
  return posicionMayor;
}




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

function Ocultar(n) {
  n.classList.add("formulario-oculto");
  n.classList.remove("formulario-visible");
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
    Ocultar(document.getElementById('boton-sacarnum'))




    if(cartonCompleto){
      document.getElementById('numero-ronda').innerHTML = "";
      document.getElementById('titulo-ronda').innerHTML = "Partida terminada";
      Ocultar(document.getElementById('boton-sacarnum'))
  
      
    }
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
      diag = [[c[0], c[5], c[10], c[15]], [c[12], c[9], c[6], c[15]] ]
      infojugadores[i].filas = fil;
      infojugadores[i].columnas = colum;
      infojugadores[i].diagonales = diag;
    }
    if (tamanoCarton == 5){
      fil = [[c[0], c[1], c[2], c[3], c[4]], [c[5], c[6], c[7], c[8], c[9]], [c[10], c[11], c[12], c[13], c[14]], [c[15], c[16], c[17], c[18], c[19]], [c[20], c[21], c[22], c[23], c[24]]]
      colum = [[c[0], c[5], c[10], c[15], c[20]], [c[1], c[6], c[11], c[16], c[21]], [c[2], c[7], c[12], c[17], c[22]], [c[3], c[8], c[13], c[18], c[23]], [c[4], c[9], c[14], c[19], c[24]] ]
      diag = [[c[0], c[6], c[12], c[18], c[24]], [c[20], c[16], c[12], c[8], c[4]]]
      infojugadores[i].filas = fil;
      infojugadores[i].columnas = colum;
      infojugadores[i].diagonales = diag;
      
  }
  }
  return infojugadores;

}

function todosIguales(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) {
      return false;
    }
  }
  return true;
}

function filaBingo(jug1filas, tamanoCarton){

  num = 0;
    for( var k=0; k< tamanoCarton; k++){
      if(todosIguales(jug1filas[k])){
        num = num + 1;

      }
    }
    return num;
  }

function columBingo(jug1colum, tamanoCarton){

  num = 0;
    for( var k=0; k< tamanoCarton; k++){
      if(todosIguales(jug1colum[k])){
        num = num + 1;

      }
    }
    return num;
  }

  function diagBingo(jug1diag, tamanoCarton){

    num = 0;
      for( var k=0; k< 2; k++){
        if(todosIguales(jug1diag[k])){
          num = num + 3;
  
        }
      }
      return num;
    }

    function llenoBingo(Cartonjug, tamanoCarton,cartonCompleto){
      cartonCompleto = false
      num = 0;
        for( var k=0; k< tamanoCarton*tamanoCarton; k++){
          if(todosIguales(Cartonjug[k])){
            cartonCompleto=true;

    
          }
          return cartonCompleto;
        }

      }
  




// Evento para iniciar la partida
botonIniciar.addEventListener('click', () => {
  const tabla = document.querySelector('#tablita'); // Obtener la tabla
  tabla.style.display = 'none'; // Ocultar la tabla
    nombres = obtenerNombresJugadores()
    mostrarBotonNum()
    mostrar()
    tamanoCarton = formularioJugadores.querySelector("#tamano-carton");
    Cartones = generarCartones(tamanoCarton.value);
    mostrar2(document.getElementById('contenedor-juego'));
    mostrar2(document.getElementById('ver-cartones-contenedor'))
    mostrar2(document.getElementById('boton-reiniciar'))
    infojugadores = [{nam: nombres[0],
    puntaje: 0, 
    Cartonjug: Cartones[0], 
    diagonales: [],
    filas: [],
    columnas: []}, 
    {nam: nombres[1],
    puntaje: 0, 
    Cartonjug: Cartones[1], 
    diagonales: [],
    filas: [],
    columnas: []}, 
    {nam: nombres[2],
    puntaje: 0, 
    Cartonjug: Cartones[2], 
    diagonales: [],
    filas: [],
    columnas: []}, 
    {nam: nombres[3],
    puntaje: 0, 
    Cartonjug: Cartones[3], 
    diagonales: [],
    filas: [],
    columnas: []}]

    infojugadores = generarfilcoldiag(tamanoCarton.value, infojugadores)


    numeros = infojugadores[0].filas[0], suma = 0;
    numeros.forEach (function(numero){
        suma += numero;
    });


    
});





activarBotonIniciar();

g1=0
g2=0
g3=0
g4=0
c1=0
c2=0
c3=0
c4=0
d1=0
d2=0
d3=0
d4=0

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
        persona.Cartonjug[k]='X';
        k=persona.Cartonjug.length;
      }
    }
  }
  infojugadores = generarfilcoldiag(tamanoCarton.value, infojugadores)


  ptofila1= filaBingo(infojugadores[0].filas, tamanoCarton.value);
  if(g1==0){
    g1=ptofila1;
    sum1 = g1
  }
  else{
    if(ptofila1 != g1){
      sum1 = g1 + (ptofila1 - g1)-1
      g1 = ptofila1 

    }
    else{
      sum1=0
    }

  }
  puntajejug1 = infojugadores[0].puntaje
  punt1 = puntajejug1+sum1
  infojugadores[0].puntaje = punt1


  ptofila2= filaBingo(infojugadores[1].filas, tamanoCarton.value);
  if(g2==0){
    g2=ptofila2;
    sum2 = g2
  }
  else{
    if(ptofila2 != g2){
      sum2 = g2 + (ptofila2 - g2)-1
      g2 = ptofila2 
    }
    else{
      sum2=0
    }

  }
  puntajejug2 = infojugadores[1].puntaje
  punt2 = puntajejug2+sum2
  infojugadores[1].puntaje = punt2


  ptofila3= filaBingo(infojugadores[2].filas, tamanoCarton.value);
  if(g3==0){
    g3=ptofila3;
    sum3 = g3 
  }
  else{
    if(ptofila3 != g3){
      sum3 = g3 + (ptofila3 - g3)-1
      g3 = ptofila3 
    }
    else{
      sum3=0
    }

  }
  puntajejug3 = infojugadores[2].puntaje
  punt3 = puntajejug3+sum3
  infojugadores[2].puntaje = punt3

  ptofila4= filaBingo(infojugadores[3].filas, tamanoCarton.value);
  if(g4==0){
    g4=ptofila4;
    sum4 = g4
  }
  else{
    if(ptofila4 != g4){
      sum4 = g4 + (ptofila4 - g4)-1
      g4 = ptofila4 
    }
    else{
      sum4=0
    }

  }
  puntajejug4 = infojugadores[3].puntaje
  punt4 = puntajejug4+sum4
  infojugadores[3].puntaje = punt4



  
  ptocolum1 = columBingo(infojugadores[0].columnas, tamanoCarton.value)
  if(c1==0){
    c1=ptocolum1;
    sum1 = c1
  }
  else{
    if(ptocolum1 != c1){
      sum1 = c1 + (ptocolum1 - c1)-1
      c1 = ptocolum1 
    }
    else{
      sum1=0
    }

  }
  puntajejug1 = infojugadores[0].puntaje
  punt1 = puntajejug1+sum1
  infojugadores[0].puntaje = punt1

  ptocolum2 = columBingo(infojugadores[1].columnas, tamanoCarton.value)

  if(c2==0){
    c2=ptocolum2;
    sum2 = c2
  }
  else{
    if(ptocolum2 != c2){
      sum2 = c2 + (ptocolum2 - c2)-1
      c2 = ptocolum2 
    }
    else{
      sum2=0
    }

  }
  puntajejug2 = infojugadores[1].puntaje
  punt2 = puntajejug2+sum2
  infojugadores[1].puntaje = punt2

  ptocolum3 = columBingo(infojugadores[2].columnas, tamanoCarton.value)
  if(c3==0){
    c3=ptocolum3;
    sum3 = c3
  }
  else{
    if(ptocolum3 != c3){
      sum3 = c3 + (ptocolum3 - c3)-1
      c3 = ptocolum3 
    }
    else{
      sum3=0
    }

  }
  puntajejug3 = infojugadores[2].puntaje
  punt3 = puntajejug3+sum3
  infojugadores[2].puntaje = punt3

  ptocolum4 = columBingo(infojugadores[3].columnas, tamanoCarton.value)
  if(c4==0){
    c4=ptocolum4;
    sum4 = c4
  }
  else{
    if(ptocolum4 != c4){
;
      sum4 = c4 + (ptocolum4 - c4)-1
      c4 = ptocolum4 
    }
    else{
      sum4=0
    }

  }
  puntajejug4 = infojugadores[3].puntaje
  punt4 = puntajejug4+sum4
  infojugadores[3].puntaje = punt4

  ptodiag1= diagBingo(infojugadores[0].diagonales, tamanoCarton.value);
  if(d1==0){
    d1=ptodiag1;
    sum1 = d1
  }
  else{
    if(ptodiag1 != d1){
      sum1 = d1 + (ptodiag1 - d1)-1
      d1 = ptodiag1 
    }
    else{
      sum1=0
    }

  }
  puntajejug1 = infojugadores[0].puntaje
  punt1 = puntajejug1+sum1
  infojugadores[0].puntaje = punt1


  ptodiag2= diagBingo(infojugadores[1].diagonales, tamanoCarton.value);
  if(d2==0){
    d2=ptodiag2;
    sum2 = d2
  }
  else{
    if(ptodiag2 != d2){
      sum2 = d2 + (ptodiag2 - d2)-1
      d2 = ptodiag2 
    }
    else{
      sum2=0
    }

  }
  puntajejug2 = infojugadores[1].puntaje
  punt2 = puntajejug2+sum2
  infojugadores[1].puntaje = punt2

  ptodiag3= diagBingo(infojugadores[2].diagonales, tamanoCarton.value);
  if(d3==0){
    d3=ptodiag3;
    sum3 = d3
  }
  else{
    if(ptodiag3 != d3){
      sum3 = d3 + (ptodiag3 - d3)-1
      d3 = ptodiag3 
    }
    else{
      sum3=0
    }

  }
  puntajejug3 = infojugadores[2].puntaje
  punt3 = puntajejug3+sum3
  infojugadores[2].puntaje = punt3

  ptodiag4= diagBingo(infojugadores[3].diagonales, tamanoCarton.value);
  if(d4==0){
    d4=ptodiag4;
    sum4 = d4
  }
  else{
    if(ptodiag4 != d4){
      sum4 = d4 + (ptodiag4 - d4)-1
      d4 = ptodiag1 
    }
    else{
      sum4=0
    }

  }
  puntajejug4 = infojugadores[3].puntaje
  punt4 = puntajejug4+sum4
  infojugadores[3].puntaje = punt4



  if(j1==true){
    document.querySelector(".game").innerHTML = '';
    generarCartonVisual(infojugadores[0].Cartonjug);
    document.getElementById('numero-puntaje').innerHTML = infojugadores[0].puntaje;
  }
  if(j2==true){
    document.querySelector(".game").innerHTML = '';
    generarCartonVisual(infojugadores[1].Cartonjug);
    document.getElementById('numero-puntaje').innerHTML = infojugadores[1].puntaje;
  }
  if(j3==true){
    document.querySelector(".game").innerHTML = '';
    generarCartonVisual(infojugadores[2].Cartonjug);
    document.getElementById('numero-puntaje').innerHTML = infojugadores[2].puntaje;
  }
  if(j4==true){
    document.querySelector(".game").innerHTML = '';
    generarCartonVisual(infojugadores[3].Cartonjug);
    document.getElementById('numero-puntaje').innerHTML = infojugadores[3].puntaje;
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
  

const dicLocal = {
  jug1: {nombre: 'Jugador 1',
  victorias: 0, 
  puntaje: 0},
  
  jug2: {nombre: 'Jugador 2',
  victorias: 0, 
  puntaje: 0},
  
  jug3: {nombre: 'Jugador 3',
  victorias: 0, 
  puntaje: 0},
  
  jug4: {nombre: 'Jugador 4',
  victorias: 0, 
  puntaje: 0}
  
  }
  const dicLocalJSON = JSON.stringify(dicLocal)
  localStorage.setItem("dicJug", dicLocalJSON);

botonRein.addEventListener('click', () => {


  const dicJSON = localStorage.getItem("dicJug");
  const reconvDic = JSON.parse(dicJSON);
  var ganador = obtenerPosicionMayorPuntaje(infojugadores)
  if(ganador == 0){
    reconvDic['jug1']['victorias'] += 1;
  }
  else if(ganador == 1){
    reconvDic['jug2']['victorias'] += 1;
  }
  else if(ganador == 2){
    reconvDic['jug3']['victorias'] += 1;
  }
  else{
    reconvDic['jug4']['victorias'] += 1;
  }

  reconvDic['jug1']['puntaje'] += infojugadores[0].puntaje;
  reconvDic['jug2']['puntaje'] += infojugadores[1].puntaje;
  reconvDic['jug3']['puntaje'] += infojugadores[2].puntaje;
  reconvDic['jug4']['puntaje'] += infojugadores[3].puntaje;

  const upDic = JSON.stringify(reconvDic);
  localStorage.setItem("dicJug", upDic)
});
