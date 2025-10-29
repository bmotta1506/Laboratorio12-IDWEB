let numero = parseInt(prompt("Ingrese un número:"));
const crearContador = (numero) => {
    let contador = numero;

        const incrementar = () => {
            contador++;;
            return contador;
        }

        const resetear = () => {
            return contador = "0";
        }

        return {
            incrementar,
            resetear
        }
}
const contador = crearContador(numero);

console.log("Contador inicial: " + numero);
console.log("Incrementar: " + contador.incrementar());
console.log("Incrementar: " + contador.incrementar());
console.log("Reseteado: "+ contador.resetear());



