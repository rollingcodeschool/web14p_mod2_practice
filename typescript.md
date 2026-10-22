# Tutorial básico de TypeScript

Este tutorial reúne los conceptos que aparecen en los ejercicios del proyecto: variables y tipos, operadores, objetos, interfaces, enumeraciones, condicionales, arreglos, ciclos y funciones. Los ejemplos de referencia están en `01-variables`, `02-operadores`, `03-objetos_if`, `04-condicionales_bucles` y `05-funciones`.

> Los archivos del proyecto son ejercicios independientes. Algunos contienen varios ejemplos en el mismo archivo, así que no necesariamente se pueden compilar todos juntos sin ajustes.

## 1. Variables y tipos de datos

Una variable permite guardar un valor para usarlo después. En TypeScript se usan principalmente `const` y `let`:

- `const`: la variable no se reasigna.
- `let`: puede recibir otro valor más adelante.

```ts
const nombre: string = "Ana";
let edad: number = 20;

edad = 21;
```

Los dos puntos indican el tipo del valor. Los tipos básicos del proyecto son:

```ts
const saludo: string = "Hola"; // texto
const cantidad: number = 5; // números enteros o decimales
const esEstudiante: boolean = true; // verdadero o falso
```

TypeScript también puede deducir el tipo a partir del valor:

```ts
const ciudad = "Tucumán"; // TypeScript deduce que es string
```

Usá `const` por defecto y `let` cuando necesites cambiar el valor.

## 2. Operadores

Los operadores comparan valores y producen resultados. Una comparación normalmente devuelve un `boolean` (`true` o `false`).

```ts
const edad = 20;

const esMayor = edad >= 18; // true
const tieneEdadExacta = edad === 20; // true
const noTieneDiez = edad !== 10; // true
```

Algunos operadores de comparación comunes:

| Operador    | Significado                  |
| ----------- | ---------------------------- |
| `===`       | Igualdad estricta            |
| `!==`       | Desigualdad estricta         |
| `>` y `<`   | Mayor que y menor que        |
| `>=` y `<=` | Mayor o igual, menor o igual |

Para combinar condiciones se usan operadores lógicos:

- `&&`: ambas condiciones deben ser verdaderas.
- `||`: alcanza con que una condición sea verdadera.
- `!`: invierte un valor booleano.

```ts
const tieneEntrada = true;
const esMayor = edad >= 18;

const puedeIngresar = esMayor && tieneEntrada;
```

El operador ternario sirve para elegir entre dos valores según una condición:

```ts
const mensaje = edad >= 18 ? "Puede ingresar" : "No puede ingresar";
```

Se lee: “si la condición es verdadera, usar el valor antes de `:`; si es falsa, usar el de después”.

## 3. Objetos, interfaces y enumeraciones

Un objeto agrupa información relacionada mediante propiedades:

```ts
const persona = {
  nombre: "Ana",
  edad: 20,
  vive: true,
};

console.log(persona.nombre);
console.log(persona["edad"]);
```

También puede contener otro objeto:

```ts
const estudiante = {
  nombre: "Luis",
  domicilio: {
    calle: "San Martín",
    numero: 123,
  },
};
```

Una `interface` define la forma que debe tener un objeto. Es útil para dejar claros los nombres y tipos de sus propiedades:

```ts
interface Persona {
  nombre: string;
  edad: number;
  tieneAcompanante: boolean;
}

const visitante: Persona = {
  nombre: "Micaela",
  edad: 16,
  tieneAcompanante: true,
};
```

Una `enum` representa un conjunto de opciones conocidas:

```ts
enum Nacionalidad {
  AR = "AR",
  BR = "BR",
  CL = "CL",
}

interface Persona {
  nombre: string;
  nacionalidad: Nacionalidad;
}

const persona: Persona = {
  nombre: "Ana",
  nacionalidad: Nacionalidad.AR,
};
```

Así evitamos escribir valores arbitrarios para una opción que solo admite alternativas definidas.

## 4. Condicionales

`if`, `else if` y `else` permiten ejecutar distintas instrucciones según una condición:

```ts
const edad = 16;
const tieneAcompanante = true;

if (edad >= 18) {
  console.log("Puede ingresar");
} else if (edad >= 12 && tieneAcompanante) {
  console.log("Puede ingresar con permiso especial");
} else {
  console.log("No puede ingresar");
}
```

Las condiciones se revisan en orden. Cuando una resulta verdadera, se ejecuta su bloque y se omiten los siguientes.

`switch` es otra opción cuando se compara un mismo valor con varias alternativas:

```ts
const dia = "martes";

switch (dia) {
  case "lunes":
    console.log("Comienza la semana");
    break;
  case "martes":
    console.log("Segundo día");
    break;
  default:
    console.log("Otro día");
}
```

`break` evita que la ejecución continúe en el caso siguiente. `default` se ejecuta si no coincide ningún caso.

## 5. Arreglos y ciclos

Un arreglo guarda varios valores. El tipo se escribe como `tipo[]`:

```ts
const edades: number[] = [18, 20, 25];
const nombres: string[] = ["Ana", "Luis"];
```

Las posiciones empiezan en cero:

```ts
console.log(nombres[0]); // "Ana"
console.log(edades.length); // cantidad de elementos
```

Un ciclo `for` permite repetir instrucciones. Es común usar el índice `i` para recorrer un arreglo:

```ts
const puntajes: number[] = [7, 4, 9];

for (let i = 0; i < puntajes.length; i++) {
  console.log(puntajes[i]);
}
```

La variable `i` empieza en cero, aumenta en cada vuelta y el ciclo termina cuando alcanza el largo del arreglo.

Para contar elementos que cumplen una condición, se puede usar un contador:

```ts
const numeros: number[] = [1, 12, 8, 20];
let contador = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] <= 10) {
    contador++;
  }
}

console.log(contador); // 2
```

`push` agrega un elemento al final:

```ts
const colores: string[] = ["azul", "rojo"];
colores.push("verde");
```

## 6. Funciones

Una función agrupa instrucciones reutilizables. Puede recibir parámetros y devolver un resultado:

```ts
function sumarCinco(numero: number): number {
  return numero + 5;
}

const resultado = sumarCinco(10);
console.log(resultado); // 15
```

En este ejemplo, `numero: number` indica el tipo del parámetro y `: number` indica el tipo del valor que devuelve la función.

Una función también puede recibir arreglos:

```ts
function filtrarMayores(numeros: number[], limite: number): number[] {
  const resultado: number[] = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      resultado.push(numeros[i]);
    }
  }

  return resultado;
}

console.log(filtrarMayores([10, 20, 30], 15)); // [20, 30]
```

Si una función no necesita devolver un valor, puede mostrarlo directamente o declarar el retorno como `void`:

```ts
function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}`);
}
```

## Para practicar

1. Declarar una variable con tu nombre y otra con tu edad.
2. Crear una condición que indique si una persona es mayor de edad.
3. Definir una interfaz `Producto` con `nombre`, `precio` y `disponible`.
4. Recorrer un arreglo de números y contar cuántos son mayores que 10.
5. Crear una función que reciba un arreglo de nombres y devuelva cuántos contiene.
