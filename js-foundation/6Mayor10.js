/*
Escribe un programa que le pida un número al usuario e imprima
 en la consola si el número es mayor o menor/igual a 10.
Si es mayor debe imprimir "El número es mayor a 10".
Si es menor debe imprimir "El número es menor o igual a 10".
*/

var numero1 = prompt("Escriba un número aleatorio.");
/* var numero2 = 10;

console.log(numero1===numero2 || numero1>numero2 || numero1<numero2
    (`El numero es mayor a 10.`)
); */

if(numero1 > 10) {
    console.log('El número es mayor a 10');
} else {
    console.log('El número es menor o igual a 10')
}
