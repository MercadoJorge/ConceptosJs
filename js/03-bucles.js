// estructuras repetitivas

//ESTRUCTURA WHILE

/*
while(condicion logica){
aqui agrego todo el codigo que quiere repetir varias veces
agregar un codigo que haga que la condicion logica se deje de cumplir
}
*/

let renglon = 1; // mi variable renglon vale 1

while (renglon <= 10) {
  // si mi variable vale 10 o igual a 10
  document.write(`<p>hola mundo ${renglon}</p>`); //escribo hola mundo ${1 el valor de mi variable renglon}
  renglon = renglon + 1; // si las condiciones se cumplen mi variable renglon es igual a renglon +1
}

// se puede resumir el codigo anterior

let renglon2 = 1; // mi variable renglon vale 1

while (renglon2 <= 10) {
  // si mi variable vale 10 o igual a 10
  document.write(`<p>hola mundo ${renglon2}</p>`); //escribo hola mundo ${1 el valor de mi variable renglon}
  renglon2++;
} // se puede resumir el codigo agregando dos ++ para aumentar o dos -- para restar

// ESTRUCTURA DO WHILE

let linea = 1;

do {
  document.write(`<p>hola ${linea}</p>`);
  linea++;
} while (linea <= 5);

//ESTRUCTUTRA FOR

/*
for(let INICIALIZO VARIABLE = 1; VARIABLE < 10 ; VARIABLE ++ )
aqui agrego todo el codigo que quiero repetir varias veces
*/

//CUENTA REGRESIVA

for (
  let contador = 10 /*se crea mi caja*/;
  contador > 0 /*condicion logica */;
  contador-- /*se hace la operacion que nec*/
) {
  document.write(`<p>Cuenta regresiva ${contador}</p>`);
}
