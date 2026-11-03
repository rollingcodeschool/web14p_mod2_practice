const productosTecnologicos = [
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

const gadgets = ["Luz led", "Almohadilla de auricular", "Pad de mouse"];

//callbacks
//function(()=>{    })

//find()

console.log(
  productosTecnologicos.find(
    (prod) => prod === "Monitor Curvo 34 pulgadas Ultrawide",
  ),
);

const numeritos = [23, 2000, 560, 1024, 35000, 98];

console.log(numeritos.find((num) => num > 1000));

//buscador flexible
console.log(productosTecnologicos.find((prod) => prod.includes("Ina")));

//findIndex()

console.log(
  productosTecnologicos.findIndex(
    (prod) => prod.toLowerCase() === "smartwatch premium apple watch",
  ),
);

//Filter()
//Devuelve un nuevo array
const camaras = productosTecnologicos.filter((prod) => prod.includes("Cámara"));

// const buscador = prompt("Ingresá el término de búsqueda");

// const resultadoBusqueda = productosTecnologicos.filter((producto) =>
//   producto.toLowerCase().includes(buscador.toLowerCase()),
// );

//función
const buscadorProducto = (producto) => {
  const resultadoBusqueda = productosTecnologicos.filter((item) =>
    item.toLowerCase().includes(producto.toLowerCase()),
  );

  if (resultadoBusqueda.length > 0) {
    return resultadoBusqueda;
  } else {
    console.warn("No se encontraron productos para esta búsqueda");
  }
};

//forEach()
productosTecnologicos.forEach((item, index) =>
  console.log(`${index + 1} - ${item}`),
);

//map()
const codigoProductos = productosTecnologicos.map((prod, index) => {
  let code = new Date().getTime() * (index + 1);
  return `${code} - ${prod}`;
});

const numerosDobles = numeritos.map((num) => num * 2);

//reduce
let carritoCompras = [420, 500, 1500, 3000, 500];

console.log(carritoCompras.reduce((accum, valor) => accum + valor, 0));

const promedio =
  carritoCompras.reduce((accum, valor) => accum + valor, 0) /
  carritoCompras.length;

//sort()
//ordenar a-z
console.log(productosTecnologicos.sort());
console.log(productosTecnologicos.sort().reverse());

console.log(numeritos.sort((a, b) => b - a));
//[23, 2000, 560, 1024, 35000, 98];

//concatenar

const todosProductos = productosTecnologicos.concat(gadgets, numeritos);
