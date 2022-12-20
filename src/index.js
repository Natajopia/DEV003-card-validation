import validator from './validator.js'

//ingresar el nombre del usuario al inicio
const nombre = prompt("Para una mejor comunicación ingresa tu nombre");

//funcion para que solo admita numeros
let inputEspacioNumeros = document.getElementById("inputEspacioNumeros");
inputEspacioNumeros.addEventListener("keypress", (event) => {
  event.preventDefault()
  let codigoKey = event.keyCode
  let valorKey = String.fromCharCode(codigoKey);
  console.log("valorKey");
  let valor = parseInt(valorKey);
  console.log(valor)
  if (valor && inputEspacioNumeros.value.length <16) {
    inputEspacioNumeros.value += valor
  }
})


// darle función al boton Apadrinar
//Se debe tomar el numero de la tarjeta ingresada 
//llamar a la funcion validator.js (isValid)
document.getElementById("button").addEventListener("click", tomarNumeroTarjeta);
function tomarNumeroTarjeta() {
  const tNumeroTarjeta = document.getElementById("inputEspacioNumeros").value
  const resultadoIsValid = validator.isValid(tNumeroTarjeta);
  const enmascarar = validator.maskify(tNumeroTarjeta);
  if (resultadoIsValid === true) {
    alert("Tú tarjeta de crédito " + enmascarar + " es válida, ¡Gracias " + nombre + " por apadrinar a uno de nuestros peluditos!")
  }
  else {
    alert("Tú tarjeta de crédito " + enmascarar + " no es válida, por favor vuelve a ingresarla")
  }
  console.log(resultadoIsValid);
  console.log(enmascarar);

}


