/* Ejercicio 1 */
function mapJona(numeros, cb) {
  const numerosModificados = [];
  for (const numero of numeros) {
    numerosModificados.push(cb(numero));
  }
  return numerosModificados;
}
const numeros = [1, 4, 9, 16];
const numerosModificados = mapJona(numeros, x => x * 2);
console.log(numerosModificados);
/* Ejercicio 2 */
function filterJona(palabras, cb) {
  const palabrasModificadas = [];
  for (const palabra of palabras) {
    if (cb(palabra)) {
      palabrasModificadas.push(palabra);
    }
  }
  return palabrasModificadas;
}
const palabras = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const palabrasModificadas = palabras.filter(palabra => palabra.length > 6);
console.log(palabrasModificadas);
