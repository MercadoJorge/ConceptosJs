const filas = parseInt(prompt(`Ingrese un numero de filas`));
const columnas = parseInt(prompt(`Ingrese un numero de columnas`));

document.write(`<table><tbody>`);
document.write(`<tr>`);

for(let indiceColumnas = 1;indiceColumnas <= columnas; indiceColumnas ++)
document.write(`<td>1</td>`);
document.write(`</tr>`);
document.write(`</tbody></table>`);
