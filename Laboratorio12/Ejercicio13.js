let texto = prompt("Ingrese un texto:");

function procesarTexto(texto) {
    const contarPalabras = (t) => {
        if (!t.length) return 0;
        let contador = 0, dentro = false;
        for (let i = 0; i < t.length; i++) {
            if (t[i] !== " " && !dentro) {
                dentro = true;
                contador++;
            } else if (t[i] === " ") {
                dentro = false;
            }
        }
        return contador;
    };

    const borrarEspacios = (t) => {
        let sinEspacios = "";
        for (let i = 0; i < t.length; i++) {
            if (t[i] !== " ") sinEspacios += t[i];
        }
        return sinEspacios;
    };

    let palabras = contarPalabras(texto);
    let textoSinEspacios = borrarEspacios(texto);
    return { textoSinEspacios, palabras };
}

let r = procesarTexto(texto);
console.log(`Texto sin espacios: "${r.textoSinEspacios}"`);
console.log(`Número de palabras: ${r.palabras}`);

