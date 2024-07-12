let fraseCompleta = '';
do {
  const palabraIngresada = prompt(`Ingresa una palabra`);
  if (fraseCompleta === '') {
    fraseCompleta = palabraIngresada;
  } else {
    fraseCompleta = fraseCompleta + "-" + palabraIngresada;
  }
} while (confirm("¿Desea continuar?"));
console.log(fraseCompleta);
document.write(`Frase Ingresada ${fraseCompleta}`)