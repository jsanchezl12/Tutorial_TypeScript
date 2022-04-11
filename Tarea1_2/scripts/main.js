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
var op1 = 10;
var op2 = 20;
console.log("Mis Variables son ".concat(op1, " y ").concat(op2));
op1++;
op2 += 4;
console.log("Mis Variables despues son ".concat(op1, " y ").concat(op2));
var resultado = op1 / op2;
console.log("El resultado es ".concat(resultado));
console.log("El resultado es ".concat(resultado.toPrecision(2)));
var varTipoDesc;
console.log("variable tiene valor: ".concat(varTipoDesc, " y es de tipo ").concat(typeof varTipoDesc));
varTipoDesc = "Es un texto";
console.log("variable tiene valor: ".concat(varTipoDesc, " y es de tipo ").concat(typeof varTipoDesc));
varTipoDesc = 4.56;
console.log("variable tiene valor: ".concat(varTipoDesc, " y es de tipo ").concat(typeof varTipoDesc));
var varIndef;
varIndef = null;
console.log("variable tiene valor: ".concat(varIndef, " y es de tipo ").concat(typeof varIndef));
var varVoid = undefined;
console.log("variable tiene valor: ".concat(varVoid, " y es de tipo ").concat(typeof varVoid));
function imprimirMsg() {
    console.log("Mensaje generico");
}
function imprimirMsg2(msg) {
    console.log(msg);
}
imprimirMsg();
imprimirMsg2("Mensaje personalizado");
function sumar(op1, op2) {
    return op1 + op2;
}
var fSumar = sumar;
console.log(sumar(1, 2));
console.log(fSumar(1, 2));
