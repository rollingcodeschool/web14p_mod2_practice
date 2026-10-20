// Tipo de datos primitivos
// Booleano
// String
// Number

// Complejos
// objeto => {}, tiene pares key:value, tiene propiedades
// y metodos
// const franco = {
//   name: "Franco",
//   lastname: "Diaz",
//   age: 31,
//   isAlive: true,
//   address: {
//     street: "General paz",
//     streetNumber: 576,
//   },
// };
// const edad = 30;
// console.log(edad);
// console.log(franco["age"])
// console.log(franco.age)
// Nombre, apellido, nacionalidad, edad, si tiene padres
// type Nationality = "AR" | "CL" | "BR";
enum Nationality {
  AR = "AR",
  BR = "BR",
  CL = "CL",
}
// o ser mayor de 12, estar acompañado por tu padres y si o si ser AR
interface Persona {
  name: string;
  lastname: string;
  nacionality: Nationality;
  age: number;
  hasParents: boolean;
}

// if-else
// if (CONDICION) {
//     SE EJECUTA ESTE BLOQUE SI CONDICION === TRUE
// } else {
//     SI CONDICION === FALSE, SE EJECUTA ESTA PARTE
// }

const franco: Persona = {
  age: 12,
  hasParents: true,
  lastname: "Diaz",
  nacionality: Nationality.AR,
  name: "Franco",
};
// Para salir del pais tenes que tener >= 18, o podes salir con 12 pero
// estar acompañado de tus padres,  SALIS CON PERMISOS ESPECIALES.
if (franco.age >= 18) {
  console.log("SALIS DEL PAIS");
} else if (franco.age >= 12 && franco.hasParents) {
  console.log("SALIS CON PERMISOS ESPECIALES");
} else {
  console.log("NO SALIS DEL PAIS");
}
