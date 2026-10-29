# Guía Práctica: Arrays en JavaScript
> **Conceptos fundamentales, manipulación de elementos y operaciones CRUD**

---

## 1. Introducción a los Arrays (Arreglos)

Un **Array** (o arreglo) es una estructura de datos ordenada que permite almacenar múltiples valores en una sola variable. Los elementos dentro de un array están indexados numéricamente comenzando desde **0**.

### Creación de un Array
Para declarar un array, utilizamos corchetes `[]` separando cada elemento con comas:

```javascript
const listaDeCompras = ["Leche", "Pan", "Jugo", "Carne", "Verduras"];
```

---

## 2. Propiedades y Acceso a Elementos

### Obtener la cantidad de elementos (`.length`)
La propiedad `length` nos indica la cantidad total de elementos que contiene el arreglo:

```javascript
console.log(listaDeCompras.length); // Muestra por consola: 5
```

### Acceder a un elemento por índice
Para leer un valor específico, indicamos su índice entre corchetes:

```javascript
console.log(listaDeCompras[3]); // Muestra: "Carne" (posición indexada en 3)
```

### Reasignar o actualizar un valor
Podemos modificar el contenido de una posición asignándole un nuevo valor directamente o mediante una función helper:

```javascript
// Reasignación directa:
listaDeCompras[2] = "Gaseosa"; // Reemplaza "Jugo" por "Gaseosa"

// Mediante una función de flecha helper:
const cambiarElemento = (index, valor) => (listaDeCompras[index] = valor);
cambiarElemento(0, "Leche Descremada");
```

---

## 3. Métodos Básicos de Inserción y Extracción

JavaScript provee métodos integrados para modificar los extremos de un array de forma rápida:

| Método | Descripción | Ubicación |
| :--- | :--- | :--- |
| `push(elemento)` | Agrega uno o más elementos al final del array. | Final |
| `unshift(elemento)` | Agrega uno o más elementos al inicio del array. | Inicio |
| `pop()` | Elimina y retorna el último elemento del array. | Final |
| `shift()` | Elimina y retorna el primer elemento del array. | Inicio |

### Ejemplo de uso:

```javascript
// Agregar al final
listaDeCompras.push("Queso");

// Agregar al principio
listaDeCompras.unshift("Papel Higiénico");

// Eliminar el último elemento
listaDeCompras.pop();

// Eliminar el primer elemento
listaDeCompras.shift();
```

---

## 4. Copia y Combinación de Arrays

> ⚠️ **¡ATENCIÓN!** Asignar un array a una nueva variable (`const copia = listaOriginal`) **NO** crea una copia independiente, sino una referencia a la misma dirección de memoria. Modificar la copia cambiará el array original.

### Copia por fragmento (`.slice`)
Para realizar una copia real o extraer un fragmento sin modificar el arreglo original, se utiliza `.slice(inicio, fin)`:

```javascript
// ❌ ESTO ESTÁ MAL (Copia por referencia):
// const backupListaDeCompras = listaDeCompras; 

// ✔️ FORMA CORRECTA (Copia una porción o todo el array):
const backupListaDeCompras = listaDeCompras.slice(0, 3); // Copia los elementos del índice 0 al 2
```

### Unir Arrays (`.concat`)
Permite combinar dos o más arreglos retornando un nuevo array unificado:

```javascript
const listaElementosLimpieza = ["Detergente", "Jabón", "Papel higiénico"];

// Combina listaDeCompras con listaElementosLimpieza
const listaCompleta = listaDeCompras.concat(listaElementosLimpieza);
```

---

## 5. Operaciones CRUD con `.splice()`

El método `.splice()` es una herramienta multipropósito que permite **Crear (insertar), Leer/Modificar y Eliminar (Delete)** elementos en cualquier posición del array. A diferencia de `.slice()`, **`.splice()` SÍ modifica el array original**.

### Sintaxis General:
```javascript
array.splice(indiceInicio, cantidadABorrar, elemento1, elemento2, ...);
```

### Casos de uso prácticos:

```javascript
// 1. ELIMINAR (Delete):
// Eliminamos 1 elemento a partir de la posición 2
listaCompleta.splice(2, 1);

// 2. AGREGAR (Create):
// En la posición 5, eliminamos 0 elementos e insertamos dos nuevos
listaCompleta.splice(5, 0, "Trapo de piso", "Escoba");

// 3. MODIFICAR / REEMPLAZAR (Update):
// En la posición 2, eliminamos 1 elemento y colocamos "Pollo" y "Café"
listaCompleta.splice(2, 1, "Pollo", "Café");
```

---

> 💡 **NOTA:** Practica probando cada método en la consola del navegador usando `console.log()` para verificar cómo se transforma el array en cada paso.