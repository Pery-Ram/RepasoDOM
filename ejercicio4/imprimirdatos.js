//captar elementos
const leermas = document.querySelector("#leerMas");
const cerrar = document.querySelector("#cerrar");

const texto = document.querySelector(".texto");
const masTexto = document.querySelector(".mastexto");

//Interacción del elemento captado
leermas.addEventListener("click", () => {
  if (masTexto.className === "mastexto ocultar") {
    masTexto.className = "mastexto mostrar";
    leermas.className = "ocultar";
  } else {
    masTexto.className = "mastexto ocultar";
    leermas.className = "mostrar";
  }
});
  cerrar.addEventListener("click", () => {
    if (masTexto.className === "mastexto mostrar") {
      masTexto.className = "mastexto ocultar";
      leermas.className = "mostrar";
    } else {
      masTexto.className = "mastexto mostrar";
      leermas.className = "ocultar";
    }

});

