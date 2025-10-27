let texto = prompt("Ingrese un texto:");

const convertirAMayusculas = function(texto) {
    return texto.toUpperCase();
}

console.log(`El texto ${texto} en mayúsculas es: ${convertirAMayusculas(texto)}`);