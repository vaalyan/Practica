var edad = prompt("¿Cuál es su año de nacimiento?");
var añoAct = 2024;
var resta = parseInt(añoAct) - parseInt(edad);

console.log(resta && (`Tienes ${resta} años`));