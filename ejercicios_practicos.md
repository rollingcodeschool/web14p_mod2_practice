# 📝 Guía Práctica: Arrays y Funciones en JavaScript

En esta guía vas a poner a prueba el manejo de **Arrays** (listas) combinándolos con **Funciones**. 

Recordá que para modificar o manipular arrays pods usar los métodos vistos en clase: `.push()`, `.unshift()`, `.pop()`, `.shift()`, `.splice()`, `.concat()`, `.slice()` y la propiedad `.length`.

---

## 🛒 Ejercicio 1: "Agregando compras de urgencia"

**Objetivo:** Practicar la adición de elementos a un array usando `.push()` dentro de una función.

**Consigna:**
Creá un array llamado `carrito` que comience con los siguientes elementos: `"Pan"`, `"Leche"`, `"Café"`.

A continuación, escribí una función llamada `agregarAlCarrito(producto)` que reciba como parámetro el nombre de un nuevo producto, lo agregue al **final** del array `carrito` y muestre por consola un mensaje como este:
`"Producto [nombre] agregado al carrito. Total de productos: [cantidad]"`.

**Código de prueba:**
```javascript
let carrito = ["Pan", "Leche", "Café"];

function agregarAlCarrito(producto) {
  // Escribí tu código acá
}

// Probá ejecutando la función:
agregarAlCarrito("Queso"); 
// Debería agregar "Queso" y mostrar: "Producto Queso agregado al carrito. Total de productos: 4"
```

---

## 🛑 Ejercicio 2: "Atención prioritaria en la fila"

**Objetivo:** Practicar la inserción de elementos al principio (`.unshift()`) y eliminación del primero (`.shift()`).

**Consigna:**
En un banco hay una fila de clientes representada por un array: `const filaBanco = ["Ana", "Carlos", "Beatriz"];`.

Escribí dos funciones:
1. `atenderCliente()`: Debe eliminar al **primer** cliente de la fila (el que está siendo atendido) y devolver un mensaje diciendo: `"Atendiendo a [nombre]"`.
2. `colarClienteUrgente(nombre)`: Debe agregar a un cliente con prioridad al **principio** de la fila.

**Código de prueba:**
```javascript
let filaBanco = ["Ana", "Carlos", "Beatriz"];

function atenderCliente() {
  // Escribí tu código acá
}

function colarClienteUrgente(nombre) {
  // Escribí tu código acá
}

// Pruebas:
colarClienteUrgente("Julieta"); // "Julieta" pasa al principio
atenderCliente(); // Debería atender a "Julieta"
atenderCliente(); // Debería atender a "Ana"
```

---

## 📋 Ejercicio 3: "El Inspector de Listas"

**Objetivo:** Acceder a elementos por su índice, conocer la longitud (`.length`) y modificar un valor específico.

**Consigna:**
Creá una función llamada `reemplazarElemento(lista, indice, nuevoValor)` que reciba tres parámetros:
1. El array sobre el que se va a trabajar.
2. La posición (índice) que se quiere modificar.
3. El nuevo valor que va a reemplazar al anterior.

**Regla extra:** La función debe verificar primero si el índice existe en el array (es decir, que el índice no sea negativo ni mayor o igual al tamaño de la lista).
* Si el índice es válido, realiza el cambio y muestra por consola la lista actualizada.
* Si el índice NO es válido, muestra un mensaje de error: `"Índice fuera de rango"`.

**Código de prueba:**
```javascript
let listaDeSuper = ["Galletas", "Jugo", "Yogur", "Frutas"];

function reemplazarElemento(lista, indice, nuevoValor) {
  // Escribí tu código acá
}

// Pruebas:
reemplazarElemento(listaDeSuper, 1, "Agua Mineral"); // Reemplaza "Jugo" por "Agua Mineral"
reemplazarElemento(listaDeSuper, 10, "Chocolate"); // Muestra: "Índice fuera de rango"
```

---

## ✂️ Ejercicio 4: "Edición de catálogo (Quitar e Insertar)"

**Objetivo:** Utilizar el método `.splice()` dentro de una función para eliminar y agregar elementos en cualquier posición.

**Consigna:**
Un local de ropa tiene un catálogo de talles o prendas: `let catalogo = ["Remera", "Pantalón", "Campera", "Buzo"];`.

Escribí una función llamada `actualizarPrenda(posicion, cantidadABorrar, nuevaPrenda)` que:
1. Borre la cantidad de elementos indicados desde la posición especificada.
2. Agregue en ese mismo lugar la `nuevaPrenda`.
3. Devuelva el array modificado.

**Código de prueba:**
```javascript
let catalogo = ["Remera", "Pantalón", "Campera", "Buzo"];

function actualizarPrenda(posicion, cantidadABorrar, nuevaPrenda) {
  // Escribí tu código acá
}

// Prueba: Reemplazar "Campera" (índice 2) por "Vestido"
actualizarPrenda(2, 1, "Vestido"); 
// Resultado esperado en catalogo: ["Remera", "Pantalón", "Vestido", "Buzo"]
```

---

## 📦 Ejercicio 5: "Uniendo Depósitos y Respaldos"

**Objetivo:** Practicar la combinación de arrays (`.concat()`) y la creación de copias o fragmentos (`.slice()`).

**Consigna:**
Tenemos dos sucursales con listas de productos:
* `const depositoA = ["Silla", "Mesa"];`
* `const depositoB = ["Lámpara", "Sillón", "Placar"];`

Escribí una función llamada `unirYGuardarTop3(array1, array2)` que:
1. Una los dos arrays en una sola lista completa.
2. Cree una **copia de los primeros 3 elementos** de esa lista unificada usando `.slice()`.
3. Retorne esa nueva lista reducida de 3 elementos.

**Código de prueba:**
```javascript
const depositoA = ["Silla", "Mesa"];
const depositoB = ["Lámpara", "Sillón", "Placar"];

function unirYGuardarTop3(array1, array2) {
  // Escribí tu código acá
}

const resultado = unirYGuardarTop3(depositoA, depositoB);
console.log(resultado); 
// Muestra por consola: ["Silla", "Mesa", "Lámpara"]
```