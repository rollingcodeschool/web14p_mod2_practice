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

function calcularDescuento() {
  const monto = Number(prompt("Ingrese el monto a pagar"));
  let descuento = 0;
  let totalPagar = 0;

  if (isNaN(monto) || monto <= 0) {
    console.error("Ingrese un número por favor...por el amor de Dios");
  } else {
    if (monto < 100) {
      console.log(
        "No tiene descuento Loser! \n El monto a pagar es de $" + monto,
      );
    } else if (monto >= 100 && monto <= 300) {
      descuento = monto * 0.05;
      totalPagar = monto * 0.95;
      // totalPagar=monto-descuento
      console.log(
        `El descuento es del 5% y el monto as pagar es de $${totalPagar}`,
      );
    } else if (monto > 300 && monto <= 500) {
      descuento = monto * 0.1;
      totalPagar = monto * 0.9;
      // totalPagar=monto-descuento
      console.log(
        `El descuento es del 10% y el monto as pagar es de $${totalPagar}`,
      );
    } else {
      descuento = monto * 0.15;
      totalPagar = monto * 0.85;
      // totalPagar=monto-descuento
      console.log(
        `El descuento es del 15% y el monto as pagar es de $${totalPagar}`,
      );
    }
  }
}
