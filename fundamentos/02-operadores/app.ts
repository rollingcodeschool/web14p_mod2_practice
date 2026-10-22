// // // // = Operador de asignacion
const nombre = 'Franco';
// === Estrictamente igual
// !== estrictamente distinto
// > <  mayor o menor
// >= <= mayor o igual | menor o igual
// si o no =>  true o false => boolean
const edadFranco = 32;
const edadErick = 32;
const erickEsMayorQueFranco = edadErick > edadFranco;
console.log(erickEsMayorQueFranco);
const francoEsMayorDeEdad = edadFranco >= 18;
console.log(francoEsMayorDeEdad);
const edadErickEsIgualAEdadFranco = edadFranco !== edadErick;
console.log(edadErickEsIgualAEdadFranco);
// // // Operador ternario
// // // condicion ? DEVUELVE ESTO SI EN TRUE : ESTO SI ES FALSE
// const edadFranco = 19;
const edadMinimaIngreso = 25;
const decision = edadFranco >= edadMinimaIngreso ? 'PASAS' : 'NO PASAS';
console.log(decision)
// // // // = Operador de asignacion
// // // // const nombre = 'Franco';
// // // // === Estrictamente igual
// // // // !== estrictamente distinto
// // // // > <  mayor o menor
// // // // >= <= mayor o igual | menor o igual
const userIngresado = 'franco';
const passwordIngresado = 'Franco123!';

const passwordDB = 'Franco123!';
const userDB = 'franco';

const userEsCorrecto = userIngresado === userDB;
console.log(userEsCorrecto);
const passEsCorrecto = passwordIngresado === passwordDB;
console.log(passEsCorrecto);
const ingresa = userEsCorrecto || passEsCorrecto ? 'Ingresa' : 'No ingresa';
console.log(ingresa);
// // SER MAYOR DE 25
// // SER MAYOR DE 18 Y TENER EL PASE VIP
// // Operadores logicos
// // && AND
// // || OR
// // ! NOT

const miEdad = 16;
const tengoPaseVip = true;

const edadMinLibre = 25;
const edadConPase = 18;
const paseLibre = miEdad >= edadMinLibre;
const paseConVip = miEdad >= edadConPase && tengoPaseVip === true;
const resultado = paseLibre || paseConVip ? 'INGRESA' : 'NO INGRESA';
console.log(resultado);
console.log(paseConVip)
console.log(paseLibre)

// Para salir del pais tengo que ser mayor de 18 años;
// o puedo ser mayor de 12 pero estar acompañado por uno de mis padres
const miEdad = 10;
const estoyAcom = false;

const edadMinSalirDelPais = 18;
const edadMinSalirConPadres = 12;
const salirSinDramas = miEdad >= edadMinSalirDelPais;
const salirConPermisos = miEdad >= edadMinSalirConPadres && estoyAcom;

const resultado = salirSinDramas || salirConPermisos ? 'SALIS' : 'NO SALIS';
console.log(resultado);
