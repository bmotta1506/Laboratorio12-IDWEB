let num = parseInt(prompt("Ingrese un número entero:"));

function esPar(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}
console.log(`¿El número ${num} es par?: ${esPar(num)}`);