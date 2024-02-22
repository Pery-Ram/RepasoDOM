    const tecladoDiv = document.getElementById("teclado");
    const textoTextarea = document.getElementById("texto");

    const letrasMinusculas = "abcdefghijklmnñopqrstuvwxyzáéíóúü";
    const letrasMayusculas = letrasMinusculas.toUpperCase();

    let mayusculasActivas = false;

    const crearTeclado = () => {
      tecladoDiv.innerHTML = "";

      // Botó Intro
      const introButton = document.createElement("button");
      introButton.textContent = "Intro";
      introButton.addEventListener("click", () => {
        textoTextarea.value += "\n";
      });
      tecladoDiv.appendChild(introButton);

      // Botó Shift
      const shiftButton = document.createElement("button");
      shiftButton.textContent = "Shift";
      shiftButton.addEventListener("click", () => {
        mayusculasActivas = !mayusculasActivas;
        crearTeclado();
      });
      tecladoDiv.appendChild(shiftButton);

      // Botó Espai
      const espacioButton = document.createElement("button");
      espacioButton.textContent = "Espai";
      espacioButton.addEventListener("click", () => {
        textoTextarea.value += " ";
      });
      tecladoDiv.appendChild(espacioButton);

      // Botó Delete
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        textoTextarea.value = textoTextarea.value.slice(0, -1);
      });
      tecladoDiv.appendChild(deleteButton);

      // Botons de les lletres
      for (let i = 0; i < letrasMinusculas.length; i++) {
        const letra = letrasMinusculas[i];
        const letraButton = document.createElement("button");
        letraButton.textContent = mayusculasActivas ? letrasMayusculas[i] : letra;
        letraButton.addEventListener("click", () => {
          textoTextarea.value += letra;
        });
        tecladoDiv.appendChild(letraButton);
      }
    };

    crearTeclado();