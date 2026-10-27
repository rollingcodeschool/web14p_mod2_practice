//Mini gestor de inventario 📒

// 1. Variables y Arreglo de Objetos
let inventario = [
  { nombre: "Teclado", precio: 50, stock: 10 },
  { nombre: "Mouse", precio: 20, stock: 5 },
  { nombre: "Monitor", precio: 200, stock: 2 },
];

/*
ALGORITMO
----------

DATOS DE ENTRADA: Nombre del producto, cantidad a comprar
PROCESO: Valido el ingreso de datos, verifico que el producto exista en el inventario, si existe verifico que haya stock suficiente, calculo el monto a pagar, actualizo el stock del producto y muestro mensaje. Si no se encuentra el producto o el stock es insuficiente se debe mostrar el mensaje correspondiente.
SALIDA: Mensaje con el total a pagar y el stock actualizado del producto comprado || mensaje de que producto no existe en el inventario || mensaje avisando que el stock es insuficiente.
*/

function venderProducto(
  producto = prompt("Ingresa el nombre del producto"),
  cantidad = Number(prompt("Ingresa la cantidad a comprar")),
) {
  let totalPagar = 0;
  let productoEncontrado = null; //guardo el producto si lo encuentro

  //validaciones
  if (!producto || producto.length < 5) {
    return console.error(
      "Ingrese un nombre de producto válido mayor o igual a 5 caracteres",
    );
  }

  if (isNaN(cantidad) || cantidad <= 0) {
    return console.error("Ingrese un valor numérico mayor que cero");
  }
  //----------------------------------------------------

  //buscar el producto (por cada objeto)
  for (let i = 0; i < inventario.length; i++) {
    //pregunto si el producto existe
    if (inventario[i].nombre.toUpperCase() === producto.toUpperCase()) {
      //verifico si hay stock
      if (inventario[i].stock >= cantidad) {
        inventario[i].stock -= cantidad;
        totalPagar = inventario[i].precio * cantidad;
        productoEncontrado = inventario[i];
      } else {
        return console.error(
          "No hay stock suficiente de " + inventario[i].nombre,
        );
      }
    }
  }

  //termina el bucle y pregunto si encontro un producto
  if (!productoEncontrado) {
    return console.error("El producto no existe en el inventario");
  }

  //Devolvemos mensaje de que todo salio bien
  console.log(`Total a pagar: $${totalPagar}`);
  console.log(
    `Cantidad en stock de ${productoEncontrado.nombre}: ${productoEncontrado.stock} `,
  );
}

const estilo =
  "background-color: darkblue; color: white; font-style: italic; font-size: 1rem; padding: 4px 8px; border-radius: 4px;";
console.log("%cBienvenido al mini Inventario!", estilo);

venderProducto();

/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:

- Si ha comprado menos de 100 dolares no hay descuento
- Si la compra está entre 100 y 300 dolares le descuenta un 5%
- Si la compra está por encima de 300 hasta 500 dolares le descuenta un 10%
- Si la compra supera los 500 dolares le descuenta un 15%
*/
let compra = Number(prompt("Ingrese el valor de la compra"));
let descuento = 0;
let totalPagar = 0;
if (compra > 500) {
  descuento = compra * 0.15;
} else if (compra > 300) {
  descuento = compra * 0.1;
} else if (compra >= 100) {
  descuento = compra * 0.05;
}

totalPagar = compra - descuento;
console.log(`El pago de tu compra es de: $${totalPagar}`);
