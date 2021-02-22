const numeros = [1, 4, 9, 16];

const numerosModificados = mapJona(numeros, x => x * 2);

console.log(numerosModificados);

function mapJona(numeros, cb) {
  const numerosModificados = [];
  for (const numero of numeros) {
    numerosModificados.push(cb(numero));
  }
  return numerosModificados;
}
