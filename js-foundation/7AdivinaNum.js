/* var azar = prompt('Escribe un número aleatorio.'); */ 

var number = Math.floor(Math.random()*10+1);

function AdivinaNum() {
    var guess = prompt('Escribe un número aleatorio.');
    var guess = parseInt(guess)

    if(number === guess) {
        console.log('¡Felicidades, número correcto!');
        return; //sale de la funcion
    } 
        console.log('Lo siento, ¡intenta nuevamente!');
}

/* codigo perplexity
// Generar un número aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
// Función para pedir al usuario que adivine el número
function adivinaElNumero() {
    // Pedir al usuario que ingrese su adivinanza
    const adivinanza = prompt("Adivina un número del 1 al 10:");

    // Convertir la adivinanza a un número
    const adivinanzaNumero = parseInt(adivinanza);

    // Verificar si la adivinanza es correcta
    if (adivinanzaNumero === numeroAleatorio) {
        console.log("¡Felicitaciones, ese era!");
        return; // Salir de la función si la adivinanza es correcta
    }

    console.log("Lo siento, intenta nuevamente!");
}

// Llamar a la función
adivinaElNumero();


*/