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
