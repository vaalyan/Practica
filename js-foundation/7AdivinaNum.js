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

