// Comentario de una sola linea

/*
Comentario 
de 
multiples 
lineas 
*/

// declarar un variable ( var - let - const)

let anioActual = 2024;
console.log(anioActual)

// modificamos contenido de una variable

anioActual = 2024 + 2 ;
console.log(anioActual)
document.write(anioActual)// mostrar en pantalla la variable
document.write("<p class='textoresaltado'>esto es un parrafo</p>")//ejemplo de como agregar una class
document.write('Año actual: '+ (anioActual - 2))

// ventanas emergentes

alert('Hola mundo')

const url = 'https://universe.rollingcodeschool.com/'
document.write('<br>' + url)// br sirve para dejar un espacio

//pedir al usuario un numero

const numero1 = parseInt(prompt("Ingresa un numero"));
console.log(numero1)
const resultado = numero1 + 20;
console.log(resultado)

//mostrar el resulado en el documento
document.write("<h2>Resultado: " + resultado + "</h2>")

// ejemplo de backticks(simplifico )

document.write(`<h2>Resultado: ${resultado} </h2>`)