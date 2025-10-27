let palabra = prompt("Ingrese una palabra:");

const aMayusculas = (pal) => pal.toUpperCase();
const agregarSigno = (pal) => pal + "!";
const componerTransformaciones = (f1, f2) => pal => f2(f1(pal));

const transformaciones = componerTransformaciones(aMayusculas, agregarSigno);

console.log(`La palabra transformada es: ${transformaciones(palabra)}`);