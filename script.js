/* Vamos a crear un acalculadora sencilla */

const suma = (num1, num2) => {
  return num1 + num2;
};

const resta = (num1, num2) => {
  return num1 - num2;
};
const multiplicacion = (num1, num2) => {
  return num1 * num2;
};
const division = (num1, num2) => {
  if (num2 == 0) {
    alert("La operacion no se puede realizar");
  } else {
    return num1 / num2;
  }
};

let opcion = parseInt(
  prompt(
    "¿Qué operación deseas realizar?\n 1: Suma\n 2: Resta\n 3: Multiplicación\n 4: División"
  )
);

let num1 = parseInt(prompt("ingresa el primer numero"));
let num2 = parseInt(prompt("ingresa el segundo numero"));

switch (opcion) {
  case 1:
    alert("El resultado de la suma es " + suma(num1, num2));

    break;

  case 2:
    alert("El resultado de la resta  es " + resta(num1, num2));

    break;
  case 3:
    alert(
      "El resultado de la multiplicacion  es " + multiplicacion(num1, num2)
    );

    break;
  case 4:
    alert("El resultado de la division  es " + division(num1, num2));

    break;

  default:
    alert("La operacion no es posible");
    break;
}
