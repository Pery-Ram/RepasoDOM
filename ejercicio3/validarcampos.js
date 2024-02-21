const button = document.querySelector("button");
const form = document.querySelector("form");

let id = 0;

button.addEventListener("click", () => {
    // recoger todos los elementos del form
  const texto = document.getElementById("texto");
  const spanError = document.querySelector(".spanError");
  let validacion = true;
  // reset estilos error y mensajes
  texto.classList.remove("inputError");

  // texto
  if (texto.value < 18) {
    texto.classList.add("inputError");
    spanError.innerHTML = "Eres MENOR de 18";
    validacion= false;
   } 
    // si el form esta validado!
  if (validacion) {
    texto.classList.add("inputOk");
    spanError.innerHTML = "Eres MAYOR de 18";
  }
});
