function descargarArchivo(url, callback) {
  console.log("Descargando...");
  setTimeout(() => {
    callback(url);
  }, 2000);
}

descargarArchivo("https://archivo.com/ejemplo.zip", (url) => {
  console.log(`Descarga completa de ${url}`);
})
