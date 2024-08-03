// Logica de programación

// Declarar variables
    // 1. const - variables constantes que no cambian
    // 2. let   -variables cambian de valor
    // variable sin el const y let

const nombre = "Daniel";
let edad = 26;

let puntaje = "2.5";

const numEntero = 40;
const numReal = 41.2;
const datoBoolean = true;
const datoBooleanDos = false;
const arr = ["pepe", "german", "daniel"]; //array - arrego
const str = "Daniel";


// Aritmetica

    // operadores logicos + - / % <> ! =

const numDos = 20;
const numUno = 10;

console.log(numUno>numDos);

    // Negación
const verdad = true;

console.log(!verdad);

    // triple igual compara dos valores simpre iguales y el tipo de la variable

/*console.log(numUno=numDos);
console.log(numUno==numDos);
console.log(numUno===numDos); //compara el tipo y el valor
console.log(numUno!==numDos);*/


// Concatenación
const nombre1 = "Daniel";
const apellido1 = "Rodriguez" ;
const edad1 = 26;
console.log(nombre1 + " " + apellido1 + " " + edad1 + " " + "años");


// template strings plantilla texto
console.log(`Hola me llamo ${nombre1} ${apellido1} tengo ${edad1} años`);

// Condicional -- statement 

if (edad >= 18 && edad <= 30 || edad === 26) {
    console.log("es mayor de edad");
} else  {
    console.log("es menor de edad");
}

const dia = 0;
if (dia === 0) {
    console.log("lunes");
} else if (dia === 1) {
    console.log("martes");
} else if (dia === 2) {
    console.log("miercoles");
} else {
    console.log("No es válido")
};


// if -- ternario
const diaSemana = 1;
console.log(
    `Hola, el dia de hoy es ${ diaSemana === 1 ? "lunes" : "no se que día es"}`
);


const mensaje =  prompt ("ingrese su nombre");
console.log(mensaje)
// Bases de datos