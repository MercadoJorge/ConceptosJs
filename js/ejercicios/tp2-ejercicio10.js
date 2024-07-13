const filas = parseInt(prompt(`Ingrese un numero de filas`));
const columnas = parseInt(prompt(`Ingrese un numero de columnas`));
let totalceldas = filas * columnas;

document.write(`<table><tbody>`);
for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  document.write(`<tr>`);

  for (let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++){
    document.write(`<td>${totalceldas}</td>`);
  //decrementar
  totalceldas--};
}
document.write(`</tr>`);
document.write(`</tbody></table>`);
