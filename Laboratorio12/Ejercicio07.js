let nota1 = parseFloat(prompt("Ingrese la primera nota: "));
let nota2 = parseFloat(prompt("Ingrese la segunda nota: "));
let nota3 = parseFloat(prompt("Ingrese la tercera nota: "));

const promedio = function(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

console.log(`El promedio de las notas ${nota1}, ${nota2} y ${nota3} es: ${promedio(nota1, nota2, nota3).toFixed(2)}`);