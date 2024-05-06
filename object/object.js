//1 Crea un 'objeto' de nombre 'Coche' que tenga las propiedades: 'marca, modelo, matricula'

const Coche = {
    marca: "audi",
    modelo: "kjkjk",
    matricula: "123123123",
}
//2  Crea un 'objeto' de nombre 'Casa' que tenga las propiedades: 'codPostal, calle, portal, piso'
//Contiene la propiedad codPostal
//Contiene la propiedad calle
//Contiene la propiedad portal
//Contiene la propiedad piso
const Casa = {
    codPostal: "123123",
    calle: "calle",
    portal: "portal",
    piso: "piso",
}
//3 Crea un 'objeto' de nombre 'FullStackDeveloper' que tenga las propiedades: 'array lenguajes, array proyectos'
//Contiene la propiedad lenguajes
//Contiene la propiedad proyectos
const FullStackDeveloper = {
    lenguajes: ["js", "php", "python"],
    proyectos: ["proyecto1", "proyecto2", "proyecto3"],

}

//4 Crea un 'objeto' de nombre 'Perro' que tenga las propiedades: 'nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)'
//Contiene la propiedad nombre
//Contiene la propiedad raza
//Contiene la propiedad color
//Contiene la propiedad edad
//Contiene la propiedad función ladrar
//Contiene la propiedad función popo
const Perro = {
    nombre: "Sua",
    raza: "raza",
    color: "gris, negro",
    edad: "4",
    ladrar: function () {
        console.log("ladrar");
    },
    popo: function () {
        return Math.random() * 3;
    },
}
//5.- Dado un 'objeto' de nombre 'Portatil' obtén el valor de la propiedad 'marca con .marca' guardándolo en la variable 'marcaPortatil'
let marcaPortatil = Portatil.marca;
//6.- Dado un 'objeto' de nombre 'Portatil' obtén el valor de la propiedad 'marca con ['marca'] guardándolo en la variable 'marcaPortatil2'
let marcaPortatil2 = Portatil["marca"];
//7.- Dado un 'objeto' de nombre 'Concierto' obtén el valor de la propiedad 'grupos' guardándolo en la variable 'grupos'
let grupos = Concierto.grupos;
//8.- Dado un 'objeto' de nombre 'Led' obtén el valor de las propiedades 'rojo, verde y azul' guardándolo en la variable 'array RGB[rojo, verde, azul]'
let Rojo = Led.rojo;
let Verde = Led.verde;
let Azul = Led.azul;

let RGB = [Rojo, Verde, Azul];

//9.- Dado un 'objeto' de nombre 'Portatil' modifica el valor de la propiedad 'modelo' por el valor 'P345'
// Suponiendo que tienes un objeto llamado 'Portatil' con una propiedad 'modelo'
let Portatil3 = {
    modelo: "anteriorValor" // Supongamos que el valor actual es "anteriorValor"
};

// Ahora modificamos el valor de la propiedad 'modelo' por 'P345'
Portatil.modelo = "P345";

console.log(Portatil.modelo); // Esto imprimirá 'P345' en la consola

//10- Dado un 'objeto' de nombre 'Concierto' añade el valor 'Guns N' Roses' a la propiedad 'cartelera'
Concierto.cartelera.push("Guns N' Roses");
//11- Dado un 'objeto' de nombre 'Concierto' modifica el valor de la propiedad 'fecha' por el valor new Date()
Concierto.fecha = new Date();
//12.- Dado un 'objeto' de nombre 'Impresora' modifica el valor de la propiedad 'imprimiendo' por el valor 'objeto con propiedades: nombreArchivo, copias, numPaginas'
let objeto = {
    nombreArchivo: "nombreArchivo",
    copias: 1,
    numPaginas: 10,
}
Impresora.imprimiendo = objeto;
//13.- Crea un 'objeto' de nombre 'Noticia' que tenga las propiedades: 'titular, cuerpo'
//Contiene la propiedad titular
//Contiene la propiedad cuerpo
let Noticia = {
    titular: "titular",
    cuerpo: "cuerpo",
}

//14.- Crea un 'objeto' de nombre 'Persona' que tenga las propiedades: 'nombre, apellidos, edad'
//Contiene la propiedad nombre
//Contiene la propiedad apellidos
//Contiene la propiedad edad
let Persona = {
    nombre: "nombre",
    apellidos: "apellidos",
    edad: "edad",
}
//15.- Crea un 'objeto' de nombre 'Avion' que tenga las propiedades: 'numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando')
//Contiene la propiedad numPasajeros
//Contiene la función despegar
//Contiene la función volar
//Contiene la función aterrizar
let Avion = {
    numPasajeros: 150,
    despegar: function despegar() {
        return console.log("despegando");
    },
    volar: function volar() {
        return console.log("llegando al destino");
    },
    aterrizar: function aterrizar() {
        return console.log("aterrizando");
    }
};
//16.- Crea un 'objeto' de nombre 'Paquete' que tenga la propiedad: 'array contenido con todos los objetos que contenga el paquete'
//Contiene la propiedad paquete de tipo array
let Paquete = {
    contenido: ["peso", "volumen", "precio"]
}
//17.- Crea un 'objeto' de nombre 'Pais' que tenga las propiedades: 'numHabitantes, continente, gentilicio'
//Contiene la propiedad numHabitantes
//Contiene la propiedad continente
//Contiene la propiedad gentilicio
let Pais = {
    numHabitantes: "numHabitantes",
    continente: "continente",
    gentilicio: "gentilicio",
}
//18.- Dado un 'objeto' de nombre 'O_Error' obtén el valor de la propiedad 'codigo' guardándolo en la variable 'codError'
let codError = O_Error.codigo;

//19 - Dado un 'objeto' de nombre 'Grupo' obtén el valor de la propiedad 'integrantes' guardándolo en la variable 'integrantes'
let integrantes = Grupo.integrantes;

//20.- Dado un 'objeto' de nombre 'Impresora' obtén el valor de la propiedad 'tinta' guardándolo en la variable 'nivelesTinta'
let nivelesTinta = Impresora.tinta;

//21.- Dado un 'objeto' de nombre 'Pantalla' obtén el valor de la propiedad 'pixeles' guardándolo en la variable 'pixeles'
const pixeles = Pantalla.pixeles;
//22.- Dado un 'objeto' de nombre 'Movil' obtén el valor de la propiedad 'especificaciones con ['especificaciones']' guardándolo en la variable 'especificaciones'
const especificaciones = Movil.especificaciones;
//23.- Dado un 'objeto' de nombre 'Grupo' modifica el valor de la propiedad 'numIntegrantes' por el valor '5'
Grupo.numIntegrantes = 5;
//24.- Dado un 'objeto' de nombre 'Pantalla' modifica el valor de la propiedad 'dimensiones' por el valor '1920x1080'
Pantalla.dimensiones = "1920x1080";
//25.- Dado un 'objeto' de nombre 'Led' modifica el valor de la propiedad 'encendido' por el valor 'false si vale true y true si vale false'
Led.encendido = !Led.encendido;
//26.- Dado un 'objeto' de nombre 'Movil' modifica el valor de la propiedad 'temperatura' por el valor '20º'
Movil.temperatura = "20º";
