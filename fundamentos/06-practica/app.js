/*
ALGORITMO (SABER SI UN NÚMERO ES PAR)
DATOS DE ENTRADA: NUMERO
PROCESOS: NUMERO DIVIDIDO EN 2 y ver si el resto es 0
DATOS DE SALIDA: mensaje si es par o impar

*/

// const num = 15;
// const resultado = num % 2;

// if (num % 2 === 0) {
//   console.log("El número es par😉");
// } else {
//   console.error("El número no es par");
// }

/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:

Si ha comprado menos de 100 dolares no hay descuento
Si la compra está entre 100 y 300 dolares le descuenta un 5%
Si la compra está por encima de 300 hasta 500 dolares le descuenta un 10%
Si la compra supera los 500 dolares le descuenta un 15%
*/

/*
ALGORITMO 
DATOS DE ENTRADA: valor de la compra
PROCESOS: comparar el monto a un rango de precios con descuento, si coincide con un rango de descuento calcular dicho descuento y restarle al monto a pagar.
DATOS DE SALIDA: mensaje con el descuento aplicado y el monto a pagar.

*/

// function calcularDescuento() {
//   const monto = Number(prompt("Ingrese el monto a pagar"));
//   let descuento = 0;
//   let totalPagar = 0;

//   if (isNaN(monto) || monto <= 0) {
//     console.error("Ingrese un número por favor...por el amor de Dios");
//   } else {
//     if (monto < 100) {
//       console.log(
//         "No tiene descuento Loser! \n El monto a pagar es de $" + monto,
//       );
//     } else if (monto >= 100 && monto <= 300) {
//       descuento = monto * 0.05;
//       totalPagar = monto * 0.95;
//       // totalPagar=monto-descuento
//       console.log(
//         `El descuento es del 5% y el monto as pagar es de $${totalPagar}`,
//       );
//     } else if (monto > 300 && monto <= 500) {
//       descuento = monto * 0.1;
//       totalPagar = monto * 0.9;
//       // totalPagar=monto-descuento
//       console.log(
//         `El descuento es del 10% y el monto as pagar es de $${totalPagar}`,
//       );
//     } else {
//       descuento = monto * 0.15;
//       totalPagar = monto * 0.85;
//       // totalPagar=monto-descuento
//       console.log(
//         `El descuento es del 15% y el monto as pagar es de $${totalPagar}`,
//       );
//     }
//   }
// }

//Bucles

/*
Switch
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.

*/
// alert("Bienvenidos a nuestro restaurante");
// let option = prompt(
//   `Qué menú deseas hoy?\n 1 - Carne\n 2 - Pescado\n 3 - Verdura`,
// );

// switch (option) {
//   case "1":
//     //acciones
//     alert("Excelente elección! Te sugerimos acompañarlo con vino tinto");
//     const acepta = confirm("Aceptas la sugerencia?");
//     if (!acepta) {
//       alert("Enviaremos el mozo a su mesa");
//     }
//     break;
//   case "2":
//     //acciones
//     alert(
//       "Se ve que sos un viejo lobo de mar! Te sugerimos acompañarlo con vino blanco",
//     );
//     break;
//   case "3":
//     //acciones
//     alert("Que bueno que te estés cuidando! Te sugerimos acompañarlo con agua");
//     break;
//   default:
//     alert("Esa opción no está disponible");
//     break;
// }

/*
For
Crea un programa que ingrese la tabla a calcular.

*/

/*
//anónimas
const calcularPresupuesto = function () {
  //acciones
};
*/

calcularTabla();

function calcularTabla(
  tabla = prompt("Ingresa el valor de la tabla a calcular"),
) {
  //validación
  for (let i = 1; i <= 10; i++) {
    // let resultado=tabla * i
    console.log(`${tabla} x ${i} = ${tabla * i}`);
    //acciones
  }
}

// calcularTabla();
// const tabla = 4;

// for (let i = 1; i <= 10; i++) {
//   // let resultado=tabla * i
//   console.log(`${tabla} x ${i} = ${tabla * i}`);
//   //acciones
// }

/*
contar la cantidad de vocales en una frase

*/

const calcularVocales = function () {
  const vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];

  const frase = "Hoy es un buen día para café";

  let contVocales = 0;

  for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
      contVocales++;
    }
  }

  return contVocales;
};
console.log(calcularVocales());
/*
while
Juego trivia
ALGORITMO
- Dato de entrada: respuesta correcta, respuesta del usuario, intentos
- Proceso: comparar la respuesta del usuario con la correcta, si es correcta mostrar mensaje de GANASTE y si es incorrecta volver a intentar y restar 1 intento. Cuando se acaban los intentos el usuario pierde.
- Salida: Mensaje (Ganaste o PERDISTE)
*/

//Funciones

//declarativas
function saludar() {
  //acciones
}

//anónimas
const calcularPresupuesto = function () {
  //acciones
};

const calcularDescuento = (valor, descuento) =>
  valor - (valor * descuento) / 100;

//Arrays

let personas = ["juan", "victoria", "Alberto"];

//borrar un elemento
// personas.splice(1, 1);
// personas.splice(0, 2);
// personas.splice(1);

//CRUD

//CREATE
//READ
//UPDATE
//DELETE

personas.splice(1, 0, "Alberto");

//this
