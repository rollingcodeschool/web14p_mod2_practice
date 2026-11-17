const menuDOM = [
  {
    path: "/",
    text: "Inicio",
  },
  {
    path: "https://web.rollingcodeschool.com",
    text: "RollingCode",
  },
  {
    path: "https://Google.com",
    text: "Buscador",
  },
  {
    path: "#",
    text: "Perfil",
  },
];

const metodosDOM = [
  {
    categoria: "Búsqueda",
    metodo: "querySelector()",
    sintaxis: 'document.querySelector(".clase")',
    descripcion:
      "Devuelve el primer elemento que coincide con un selector CSS.",
  },
  {
    categoria: "Búsqueda",
    metodo: "querySelectorAll()",
    sintaxis: 'document.querySelectorAll("p")',
    descripcion:
      "Devuelve una NodeList estática con todas las coincidencias CSS.",
  },
  {
    categoria: "Búsqueda",
    metodo: "getElementById()",
    sintaxis: 'document.getElementById("mi-id")',
    descripcion: "Busca un elemento único por su atributo 'id'.",
  },
  {
    categoria: "Contenido",
    metodo: "textContent",
    sintaxis: 'elemento.textContent = "Texto"',
    descripcion:
      "Asigna o lee texto plano de forma segura sin interpretar HTML.",
  },
  {
    categoria: "Contenido",
    metodo: "innerHTML",
    sintaxis: "elemento.innerHTML = '&ltb&gt;Texto&lt/b&gt;'",
    descripcion: "Asigna o lee marcado HTML interno.",
  },
  {
    categoria: "Estilos",
    metodo: "style",
    sintaxis: 'elemento.style.color = "blue"',
    descripcion: "Manipula propiedades CSS individuales en notación camelCase.",
  },
  {
    categoria: "Estructura",
    metodo: "createElement()",
    sintaxis: 'document.createElement("div")',
    descripcion: "Instancia un nuevo nodo de elemento HTML en memoria.",
  },
  {
    categoria: "Estructura",
    metodo: "appendChild()",
    sintaxis: "padre.appendChild(nuevoHijo)",
    descripcion: "Inserta un nodo hijo al final de la lista de un contenedor.",
  },
  {
    categoria: "Estructura",
    metodo: "replaceChild()",
    sintaxis: "padre.replaceChild(nuevoNodo, nodoViejo)",
    descripcion:
      "Reemplaza un nodo hijo existente por uno nuevo dentro del padre.",
  },
  {
    categoria: "Estructura",
    metodo: "remove()",
    sintaxis: "elemento.remove()",
    descripcion: "Elimina el nodo directamente del documento DOM.",
  },
  {
    categoria: "Eventos",
    metodo: "addEventListener()",
    sintaxis: 'elemento.addEventListener("click", fn)',
    descripcion: "Registra una función para reaccionar a un evento específico.",
  },
  {
    categoria: "Eventos",
    metodo: "preventDefault()",
    sintaxis: "evento.preventDefault()",
    descripcion: "Cancela la acción predeterminada asociada al evento.",
  },
];

const btnMode = document.getElementById("btn-mode");

//Crear items del menú
const menuContainer = document.querySelector(".navbar-nav");

menuDOM.map((enlace) => {
  const item = document.createElement("li");
  //   item.classList.add("nav-item")
  item.className = "nav-item me-2";
  //   item.textContent = enlace.text;
  const ancla = `<a class="nav-link" target="_blank" href=${enlace.path}>${enlace.text}</a>`;

  item.innerHTML = ancla;
  // item.setHTML(ancla);
  //viejo
  //   menuContainer.appendChild(item);
  //nuevo
  //   menuContainer.append(item);

  menuContainer.insertBefore(item, btnMode); //agregar el nodo antes de otro
});

//modificar imagen
document.querySelector("img").src =
  "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/example-dom-tree.svg";
document.querySelector("img").alt = "Imagen de nodos";

//cargar tabla
const cuerpoTabla = document.getElementById("cuerpo_tabla");

metodosDOM.map((dato, index) => {
  const fila = document.createElement("tr");
  const celdas = `<td>${index + 1}</td>
<td>${dato.categoria}</td>
<td>${dato.metodo}</td>
<td><code>${dato.sintaxis}</code></td>
<td>${dato.descripcion}</td>`;
  fila.setHTML(celdas);

  cuerpoTabla.append(fila);
});

let modeTheme = false;
const nav = document.querySelector("nav");

btnMode.addEventListener("click", () => {
  modeTheme = !modeTheme;

  const theme = modeTheme ? "dark" : "light";

  nav.classList.toggle("bg-dark", modeTheme);
  nav.setAttribute("data-bs-theme", theme);
  document.body.setAttribute("data-bs-theme", theme);

  btnMode.textContent = modeTheme ? "☀️" : "🌙";
  btnMode.classList.toggle("btn-dark", modeTheme);
});

const input = document.getElementById("inputValue");

const mostrarInputValue = () => {
  console.log(input.value);
  input.value = "";
  input.focus();
};

const formu = document.getElementById("formulario");

formu.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.target[0].value);
  console.log(input.value);
});
