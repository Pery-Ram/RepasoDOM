const button = document.querySelector("button");
const form = document.querySelector("form");

button.addEventListener("click", () => {
    
    // recoger todos los elementos del form
  const nombre = document.getElementById("nombre");
  const tel = document.getElementById("tel");
  const direc = document.getElementById("direc");
  const arrayContenido = [];
  let validacion = true;
    // reset estilos error y mensajes
  nombre.classList.remove("inputError");
  tel.classList.remove("inputError");
  direc.classList.remove("inputError");

  // texto
  if (nombre.value.length === 0) {
    nombre.classList.add("inputError");
    validacion= false;
   } 
   if (tel.value.length === 0) {
    tel.classList.add("inputError");
    validacion= false;
   }
   if (direc.value.length === 0) {
    direc.classList.add("inputError");
    validacion= false;
   } 
    // si el form esta validado!
  if (validacion) {
    const divimprimir = document.querySelector("#imprimir");
    arrayContenido.push(nombre.value); 
    for (let i = 0; i < arrayContenido.length; i++) {
      divimprimir.innerHTML +=
      `<article> 
        <ul>
          <li class="nombre">${nombre.value} :
            <ul>
              <li>${tel.value}</li>
              <li>${direc.value}</li>
            </ul>
          </li>
      </ul>`;
      // reset campos
      form.reset();
    }
  }
});

