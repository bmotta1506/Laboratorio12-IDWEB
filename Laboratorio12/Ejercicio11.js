let numero = parseInt(prompt("Ingrese un número entero:"));

const esPositivo = (numero) => {
    if(numero > 0) {
        return `El número ${numero} es positivo.`;
    }
    return `El número ${numero} no es positivo.`;
}

console.log(esPositivo(numero));