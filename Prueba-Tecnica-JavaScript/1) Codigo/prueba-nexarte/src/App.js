import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import ReactDOM from "react-dom/client";

function operacionBasica(operacion, valor1 = 1, valor2 = 1) {
  let resultado;
  switch (operacion) {
    case "+":
      resultado = parseInt(valor1) + parseInt(valor2);
      break;
    case "-":
      resultado = parseInt(valor1) - parseInt(valor2);
      break;
    case "*":
      resultado = parseInt(valor1) * parseInt(valor2);
      break;
    case "/":
      resultado = parseInt(valor1) / parseInt(valor2);
      break;
  }
  return resultado;
}

const listaCiudades = [
  "Bogota",
  "Cali",
  "Bogota",
  "Medellin",
  "Bogota",
  "Medellin",
  "Bogota",
  "Cali",
  "Bogota",
  "Neiva",
  "Bogota",
  "Cali",
  "Bogota",
  "Medellin",
];

let ciudadesRepetidas = [...new Set(listaCiudades)]
  .map(function (value) {
    let ciudad = {};
    ciudad.key = value;
    ciudad.cant = listaCiudades.filter((str) => str === value).length;
    return ciudad;
  })
  .sort(function (a, b) {
    return b.cant - a.cant;
  })
  .map((ciudad) => <li>{ciudad.key + " - " + ciudad.cant}</li>);

const arrayDeNumeros = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let numerosReducidos = arrayDeNumeros.reduce(function (a, b) {
  return a.concat(b);
});

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    if (inputs.operacion != null) {
      const resultado = operacionBasica(
        inputs.operacion,
        inputs.number1,
        inputs.number2
      );

      alert(
        "El resultado de la operación (" +
          (inputs.number1 || 1) +
          inputs.operacion +
          (inputs.number2 || 1) +
          ") es : " +
          resultado
      );
    } else {
      alert("Seleccione una operación!!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>A) Función que reciba los 2 números y una operación a realizar.</p>
        <form onSubmit={handleSubmit}>
          <label>
            N&uacute;mero 1:
            <input
              type="number"
              name="number1"
              value={inputs.number1 || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            <select
              name="operacion"
              defaultChecked
              value={inputs.operacion}
              onChange={handleChange}
            >
              <option value="">Seleccione...</option>
              <option value="+">Suma (+)</option>
              <option value="-">Resta (-)</option>
              <option value="*">Multiplicaci&oacute;n (*)</option>
              <option value="/">Divisi&oacute;n (/)</option>
            </select>
          </label>
          <label>
            N&uacute;mero 2:
            <input
              type="number"
              name="number2"
              value={inputs.number2 || ""}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Realizar operación</button>
        </form>
        <br />
        <p>
          B) Escribir una función que muestre las 5 ciudades, que más se
          repiten.
        </p>
        <ul>{ciudadesRepetidas}</ul>
        <br />
        <p>C) Retorne un array unificado.</p>
        {JSON.stringify(numerosReducidos)}
      </header>
    </div>
  );
}

export default App;
