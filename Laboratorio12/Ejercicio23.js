function potencia(base, exponente) {
  if (exponente === 0) return 1;
  return base * potencia(base, exponente - 1);
}

console.log(potencia(2, 3));
console.log(potencia(5, 0));
console.log(potencia(3, 4));
