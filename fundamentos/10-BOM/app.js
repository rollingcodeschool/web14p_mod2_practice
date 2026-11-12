//Location
//location
//información de la ruta
console.log(location.href);
console.log(location.hostname);
console.log(location.host);

//Reemplazar url
// location.assign("https://developer.mozilla.org/es/");
// location.replace("https://developer.mozilla.org/es/");
// location.href = "https://developer.mozilla.org/es/";

//info del navegador
//Dominio: hostname
//Ruta del navegador: href
//Ruta interna: pathname

console.log("Dominio: " + location.hostname);

function info() {
  console.clear();
  console.log("%c ---Información---", "color:white;background:blue");
  console.log("Dominio:" + location.hostname);
  console.log("Ruta:" + location.href);
  console.log("Ruta interna:" + location.pathname);
}

//navigator

//Obtener Memoria del equipo
function validarMemory() {
  const memory = navigator.deviceMemory;
  //   console.log(memory);
  if (memory < 16) {
    alert("❌ Memoria insuficiente");
  } else {
    alert("✨ Menos mal que tenes memoria groso!!");
  }
}

//Idioma del navegador
console.log(navigator.language);

//Conexión a internet
console.log(navigator.onLine);

window.addEventListener("online", () => {
  alert("Conexión de internet online ✅");
});

window.addEventListener("offline", () => {
  alert("Sin conexión a internet ❌");
});

//Geolocalización
function Geo() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    console.log("Tu ubicación actual es:");
    console.log(`Latitud : ${crd.latitude}`);
    console.log(`Longitud: ${crd.longitude}`);
    console.log(`Más o menos ${crd.accuracy} metros.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}
