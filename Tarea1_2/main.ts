/* CLASE 1  - Strings*/

/*
console.log("Hola Mundo");

let miTexto: string = "Hola Mundo de nuevo";
console.log(miTexto);

let tagUno: string = "<div class=\"ejemplo\">";
let tagDos: string = "<div class='ejemplo'>";

console.log(tagUno);
console.log(tagDos);

console.log("Linea 1 \nLinea 2");

console.log(`Esta es una linea
Esta es otra linea`);

console.log(`El valor de mi variable es ${miTexto}`);
*/


/* CLASE 2 - Numeros */

let op1: number = 10;
let op2: number = 20;

console.log(`Mis Variables son ${op1} y ${op2}`);

op1++;
op2+=4;

console.log(`Mis Variables despues son ${op1} y ${op2}`);

let resultado: number = op1/op2;
console.log(`El resultado es ${resultado}`);
console.log(`El resultado es ${resultado.toPrecision(2)}`);

let varTipoDesc: any ;
console.log(`variable tiene valor: ${varTipoDesc} y es de tipo ${typeof varTipoDesc}`);
varTipoDesc = "Es un texto";
console.log(`variable tiene valor: ${varTipoDesc} y es de tipo ${typeof varTipoDesc}`);
varTipoDesc = 4.56;
console.log(`variable tiene valor: ${varTipoDesc} y es de tipo ${typeof varTipoDesc}`);

let varIndef: undefined;
varIndef = null;
console.log(`variable tiene valor: ${varIndef} y es de tipo ${typeof varIndef}`);
let varVoid:void = undefined;
console.log(`variable tiene valor: ${varVoid} y es de tipo ${typeof varVoid}`);

function imprimirMsg():void{
    console.log("Mensaje generico");
}

function imprimirMsg2(msg: string): void{
    console.log(msg);
}

imprimirMsg();
imprimirMsg2("Mensaje personalizado");

function sumar(op1:number, op2:number):number{
    return op1+op2;
}

var fSumar = sumar;
console.log(sumar(1,2));
console.log(fSumar(1,2));
