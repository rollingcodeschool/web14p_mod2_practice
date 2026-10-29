/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:

- Si ha comprado menos de 100 dolares no hay descuento
- Si la compra está entre 100 y 300 dolares le descuenta un 5%
- Si la compra está por encima de 300 hasta 500 dolares le descuenta un 10%
- Si la compra supera los 500 dolares le descuenta un 15%

*/

let valorCompra: number = 900;
let descuento: number = 0;
let totalPagar: number = 0;

if (valorCompra > 500) {
  descuento = valorCompra * 0.15;
} else if (valorCompra > 300) {
  descuento = valorCompra * 0.1;
} else {
  descuento = valorCompra * 0.05;
}

totalPagar = valorCompra - descuento;
console.log(`El valor de la compra es de $${valorCompra}`);

/*
Switch

En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.
*/

console.log("🧐Bienvenid@, te voy a sugerir la bebida que acompañará tu menú.");
console.log(
  "🧐 Qué menú deseas hoy?\n1. 🥩Carne | 2. 🐟Pescado | 3. 🥬Verdura",
);
let opcion: number = 1;

switch (opcion) {
  case 1:
    console.log(
      "🧐 Excelente opción! podes acompañar el menú de carne con un buen vino tinto🍷",
    );
    break;
  case 2:
    console.log(
      "🧐 Buena opción, te sugiero acompañar tu menú de pescado con un espumante vino blanco 🍾",
    );
    break;
  case 3:
    console.log(
      "🧐 Por lo visto te estás cuidando, así que te sugiero que acompañes tu menú de verduras con un vaso de agua purificada de los manantiales🚰",
    );
    break;
  default:
    console.log(
      "🧐Recordá que debés elegir entre las siguientes opciones:\n1. 🥩Carne | 2. 🐟Pescado | 3. 🥬Verdura",
    );
    break;
}

console.log("🧐Gracias por usar mis servicios, nos vemos pronto👋");

//Crea un programa que ingrese la tabla a calcular.

const tabla: number = 2;

for (let i = 1; i <= 10; i++) {
  console.log(`${tabla} x ${i} = ${tabla * i}`);
}

//contar la cantidad de vocales en una frase

/*

ALGORITMO
---------
- Datos de entrada: la frase, lista de vocales
- proceso: Recorrer cada caracter de la frase, compararlo con la lista de vocales y si coincide con una vocal guradar 1 valor en el acumulador.
- Salida: mensaje que diga "la cantidad de vocales en la frase es:..."
*/

const frase: string = "Hoy es un buen día para dormir";
const listaVocales: string = "aáeéiíoóuú";
const arrayVocales: string[] = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "á",
  "é",
  "í",
  "ó",
  "ú",
];
let contadorVocales: number = 0;

for (let i: number = 0; i < frase.length; i++) {
  if (arrayVocales.includes(frase[i])) {
    contadorVocales++;
  }
}

console.log("La frase contiene " + contadorVocales + " vocales.");

//usando array

/* 
 while
Juego trivia

ALGORITMO
- Dato de entrada: respuesta correcta, respuesta del usuario, intentos
- Proceso: comparar la respuesta del usuario con la correcta, si es correcta mostrar mensaje de GANASTE y si es incorrecta volver a intentar y restar 1 intento. Cuando se acaban los intentos el usuario pierde.
- Salida: Mensaje (Ganaste o PERDISTE)
*/

let intentos: number = 3;
let respuestaCorrecta: string = "HELSINKI";
let input: string = "";
let win: boolean = false;

while (intentos > 0) {
  if (respuestaCorrecta === input.trim().toUpperCase()) {
    win = true;
    intentos = 0;
  } else {
    intentos--;
  }
}

if (win) {
  console.log("🎉GANASTE!!");
} else {
  console.error(
    "😔PERDISTE, LOSER!, te quedaste con " + intentos + " intentos",
  );
}

//Funciones

//Declarativas---------------------------------------
function calcularTabla(tabla: number): void {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
}

calcularTabla(3);

//anónimas-------------------------------------------
const capitalizarPalabra = function (palabra: string): string {
  const primeraLetra: string = palabra.trim()[0].toUpperCase();
  const resto: string = palabra.trim().substring(1);

  return primeraLetra + resto;
};

console.log(capitalizarPalabra("    bonito   "));

//Funciones de flecha------------------------------------
// const calcularDescuento=(valor:number, descuento:number = 5):number=> {
//   let totalPagar:number = valor-(valor * descuento) / 100;

//   return totalPagar;

//   console.log('"first"'); //❌no se ejecuta despues del return
// }

const calcularDescuento = (valor: number, descuento: number = 5): number =>
  Number((valor - (valor * descuento) / 100).toFixed(2));

console.log(calcularDescuento(50000.786));
