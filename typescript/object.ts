//Objetos en Typescript
//definimos primero la 'forma' (shape) del objeto utilizando interfaces o tipos
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
}

//creación de un objeto
const producto: Producto = {
  id: 1,
  nombre: "Smartphone Motorola Edge 30",
  precio: 850000,
  disponible: true,
};

//acceder y modificar propiedades
//📖leer valores
console.log(producto.nombre);
console.log(producto["nombre"]);

//✏️modificar valores
console.log((producto.precio = 900000));
console.log((producto.disponible = false));

//Agregar y borrar propiedades
/*
En JavaScript puro podés agregar o eliminar propiedades en cualquier momento. En TypeScript no se pueden agregar propiedades no declaradas en la interface; si una propiedad puede no estar, se define como opcional usando el símbolo ?.
*/

interface Usuario {
  id: number;
  username: string;
  activo: boolean;
  email?: string;
}

const user01: Usuario = {
  id: 23,
  username: "loquito42",
  activo: true,
};

console.log(user01);

//Agregar email
user01.email = "loquitowin@gmail.com"; //✅
//Agregar otra propiedad en JS
//user01.rol="admin"

//eliminar propiedad en JS si | TS no
//delete user01.activo ❌

//Objeto con propiedades anidadas
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

console.log(user.address.geo.lat);
console.log(user.address.geo.lng);

//Desestructuración de objetos
const {
  address: {
    geo: { lat, lng },
  },
} = user;
const { lat: latitud, lng: longitud } = user.address.geo;
console.log(lat, lng);
console.log(latitud, longitud);

//Operador spread
/*El operador spread (...) permite copiar las propiedades de un objeto dentro de otro o fusionar estructuras sin mutar el objeto original. */
const productoConDescuento = { ...producto, descuento: 15, precio: 122500 };
console.log(productoConDescuento);

//Métodos dentro de objetos
interface Carrito {
  total: number;
  agregarEnvio: (costo: number) => void;
}

const carrito: Carrito = {
  total: 5000,
  agregarEnvio(costo) {
    this.total += costo;
  },
};

carrito.agregarEnvio(800);
console.log(carrito.total);

//Array de objetos
interface Curso {
  id?: number;
  titulo: string;
  profesor: string;
  horasTotales: number;
  precio: number;
  disponible: boolean;
  nivel: "Principiante" | "Intermedio" | "Avanzado";
  descripcion: string;
}

const cursos: Curso[] = [
  {
    id: 1,
    titulo: "Desarrollo Web con HTML y CSS",
    profesor: "María González",
    horasTotales: 40,
    precio: 85000,
    disponible: true,
    nivel: "Principiante",
    descripcion:
      "Aprendé a crear páginas web utilizando HTML5 y CSS3 desde cero.",
  },
  {
    id: 2,
    titulo: "JavaScript desde Cero",
    profesor: "Juan Pérez",
    horasTotales: 60,
    precio: 120000,
    disponible: true,
    nivel: "Principiante",
    descripcion:
      "Aprendé los fundamentos de JavaScript y desarrollá tus primeras aplicaciones interactivas.",
  },
  {
    id: 3,
    titulo: "React y TypeScript",
    profesor: "Lucía Fernández",
    horasTotales: 80,
    precio: 180000,
    disponible: true,
    nivel: "Intermedio",
    descripcion:
      "Construí interfaces modernas utilizando React, componentes, hooks y TypeScript.",
  },
  {
    id: 4,
    titulo: "Backend con Node.js y Express",
    profesor: "Carlos Rodríguez",
    horasTotales: 70,
    precio: 165000,
    disponible: false,
    nivel: "Intermedio",
    descripcion:
      "Aprendé a desarrollar servidores, APIs REST y conectar aplicaciones con bases de datos.",
  },
  {
    id: 5,
    titulo: "Python y Ciencia de Datos",
    profesor: "Sofía Martínez",
    horasTotales: 90,
    precio: 210000,
    disponible: true,
    nivel: "Avanzado",
    descripcion:
      "Explorá el análisis de datos utilizando Python, Pandas, Matplotlib y herramientas de visualización.",
  },
  {
    id: 6,
    titulo: "Git y GitHub para Desarrolladores",
    profesor: "Diego López",
    horasTotales: 20,
    precio: 45000,
    disponible: false,
    nivel: "Principiante",
    descripcion:
      "Aprendé a controlar versiones, administrar repositorios y trabajar en equipo con Git y GitHub.",
  },
];

//obtener un curso y mostrar el título, horas, precio
function buscarCurso(id: number) {
  //Buscar y Desestructurar: Utilizá el método .find() para obtener el curso con id: 1. Aplicá desestructuración para extraer su nombre y email e imprimilos por consola.
  const cursoEncontrado = cursos.find((curso) => curso.id === id);

  if (cursoEncontrado) {
    const { titulo, horasTotales, precio } = cursoEncontrado;
    console.log(
      `Titulo: ${titulo} | Horas: ${horasTotales} | Costo: $${precio}`,
    );
  }
}

//Crear Registro con Spread Operator: Creá una función crearCurso que reciba los datos de un curso (sin id) y devuelva un nuevo objeto curso usando el Spread Operator (...) para asignarle un id generado dinámicamente (ej. cursos.length + 1).

function crearCurso(datos: Curso): void {
  const id = cursos.length + 1;
  const newCurso = { id, ...datos };
  cursos.push(newCurso);
  console.log(cursos);
}

const nuevoCurso: Curso = {
  titulo: "Desarrollo de Aplicaciones con Inteligencia Artificial",
  profesor: "Martín Ramírez",
  horasTotales: 50,
  precio: 135000,
  disponible: true,
  nivel: "Intermedio",
  descripcion:
    "Aprendé a integrar herramientas y modelos de inteligencia artificial para crear aplicaciones inteligentes.",
};

//Filtrar Activos: Utilizá el método .filter() para obtener una nueva lista que contenga únicamente los cursos con disponible: true

const filtrarDisponibles = (): void => {
  const cursosDisponibles: Curso[] = cursos.filter(
    (curso) => curso.disponible === true,
  );
  console.log(cursosDisponibles);
};
