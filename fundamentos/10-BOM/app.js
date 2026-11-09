//dimensiones de ventana
console.log(window.innerWidth + "px");
console.log(window.innerHeight + "px");

window.addEventListener("resize", () => {
  console.log("Ancho de ventana: " + window.innerWidth + "px");
  console.log("Alto de ventana: " + window.innerHeight + "px");
});

//location
//información de la ruta
console.log(location.href);
console.log(location.hostname);
console.log(location.host);

//Reemplazar url
// location.assign("https://developer.mozilla.org/es/");
// location.replace("https://developer.mozilla.org/es/");
// location.href = "https://developer.mozilla.org/es/";

function informeNavegador() {
  const respuesta = confirm("Quiere ver el informe del navegador?");

  if (respuesta) {
    console.clear();
    console.log("--- InFORME DEL NAVEGADOR ---");

    console.log("URL completa: " + location.href);
    console.log("Dominio del servidor: " + location.hostname);
    console.log("Ruta interna: " + location.pathname);
  }
}
//Navigator
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
//https://developer.mozilla.org/es/docs/Web/API/Geolocation/getCurrentPosition
function geoLocalizacion() {
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

//History
//Volver atrás
// history.back()

//adelante
// history.forward()

//elementos en el historial
console.log(history.length);
