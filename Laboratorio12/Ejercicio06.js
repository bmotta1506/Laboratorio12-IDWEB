let num1 = parseInt(prompt("Ingrese el primer número entero: "));
let num2 = parseInt(prompt("Ingrese el segundo número entero: "));
let num3 = parseInt(prompt("Ingrese el tercer número entero: "));

function esMayor(num1, num2, num3) {
    let mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    return mayor;
}

console.log(`El numero mayor entre ${num1}, ${num2} y ${num3} es: ${esMayor(num1, num2, num3)}`);