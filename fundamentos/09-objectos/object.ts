//Objetos
interface Producto {
  id: number;
  name: string;
  price: number;
  active: boolean;
}

const producto: Producto = {
  id: 1,
  name: "Smartphone Motorola Edge 30",
  price: 850000,
  active: true,
};

//Accedo y modifico propiedades
console.log(producto.name);
console.log(producto.price);

producto.price = 900000;
producto.active = false;

console.log(producto);

//agregar una nueva propiedad
producto.category = "Smartphone"; //❌ no en Typescript pero en javascript ✅

interface Usuario {
  id: number;
  username: string;
  activo: boolean;
  email?: string;
  rol?: "Amin" | "User" | "Guest";
}

const user01: Usuario = {
  id: 1,
  username: "loquito42",
  activo: true,
  rol: "User",
};

user01.email = "loquitowin@gmail.com";

//Eliminar una propiedad
delete producto.name; //en javascript me borra pero en typescript no

//objeto anidado

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
  lat: 56,
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
console.log(user.address.geo.lat);
console.log(user.address.geo.lng);

//desestructuracion de objetos

console.log(user.lat);

const {
  geo: { lat: latitud, lng: longitud },
} = user.address;

const longi = user.address.geo.lng;

console.log(latitud);
console.log(longi);

//spread operator
const newProducto = { ...producto, stock: 34 };

console.log(newProducto);

const newUser01 = { ...user01, rol: "admin" };

console.log(newUser01);

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
    titulo: "Desarrollo con React y TypeScript",
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

console.log(cursos[0].titulo);

//Buscar un curso
function buscarCurso(id: number): void {
  const cursoEncontrado = cursos.find((curso) => curso.id === id);
  if (cursoEncontrado) {
    const { titulo, precio, horasTotales } = cursoEncontrado;

    // console.log(cursoEncontrado.precio)

    console.log(
      `Título: ${titulo} | Horas: ${horasTotales} | Precio: ${precio}`,
    );
  }
}

function buscarCursoPorTitulo(termino: string): void {
  const cursosEncontrados = cursos.filter(
    (curso) =>
      curso.titulo.toLowerCase().includes(termino.toLowerCase()) &&
      curso.disponible === true,
  );
  if (cursosEncontrados.length === 0) {
    console.error("No se encontraron resultados");
  } else {
    console.log(cursosEncontrados);
  }
}

buscarCursoPorTitulo("cosita");

//Crear un curso

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

crearCurso(nuevoCurso);
//Filtrar por datos de los cursos

function cursosActivos(): void {
  const cursosDisponibles = cursos.filter((curso) => curso.disponible === true);
  console.log(cursosDisponibles);
}
cursosActivos();
