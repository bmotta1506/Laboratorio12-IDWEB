let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

const calcularDescuento = function(precio, porcentajeDescuento) {
    let descuento = (precio * porcentajeDescuento) / 100;
    return precio - descuento;
}

console.log(`El precio final del producto con un descuento de ${porcentajeDescuento}% sobre ${precio} es:
${calcularDescuento(precio, porcentajeDescuento).toFixed(2)}`);