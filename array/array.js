//1
let arrayVacio = [];

//2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3 
let arrayNumerosPares = [0, 2, 4, 6, 8];

//4
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//5
function suma(num1, num2) {
    return (num1 + num2);
}
//6
function potenciacion(a, b) {
    if (b === 0) {
        return 1; // Cualquier número elevado a la potencia 0 es 1
    } else if (b === 1) {
        return a; // Cualquier número elevado a la potencia 1 es el propio número
    } else {
        return a * potenciacion(a, b - 1);
    }
}
//7
function separarPalabras(str) {
    return str.split(/\s+/);
}
// 8 

function repetirString(str, n) {
    let resultado = "";
    for (let i = 0; i < n; i++) {
        resultado += str;
    }
    return resultado;
}
//9
function esPrimo(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// 10
function ordenarArray(array) {
    return array.sort((a, b) => a - b);
}
//11
function obtenerPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

//12
function pintarArray(arr) {
    // Convierte el array en una cadena de texto
    const arrStr = JSON.stringify(arr);
    // Formatea la cadena para que tenga el formato deseado
    const formattedStr = `Array: ${arrStr} String: '${arrStr}'`;
    return formattedStr;
}
//13
function arrayMapi(arr, func) {
    // Aplica la función a cada elemento del array
    return arr.map(func);
}
//14 
function eliminarDuplicados(arr) {
    // Utiliza un conjunto (Set) para eliminar duplicados
    return Array.from(new Set(arr));
}
//15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
//16
let holaMundo = ["Hola", "Mundo"];
//17
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
//18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//19 
function multiplicacion(num1, num2) {
    return (num1 * num2);
}
//20 
function division(a, b) {
    /**
     * Esta función acepta dos números como argumentos y devuelve su división.
     * Si se intenta dividir por cero, se devuelve Infinity o -Infinity dependiendo del signo de los operandos.
     */
    const result = a / b;
    // Verificar si el resultado es Infinity o -Infinity para detectar la división por cero
    if (!isFinite(result)) {
        return "¡Error! No se puede dividir entre cero.";
    }
    return result;
}
//21
function esPar(num1) {
    return (num1 % 2 === 0);
}
//22
function esPar(numero) {
    // Verificar si el número es par
    return numero % 2 === 0;
}


//22 Definición de las funciones
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}
//23
function ordenarArray2(array) {
    // Utilizamos el método sort para ordenar el array de mayor a menor
    // Comparamos los números en orden inverso para obtener el orden descendente
    return array.sort((a, b) => b - a);
}
//24
function obtenerImpares(array) {
    // Filtrar los elementos del array que sean impares utilizando el método filter
    return array.filter(numero => numero % 2 !== 0);
}
//25

function multiplicacion(a, b) {
    return a * b;
}

// Variable arrayFunciones con las funciones como elementos
const arrayFunciones = [suma, resta, multiplicacion];
function sumarArray(array) {
    // Utilizamos el método reduce para sumar todos los elementos del array
    return array.reduce((acumulador, elemento) => acumulador + elemento, 0);
}
//26
function multiplicarArray(array) {
    // Utilizamos el método reduce para multiplicar todos los elementos del array
    return array.reduce((acumulador, elemento) => acumulador * elemento, 1);
}
