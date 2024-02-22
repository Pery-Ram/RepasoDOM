const tecladoDiv = document.getElementById("teclado");
const textoTextarea = document.getElementById("texto");

const letrasMinusculas = "abcdefghijklmnñopqrstuvwxyz.,";
const letrasMayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ:;";

let mayusculasActivas = false;

const crearTeclado = () => {
  let tecladoHTML = "";

  // Botons de les lletres
  for (let i = 0; i < letrasMinusculas.length; i++) {
    const letra = letrasMinusculas[i];
    const letraMayuscula = letrasMayusculas[i];
    tecladoHTML += `<button onclick="textoTextarea.value += '${mayusculasActivas ? letraMayuscula : letra}'">${mayusculasActivas ? letraMayuscula : letra}</button>`;
  }

    // Botó Intro
    tecladoHTML += `<br><button onclick="textoTextarea.value += '\\n'">Intro</button>`;

    // Botó Shift
    tecladoHTML += `<button onclick="mayusculasActivas = !mayusculasActivas; crearTeclado()">Shift</button>`;

    // Botó Espai
    tecladoHTML += `<button onclick="textoTextarea.value += ' '">Espai</button>`;

    // Botó Delete
    tecladoHTML += `<button onclick="textoTextarea.value = textoTextarea.value.slice(0, -1)">Delete</button>`;

    tecladoDiv.innerHTML = tecladoHTML;
    };

crearTeclado();