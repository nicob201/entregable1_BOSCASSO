// LISTA DE PREGUNTAS
const preguntas = [
  {
    pregunta: "¿Cual es el segundo nombre de Homero?",
    opciones: ["a) Ned", "b) Bart", "c) Jay", "d) Moe"],
    respuestaCorrecta: "c",
  },
  {
    pregunta: "¿Quién le disparó al señor Burns?",
    opciones: [
      "a) Waylon Smithers",
      "b) Maggie Simpson",
      "c) Seymour Skinner",
      "d) Ned Flanders",
    ],
    respuestaCorrecta: "b",
  },
  {
    pregunta: "¿Por qué viajan a Australia los Simpson?",
    opciones: [
      "a) Porque Bart tenía que disculparse por una broma telefónica",
      "b) Porque Lisa se iba a presentar en un concierto",
      "c) Porque Homero se ganó tickets",
      "d) Ninguna es correcta",
    ],
    respuestaCorrecta: "a",
  },
  {
    pregunta: "¿Quiénes fueron los miembros originales de Los Borbotones?",
    opciones: [
      "a) Barney, Homero, el director Skinner y el jefe Górgory",
      "b) Otto, Apu, Mel Patiño y Homero",
      "c) Apu, el director Skinner, el jefe Górgory y Homero",
      "d) Homero, Bart, Moe y Barney",
    ],
    respuestaCorrecta: "c",
  },
  {
    pregunta: "¿A qué es alérgico Bart?",
    opciones: ["a) Atún", "b) Fresas", "c) Maní", "d) Camarones"],
    respuestaCorrecta: "d",
  },
];

// SE INICIA LA SUMA DE PUNTOS EN 0
let puntos = 0;

// FUNCION PARA MOSTRAR PREGUNTAS AL USUARIO
function mostrarPregunta(indice) {
  const preguntaActual = preguntas[indice];

  const respuestaUsuario = prompt(
    preguntaActual.pregunta +
      "\n" +
      preguntaActual.opciones.join("\n") +
      "\n" +
      "Ingrese su respuesta (a, b, c, d):"
  );

  // CONTROL DE RESPUESTA DEL USUARIO
  if (respuestaUsuario.toLowerCase() === preguntaActual.respuestaCorrecta) {
    alert("¡Respuesta Correcta!");
    puntos += 10;
    return true;
  } else {
    alert(
      "¡D'oh!. La respuesta correcta es " +
        preguntaActual.respuestaCorrecta.toUpperCase()
    );
    puntos += 0;
    return false;
  }
}

// CONTADOR DE RESPUESTAS CORRECTAS
let respuestasCorrectas = 0;

for (let i = 0; i < preguntas.length; i++) {
  if (mostrarPregunta(i)) {
    respuestasCorrectas++;
    console.log(`La suma de puntos es ${puntos}`);
  }
}

//SUMA LOS PUNTOS Y MUESTRA EL TOTAL
switch (true) {
  case puntos === 50:
    alert(
      `¡Perfectirijillo!, acertaste todas las preguntas, sumaste ${puntos} puntos`
    );
    break;
  case puntos >= 20 && puntos <= 40:
    alert(
      `¡Muy bien, sabes bastante de los Simpsons!, sumaste ${puntos} puntos`
    );
    break;
  case puntos === 10:
    alert(`Muy flojo, sumaste ${puntos} puntos`);
    break;
  case puntos === 0:
    alert("No acertaste ninguna, a seguir viendo la serie xD");
    break;
  default:
    alert("¡Error!");
    break;
}
