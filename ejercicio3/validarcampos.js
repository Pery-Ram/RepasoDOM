const button = document.querySelector("button");
const form = document.querySelector("form");

let id = 0;

button.addEventListener("click", () => {
    // recoger todos los elementos del form
  const texto = document.getElementById("texto");
  let validacion = true;
  // reset estilos error y mensajes
  texto.classList.remove("inputError");

  // texto
  if (texto.value.length === 0) {
    texto.classList.add("inputError");
    validacion= false;
   } 
    // si el form esta validado!
  if (validacion) {
    texto.classList.add("inputOk");
    form.reset();
  }
});
