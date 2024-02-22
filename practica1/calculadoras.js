const numCalculadorasInput = document.getElementById("numCalculadoras");
const crearCalculadorasButton = document.getElementById("crearCalculadoras");
const calculadorasDiv = document.getElementById("calculadoras");

crearCalculadorasButton.addEventListener("click", () => {
  const numCalculadoras = parseInt(numCalculadorasInput.value);
  if (numCalculadoras <= 0) {
    alert("introduce un número positivo");
    return;
  }

  calculadorasDiv.innerHTML = "";
  for (let i = 0; i < numCalculadoras; i++) {
    const calculadora = document.createElement("div");
    calculadora.classList.add("calculadora");

    calculadora.innerHTML = `
      <input type="number" id="primerNumero${i}" placeholder="Primer número">
      <input type="number" id="segonNumero${i}" placeholder="Segon número">
      <select id="operacion${i}">
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicació</option>
        <option value="division">Divisió</option>
      </select>
      <button id="calcular${i}">Calcular</button>
      <p id="resultado${i}"></p>
    `;

    calculadorasDiv.appendChild(calculadora);

    const primerNumeroInput = document.getElementById(`primerNumero${i}`);
    const segonNumeroInput = document.getElementById(`segonNumero${i}`);
    const operacionSelect = document.getElementById(`operacion${i}`);
    const calcularButton = document.getElementById(`calcular${i}`);
    const resultadoParrafo = document.getElementById(`resultado${i}`);

    calcularButton.addEventListener("click", () => {
      const primerNumero = parseFloat(primerNumeroInput.value);
      const segonNumero = parseFloat(segonNumeroInput.value);
      const operacion = operacionSelect.value;

      let resultado;
      switch (operacion) {
        case "suma":
          resultado = primerNumero + segonNumero;
          break;
        case "resta":
          resultado = primerNumero - segonNumero;
          break;
        case "multiplicacion":
          resultado = primerNumero * segonNumero;
          break;
        case "division":
          resultado = primerNumero / segonNumero;
          break;
      }

      resultadoParrafo.innerHTML = `<span class="resultado">RESULTADO: <span class="resultadoV">${resultado}</span>`;
    });
  }
});