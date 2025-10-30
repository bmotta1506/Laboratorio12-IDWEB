function filtrarArreglo(arr, callback) {
  return arr.filter(callback);
}

console.log(filtrarArreglo([1, 2, 3, 4, 5], n => n > 3));
console.log(filtrarArreglo(["pera", "manzana", "kiwi"], palabra => palabra.length > 4));
