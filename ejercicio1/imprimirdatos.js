const button = document.querySelector("button");
const form = document.querySelector("form");
const spanError = document.querySelectorAll(".spanError");

let id = 0;

button.addEventListener("click", () => {
    
    // recoger todos los elementos del form
  const texto = document.getElementById("texto");
  let validacion = true;
  alert(texto.value);
  // reset estilos error y mensajes
  texto.classList.remove("inputError");

  // texto
  if (texto.value.length === 0) {
    texto.classList.add("inputError");
    validacion= false;
   } 
    // si el form esta validado!
  if (validacion) {
    const divimprimir = document.querySelector("#imprimir");
    divimprimir.innerHTML =
    `<article> 
      <h1>${texto.value}</h1>
    </article>`;
    // reset campos
    form.reset();
  }
});

