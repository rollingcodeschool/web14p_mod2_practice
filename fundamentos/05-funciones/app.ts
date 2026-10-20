// console.log(`Hola soy ${nombre}`);
// console.log(`Hola soy ${nombre2}`);
// console.log(`Hola soy ${nombre3}`);
// console.log(`Hola soy ${nombre4}`);

// funciones -> es bloque de codigo que realiza una accion aislada,
// se puede llamar en varios lugares, o sea se puede reutilizar

// function NOMBRE(ARGUMENTO1, ARGUMENTO2, ARG....) {
//     accion a realizar
// }
// const pepe: string = "Pepe";
// const edadPepe: number = 25;
// function saludar(nombre: string) {
//   console.log(nombre);
//   console.log(`Hola soy ${nombre}`);
// }

// function saludarConEdad(name: string, age: number) {
//   console.log(`Hola soy ${name} y tengo ${age} años`);
// }

// // console.log(nombre)
// saludarConEdad("Martin", 40);
// saludar(pepe);
// Crear una funcion que reciba un numero y le sume 5; mostrar por console.log
// const num = 200;
// function sumarCinco(numero: number): string {
//     const resultado = numero + 5;
//     return `El resultado es ${resultado}`;
// }
// console.log(sumarCinco(num));

const arrNum: number[] = [10, 20, 30, 40, 100];
//push -> agrega un elemento al final de array.
// arrNum.push(50);
// console.log(arrNum);
// crear una funcion que filtre un array de numero mayores a un numero dado
// f([10, 20, 30],10); => [20, 30]
// f([10, 20, 30],20); => [30]

function filtrarMayorQue(arr: number[], numMayorQue: number): number[] {
  let arrFinal = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    const numero = arr[i];
    console.log(numero);
    if (numero > numMayorQue) {
      console.log(numero);
      arrFinal.push(numero);
    }
  }
  return arrFinal;
}
console.log(filtrarMayorQue(arrNum, 20));
