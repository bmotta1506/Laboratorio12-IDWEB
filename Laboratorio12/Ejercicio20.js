function ejecutarOperacion(fn, x, y) {
  return fn(x, y);
}

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.log(ejecutarOperacion(sumar, 5, 3));
console.log(ejecutarOperacion(multiplicar, 4, 2));
