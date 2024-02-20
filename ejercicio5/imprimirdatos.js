
//captar elementos

const button = document.querySelector("#crear");
const divimprimir = document.querySelector("#imprimir");
const nunTelefonos = document.getElementById("numTelefonos");


//interacción que queremos que haga

button.addEventListener("click", () => {
    for (let i = 0; i < nunTelefonos.value; i++) {
      divimprimir.innerHTML +=`<input type="number" id="telefono-${i}">`;
    }
 
}
);

