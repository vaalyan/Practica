var peso = prompt("¿Cuál es su peso?");
var estatura = prompt("¿Cuál es su estatura?");

var resultado = parseFloat(peso) / parseFloat(estatura * estatura);

console.log(resultado && (`Tu IMC es ${resultado}`));

/* var resultado = parseFloat(peso) / Math.pow(parseFloat(estatura), 2); */