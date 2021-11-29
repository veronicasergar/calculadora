"use strict"
var operacion = "";

class Calculadora {
  constructor() { this.reset(); }

  reset() {
    this.setDisplay(0);
    this.operacion = "";
  }
}

function botonPulsado(e) {
  let botonPulsado = this.innerHTML;

  if((Number(botonPulsado) >= 0) && (Number(botonPulsado) <=9)) {
    calculadora.display = (calculadora.display + botonPulsado);
    return;
  }

  switch (botonPulsado) {
    case 'C':
      calculadora.reset();
      break;
    case '+/-':
      if(calculadora.display !== "") {
        calculadora.display = -calculadora.display;
      }
      break;
    case '.':
        calculadora.display = (calculadora.display + '.');
      break;
    case '=':
      break;
    case '+':
      break;
    case '-':
      break;
    case '*':
      break;
    case '/':
      break;

  }
}

//Función que añade un escuchador a todos los botones de la calculadora
function setupCalculadora() {
  document.querySelectorAll(".botonCalculadora").forEach(boton => {
    boton.addEventListener("click", handleButtonPress);
  });
}

let calculadora = new Calculadora();
setupCalculadora();
