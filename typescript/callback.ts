const productosTecnologicos:string[] = [
  "Smartphone MarcaA Pro 256GB",
  "Smartphone MarcaB Lite 128GB",
  "Smartphone MarcaC Ultra 512GB",
  "Laptop MarcaA Air 16GB RAM",
  "Laptop MarcaB Pro 32GB RAM",
  "Laptop MarcaC Office 8GB RAM",
  "Auriculares Inalámbricos Sony NC",
  "Auriculares Inalámbricos Bose Comfort",
  "Auriculares Inalámbricos Apple Pro",
  "Smartwatch Deportivo Garmin GPS",
  "Smartwatch Casual Samsung Fit",
  "Smartwatch Premium Apple Watch",
  "Monitor Gaming 27 pulgadas 144Hz",
  "Monitor Curvo 34 pulgadas Ultrawide",
  "Monitor Oficina 24 pulgadas 4K",
  "Tablet GamaAlta 12 pulgadas",
  "Tablet Media 10 pulgadas",
  "Tablet Económica 8 pulgadas",
  "Teclado Mecánico RGB BlueSwitch",
  "Teclado Mecánico Compacto RedSwitch",
  "Teclado Membrana Ergonómico",
  "Mouse Inalámbrico Precisión Pro",
  "Mouse Ergonómico Vertical",
  "Mouse Gaming Sensor Óptico",
  "Cámara Mirrorless 4K Profesional",
  "Cámara Compacta Vlogging",
  "Cámara Deportiva Action Cam",
  "Consola Videoconsola NextGen A",
  "Consola Videoconsola Portátil B",
  "Consola Videoconsola Retro Edition",
];

//Callbacks
//función que se envía como argumento de otra función

// funcioncita(function(){})

//find()
console.log(
  productosTecnologicos.find(
    (item) => item === "Consola Videoconsola NextGen A",
  ),
);
console.log(productosTecnologicos.find((item) => item.includes("Cámara")));

const numeritos:number[] = [100, 34, 555, 1022, 45000, 2333];
console.log(numeritos.find((num) => num > 1000));

//findIndex()
const indiceCamara:number = productosTecnologicos.findIndex((item) =>
  item.includes("Cámara"),
);
console.log(indiceCamara);

console.log(numeritos.findIndex((num) => num < 40)); //devuelve -1 si no encuentra

//Filter()
//Devuelve un nuevo array con el resultado. Si no encuentra nada devuelve un []
const monitores:string[] = productosTecnologicos.filter((prod) =>
  prod.includes("Monitor"),
);


const notebooks:string[] = productosTecnologicos.filter((prod) =>
  prod.toLowerCase().includes("laptop"),
);


//Buscador interactivo
const termino:string = "AURICULAR";
if (termino) {
  const resultado:string[] = productosTecnologicos.filter((prod) =>
    prod.toLowerCase().includes(termino.toLowerCase()),
  );
  console.log(resultado);
} else {
  console.log("No ingresó ninguna búsqueda");
}

//Recorrer array

//forEach()
productosTecnologicos.forEach((producto, index) =>
  console.log(`${index + 1} - ${producto}\n`),
);

//map()
const productosIndice:string[] = productosTecnologicos.map((prod, index) => {
  // let code =  window.crypto.randomUUID()
  let code = new Date().getTime() * (index + 1);
  return `${code} - ${prod}`;
});


//reduce()
const carritoDeCompras:number[] = [420, 500, 900, 1200];
const totalCarrito:number = carritoDeCompras.reduce(
  (accum, valor) => accum + valor,
  0,
);


const promedio:number =
  carritoDeCompras.reduce((accum, valor) => accum + valor, 0) /
  carritoDeCompras.length;


//string
const palabras:string[] = ["Hola", "Curso", "Javascript", "2026"];
const mensaje:string = palabras
  .reduce((accum, valor) => accum + " " + valor, "")
  .trim();


//sort()
//ordenar a-z
console.log(productosTecnologicos.sort());
//ordenar z-a
console.log(productosTecnologicos.sort().reverse());

//números
console.log(numeritos.sort()); //❌no ordena de menor a mayor
//menor a mayor
console.log(numeritos.sort((a, b) => a - b));
//mayor a menor
console.log(numeritos.sort((a, b) => b - a));

//INVESTIGACIÓN
/*
- some()
- every()
*/
