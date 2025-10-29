let valorInicial = parseFloat(prompt("Ingrese el valor inicial del acumulador:"));

function acumulador(valorInicial){
    let total = valorInicial;
    
    const agregar = () => {
        let valor = parseFloat(prompt("Ingrese un valor para agregar al acumulador:"));
        total += valor;
        console.log("Valor agregador: " + valor + " | Valor actual del acumulador: " + total);
        return total;
    }

    return agregar;
}

const sumar = acumulador(valorInicial);

console.log("Valor inicial del acumulador: " + valorInicial);
sumar();
