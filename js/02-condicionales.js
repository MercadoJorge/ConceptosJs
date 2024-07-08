// Condicionales

/*
if(condicion logica)
{
todos las lines que quiero que sucedan si se cumple la condicion
}
*/

// Solicitar al usuario ingresar un numero y verificar si es positivo

/*const numeroSolicitado = parseInt(prompt(`Ingrese un numero entero`));
if(numeroSolicitado > 0){
    document.write(`<p>El numero ingresado: ${numeroSolicitado} es positivo</p>`)
} 
else{
    document.write(`<p>El numero ingresado: ${numeroSolicitado} no es positivo</p>`)
}
*/

//Cree un programa que solicite al usuario su edad e indique si puede votar o no

// 18 a 75 es obligatorio
//si la persona tiene 16 o 17 años es opcional , desde 76 en adelante es opcional
//menos de 16 no puede

const edad = parseInt(prompt(`Ingrese su edad`));
// AND && sirve par agregar otra condicion
// OR ||
if (edad >= 18 && edad <= 75) {
  document.write(`<p>Usted esta obligado a votar</p>`);
} else {
  // quiero saber si la edad es 16,17 O mas de 75 es opcional votar
  if (edad == 16 || edad == 17 || edad >= 76) document.write(`<p>Es opcional votar</p>`);
  else{
    document.write(`<p>Usted no puede votar</p>`);
  }
}
