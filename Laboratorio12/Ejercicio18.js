function media(...numeros) {
    
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  return numeros.length === 0 ? 0 : suma / numeros.length;
}

console.log(media(2, 4, 6));
console.log(media(10, 20, 30, 40));
