let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

function areaRectangulo(base, altura) {
    return base * altura;
}

console.log(`El área del rectángulo con base ${base} y altura ${altura} es: ${areaRectangulo(base, altura)}`);
