//1

let variableSinValor;

//2

let booleano1 = true;
let booleano2 = false;

//3

const PI = 3.14;

//4 

const TAU = 2 * PI;

//5

let booleanoAnd = booleano1 && booleano2;

//6

let booleanoNot = !booleano1

//7 

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))

//8

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

//9

var incrementarAntes = 2;
var resultadoAntes = ++incrementarAntes;



//10

let contarHasta10_2 = 0;

for (let i = 0; contarHasta10_2 !== 10; i++) {
    contarHasta10_2++;

}


//11

let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
    postI = postI + postJ++;
}

// 12

let sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}

//13

let variableValorNumerico = 5;

//4

const MiNombre = "tuntr  trr ombre";

//15

const MiNumeroFav = 15615161;

// 16

let booleanoOr = booleano1 || booleano2;

//17

let booleanoMix1 = (booleano1 && (TAU / 2 == PI)) || (variableValorNumerico >= MiNumeroFav);

//18

let seisNoEsNueve = (6 !== 9);

//19

let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);


//20

let valorSuma = MiNumeroFav + variableValorNumerico;

//21

let valorResta = MiNumeroFav - variableValorNumerico;

//22

let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

//23

let valorDivision = MiNumeroFav / 3;

//24

let contarHasta10 = 0;
while (contarHasta10 !== 10) { ++contarHasta10; }

//25

let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
    preI = preI + ++preJ;
}

//26

let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares += i;
    }
}