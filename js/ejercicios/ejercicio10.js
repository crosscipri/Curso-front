var seguirJugando = true;
do{
    var numAzar = Math.floor(Math.random()*51);
    var turnos = 0;
    do{
    var numUsuario = prompt('Introduce un numero entre 0 y 50');
    turnos++;
    if(numAzar > numUsuario){
        console.log('El numero que buscas es mayor');
    }else if(numAzar < numUsuario){
        console.log('El numero introducido es menor');
    }
    }while (numAzar !== Number(numUsuario)){

        console.log ('Has Acertado el numero era' +numAzar );
        console.log('Has tardado ' +turnos +' en acertarlo');
    }
seguirJugando = confirm('Seguir Jugando');
}while(seguirJugando);




