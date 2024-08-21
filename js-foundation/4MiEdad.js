/*
Escribe un programa que le pida al usuario su año de nacimiento 
e imprima su edad actual en la consola con la frase "Tienes X años". 
Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999, el programa debe imprimir en la consola:

Tienes 29 años
*/

var edad = prompt("¿Cuál es su año de nacimiento?");
var añoAct = 2024;
var resta = parseInt(añoAct) - parseInt(edad);

console.log(resta && (`Tienes ${resta} años`));