const validator = {
  isValid: function (cardNum) {
  
    // if(numeros.length <=6, )
    //Variable para la suma total
    let sumaTotal = 0;
    //Se convierte string a array de tipo numero
    const numeros = Array.from(cardNum, Number);
    //funcion para recorrer el array
    for (let i = 1; i < numeros.length; i += 2) {
      //variable para doblar el valor de los numeros pares empezando por el 2do numero de izq a der
      let doblarNumeros = numeros[i] * 2
      //numeros >10 se debe restar 9
      if (doblarNumeros > 9) {
        doblarNumeros -= 9
      }
      //sumar doblarNumeros en sumaTotal
      sumaTotal += doblarNumeros
    }
    for (let i = 0; i < numeros.length; i += 2) {
      //doblar valor de los numeros pares empezando por el 1ro  numero de izq a der
      const imparNumeros = numeros[i]
      sumaTotal += imparNumeros
    }
    //corroborrar si esta correcto
    console.log(sumaTotal)
    return sumaTotal % 10 === 0
  }
  , maskify: (cardNum) => {
    //se debe dividir el string
    cardNum = cardNum.split("")
    //se debe repasar los numeros con for y se debe declarar que queremos poner #
    for (let i = 0; i < cardNum.length - 4; i++) {
      cardNum[i] = "#"
    }
    //se vuleve a unir a la cadena para realizar el console.log
    cardNum = cardNum.join("")
    console.log(cardNum);
    return cardNum
  }
}

export default validator; 
