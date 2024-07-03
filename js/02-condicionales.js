// Condicionales

/*
if(condicion logica)
{
todos las lines que quiero que sucedan si se cumple la condicion
}
*/

// Solicitar al usuario ingresar un numero y verificar si es positivo

const numeroSolicitado = parseInt(prompt(`Ingrese un numero entero`));
if(numeroSolicitado > 0){
    document.write(`<p>El numero ingresado: ${numeroSolicitado} es positivo</p>`)
}
