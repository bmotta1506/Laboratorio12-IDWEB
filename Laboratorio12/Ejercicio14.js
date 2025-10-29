const Operaciones = (num1, num2) => {
    const suma = () => num1 + num2;
    const resta = () => num1 - num2;
    const multiplicacion = () => num1 * num2;
    const division = () => (num2 !== 0 ? num1 / num2 : 'Error: División por cero');

    return { suma, resta, multiplicacion, division };
}   
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

const resultados = Operaciones(numero1, numero2);

console.log("Resultados:");
console.log("Suma:", resultados.suma());
console.log("Resta:", resultados.resta());
console.log("Multiplicación:", resultados.multiplicacion());
console.log("División:", resultados.division());