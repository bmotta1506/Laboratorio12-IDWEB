let a = parseInt(prompt("Ingrese el primer número entero:"));
let b = parseInt(prompt("Ingrese el segundo número entero:"));

    function esMultiplio(a, b) {
        if (a % b === 0) {
            return true;
        }
        return false;
    }
    console.log(`¿El número ${a} es múltiplo de ${b}?: ${esMultiplio(a, b)}`);