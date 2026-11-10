# Repaso de nivelación (parte 1)

## if else

Un comerciante hace descuentos a sus clientes de la siguiente forma:

- Si ha comprado menos de 100 dolares no hay descuento
- Si la compra está entre 100 y 300 dolares le descuenta un 5%
- Si la compra está por encima de 300 hasta 500 dolares le descuenta un 10%
- Si la compra supera los 500 dolares le descuenta un 15%

```javascript
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
```

## Switch

En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.

```javascript
alert("🧐Bienvenid@, te voy a sugerir la bebida que acompañará tu menú.");
let opcion = prompt(
  "🧐 Qué menú deseas hoy?\n1. 🥩Carne | 2. 🐟Pescado | 3. 🥬Verdura",
);

switch (opcion) {
  case "1":
    alert(
      "🧐 Excelente opción! podes acompañar el menú de carne con un buen vino tinto🍷",
    );
    break;
  case "2":
    alert(
      "🧐 Buena opción, te sugiero acompañar tu menú de pescado con un espumante vino blanco 🍾",
    );
    break;
  case "3":
    alert(
      "🧐 Por lo visto te estás cuidando, así que te sugiero que acompañes tu menú de verduras con un vaso de agua purificada de los manantiales🚰",
    );
    break;
  default:
    alert(
      "🧐Recordá que debés elegir entre las siguientes opciones:\n1. 🥩Carne | 2. 🐟Pescado | 3. 🥬Verdura",
    );
    break;
}

alert("🧐Gracias por usar mis servicios, nos vemos pronto👋");
```

## For

Crea un programa que ingrese la tabla a calcular.

```javascript
let tabla = prompt("🤖 Ingresá el número de la tabla a calcular pibe");
//falsy
if (!tabla) {
  console.log("Debe ingresar un valor numerico");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
}
```

### contar la cantidad de vocales en una frase

```
ALGORITMO
---------
- Datos de entrada: la frase, lista de vocales
- proceso: Recorrer cada caracter de la frase, compararlo con la lista de vocales y si coincide con una vocal guradar 1 valor en el acumulador.
- Salida: mensaje que diga "la cantidad de vocales en la frase es:..."
```

```javascript
let frase = "Que tal tu día, cómo lo pasaste?";
let vocales = "aeiouáéíóú";
let contadorVocales = 0;

for (let i = 0; i < frase.length; i++) {
  for (let indexVocal = 0; indexVocal < vocales.length; indexVocal++) {
    if (frase[i] === vocales[indexVocal]) {
      contadorVocales++;
    }
  }
}
```

## while

### Juego trivia

```
ALGORITMO
- Dato de entrada: respuesta correcta, respuesta del usuario, intentos
- Proceso: comparar la respuesta del usuario con la correcta, si es correcta mostrar mensaje de GANASTE y si es incorrecta volver a intentar y restar 1 intento. Cuando se acaban los intentos el usuario pierde.
- Salida: Mensaje (Ganaste o PERDISTE)
```

```JAVASCRIPT
let intentos = 3;
let respuestaCorrecta = "HELSINKI";
let input = "";
let win = false;

while (intentos > 0) {
  input = prompt(
    "🤔Cuál es la capital de Finlandia? | tenés " + intentos + " intentos",
  );

  if (respuestaCorrecta === input.trim().toUpperCase()) {
    win = true;
    intentos = 0;
  } else {
    intentos--;
  }
}

if (win) {
  alert("🎉GANASTE!!");
} else {
  alert("😔PERDISTE, LOSER!, te quedaste con " + intentos + " intentos");
}
```

## Funciones

### Funciones declarativas

```javascript
function tablaDelDos() {
  for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
  }
}
```

### Funciones anónimas

```javascript
const capitalizarPalabra = function () {
  let palabra = prompt("Ingresa una palabra");
  console.log(
    `La palabra capitalizada es: ${palabra.trim().at(0).toUpperCase() + palabra.trim().substring(1)}`,
  );
};
```

_Nota_:

- Primera diferencia: las funciones anónimas deben declararse antes de ejecutarse, las declarativas podemos llamarlas en cualquier momento.
- Segunda: las funciones declarativas pueden ser reasignadas con un nuevo valor, las anónimas no porque son constantes

### return

```javascript
function calcularDescuento(valor, descuento = 5) {
  let valorDescuento = (valor * descuento) / 100;
  let valorAbonar = valor - valorDescuento;
  return Number(valorAbonar.toFixed(2));

  console.log('"first"'); //❌no se ejecuta despues del return
}
```

### Función de flecha

```javascript
const calcularDescuentoArrow = (valor, descuento = 5) =>
  Number(valor - (valor * descuento) / 100);
```
