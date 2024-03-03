// LISTA DE PREGUNTAS
const preguntas = [
  {
    pregunta: "1) ¿Cual es el segundo nombre de Homero?",
    opciones: ["a) Ned", "b) Bart", "c) Jay", "d) Moe"],
    respuestaCorrecta: 2,
  },
  {
    pregunta: "2) ¿Quién le disparó al señor Burns?",
    opciones: [
      "a) Waylon Smithers",
      "b) Maggie Simpson",
      "c) Seymour Skinner",
      "d) Ned Flanders",
    ],
    respuestaCorrecta: 1,
  },
  {
    pregunta: "3) ¿Por qué viajan a Australia los Simpson?",
    opciones: [
      "a) Porque Bart tenía que disculparse por una broma telefónica",
      "b) Porque Lisa se iba a presentar en un concierto",
      "c) Porque Homero se ganó tickets",
      "d) Ninguna es correcta",
    ],
    respuestaCorrecta: 0,
  },
  {
    pregunta: "4) ¿Quiénes fueron los miembros originales de Los Borbotones?",
    opciones: [
      "a) Barney, Homero, el director Skinner y el jefe Górgory",
      "b) Otto, Apu, Mel Patiño y Homero",
      "c) Apu, el director Skinner, el jefe Górgory y Homero",
      "d) Homero, Bart, Moe y Barney",
    ],
    respuestaCorrecta: 2,
  },
  {
    pregunta: "5) ¿A qué es alérgico Bart?",
    opciones: ["a) Atún", "b) Fresas", "c) Maní", "d) Camarones"],
    respuestaCorrecta: 3,
  },
];

// PREGUNTAS Y RESPUESTAS
let questions = document.getElementById("question-container");
let respuestaUsuario = [];

// BOTON PARA AGREGAR O QUITAR PREGUNTAS AL CUESTIONARIO
let numberOfQuestions = document.getElementById("numberOfQuestions");
let sumar = document.getElementById("sum");
let restar = document.getElementById("less");
let aceptar = document.getElementById("confirm-button");
let contador = 1;

sumar.onclick = () => {
  contador++;
  numberOfQuestions.innerHTML = contador;
  restar.disabled = false;
};

restar.onclick = () => {
  if (contador === 1) {
    restar.disabled = true;
  } else {
    contador--;
    numberOfQuestions.innerHTML = contador;
  }
};

// EVENTO DEL BOTON "ACEPTAR"
aceptar.onclick = () => {
  // MODIFICA EL LARGO DEL ARRAY DE PREGUNTAS, TOMANDO COMO BASE LA CANTIDAD QUE TENGA "CONTADOR"
  let arrayOfQuestions = preguntas.slice(0, contador);

  // SE LIMPIA EL CONTENEDOR ANTES DE AGREGAR NUEVAS PREGUNTAS
  questions.innerHTML = "";

  // MUESTRA DE PREGUNTAS
  arrayOfQuestions.forEach((pregunta, index) => {
    let container = document.createElement("div");
    let options = pregunta.opciones;
    container.className = "container";
    container.innerHTML = `<h4>${pregunta.pregunta}</h4>
                          <ul>${options
                            .map(
                              (o, i) =>
                                `<li><input type="radio" name="question${index}" value="${i}">${o}</li>`
                            )
                            .join("")}
                        </ul>`;

    // EVENTO PARA TOMAR LA OPCION SELECCIONADA POR EL USUARIO
    let radioInputs = container.querySelectorAll('input[type="radio"]');
    radioInputs.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        respuestaUsuario[index] = event.target.value;
        return respuestaUsuario;
      });
    });
    questions.appendChild(container);
  });
};

// FUNCION PARA CALCULAR TOTAL DE PUNTOS
function calcularPuntuacion() {
  let puntuacion = 0;

  for (let i = 0; i < preguntas.length; i++) {
    const respuestaCorrecta = preguntas[i].respuestaCorrecta;
    const respuestaUsuarioActual = respuestaUsuario[i];

    if (
      respuestaUsuarioActual !== undefined &&
      parseInt(respuestaUsuarioActual) === respuestaCorrecta
    ) {
      puntuacion += 10;
    } else {
      puntuacion += 0;
    }
  }

  // PASAR CANTIDAD DE PUNTOS AL HTML
  let sumaPuntos = document.getElementById("point-counter");
  sumaPuntos.innerHTML = `${puntuacion}`;
  localStorage.setItem("puntuacion_usuario", puntuacion);
}

// FUNCION PARA OBTENER Y MOSTRAR PUNTUACIÓN ALMACENADA EN LOCALSTORAGE
function mostrarPuntuacionAlmacenada() {
  let puntuacionAlmacenada = localStorage.getItem("puntuacion_usuario");
  let mensajePuntuacion = document.getElementById("last-point-score");
  mensajePuntuacion.innerHTML =
    puntuacionAlmacenada !== null ? puntuacionAlmacenada : "-";
}

// BOTON PARA FINALIZAR CUESTIONARIO Y CALCULAR LOS PUNTOS
let botonCalcularPuntuacion = document.getElementById("finish-test-button");
botonCalcularPuntuacion.onclick = () => {
  calcularPuntuacion();
  mostrarPuntuacionAlmacenada();
};

// BOTON PARA REINICIAR
let restartButton = document.getElementById("restart-button");
restartButton.onclick = () => {
  respuestaUsuario = [];
  contador = 1;
  numberOfQuestions.innerHTML = contador;
  questions.innerHTML = "";
  let sumaPuntos = document.getElementById("point-counter");
  sumaPuntos.innerHTML = "0";
};

// GUARDAR NOMBRE INGRESADO EN LOCALSTORAGE
function guardarNombre() {
  let nombreIngresado = document.getElementById("nombre").value;
  localStorage.setItem("nombre_usuario", nombreIngresado);
}
document.getElementById("name-button").addEventListener("click", guardarNombre);

// MOSTRAR SALUDO
function saludarUsuario() {
  let saludo = localStorage.getItem("nombre_usuario");
  if (saludo) {
    let contenedorSaludo = document.getElementById("greets");
    contenedorSaludo.innerHTML = `<p>¡Hola ${saludo}, vamos a jugar!</p>`;
  } else {
  }
}

saludarUsuario();
