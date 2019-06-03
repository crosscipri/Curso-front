var texto = "Hola mundo";

console.log (texto);
console.log (typeof(texto));

texto = 3;

console.log(       'Dan igual los estacio' +
'y los saltos de linea no se tienen en cuenta')

var unTexto = '';  //Buena practica
var un_Texto = ''; //Tambien se puede usar

var nombre = "Me llamo\n \"Angel\"";
var nombre = 'Me llamo "Angel"';

console.log(nombre);

if (nombre){
    console.log('Valor truthy');
}

if(unTexto){
    console.log('Valor truthy')  //se va a evaluar a false porque es un valor vacio
}


//Arrays

var numsLiteral = [1, 2, 3, 4, 5]; // La que se usa
var numsConstructor = new Array('6, 7, 8, 9');

var ar3Posiciones = new Array(3);
ar3Posiciones[0] = 10;
ar3Posiciones[1] = 11;
ar3Posiciones.push(12); //Añadimos al final del array, si añadimos mas push se van añadiendo al final del array
console.log(ar3Posiciones);

nombre1 = 'Angel';
console.log(nombre1[1]); //Esto se puede hacer

num2 = 234;
console.log(num2[1]); //Esto no se pude hacer

var direccion = ['Calle', 'Norte', 12, '3B', 28330, 'Madird'];
direccion[4] ='28330';
console.log(direccion);

var txtNum = 3 % 2 === 0 ? 'Es par ' : 'Es impar';

var txtNum2 = '';
if (3 % 2 === 0) {
    txtNum2 = 'Es par';
}else{
    txtNum2 = 'Es impar';
}

console.log(txtNum);
console.log(txtNum2);

//Consola
console.log('Mensaje de informacion');
console.warn('Mensaje de peligro');
console.error('Un mensaje de error');

//Popup JS
//alert('Un mensaje') //Saca un popup en el navegador
//var esVerdad = confirm('Es verdad lo que dicen?'); //Nos salen dos opciones para elegir si es verdadero o falso
//var miNombre = prompt('Como te llamas?'); //Si le damos a aceptar nos saca lo que hemos escrito si lo cancelamos nos devuelve un null

//If-else if-else
/*
if(miNombre === 'Paco'){
    console.log('Eres Paco');
}else if(miNombre === 'Angel'){
    console.log('Eres Angel')
}else{
    console.log('No eres ninguno')
}

//Switch

switch(miNombre){
    case 'Paco':
    console.log('Eres Paco');
    break;

    case 'Angel':
    console.log('Eres Angel');
    break;

    default:
    console.log('No eres ninguno');
}
*/
//For
var nombres = ['Robb', 'Arya', 'Sansa', 'Rickon', 'Bran'];
for(var i = 0; i < nombres.length ; i++){
    console.log(nombres[i]);
}

//For in

for (var i in nombre){ //Guarda la posicion en la i
    console.log('FORIN: ' + nombres[i]);
}

//For of
for (var nombre of nombres){ //Guarda el valor en la posicion i
    console.log('FOROF' + nombre);
}

//While
var num = prompt('Introduce un numero: ');
while(Number(num) !==-1){
 console.log('introduce -1 para salir del bucle');
 num = prompt('Introduce un num:');
}

//Do while 

do{
    console.log('introduce -1 para salir del bucle');
    num = prompt('Introduce un num:');
}while(Number(num) !==-1)




