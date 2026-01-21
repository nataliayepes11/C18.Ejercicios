/*Ejercicio 1: Palíndromo
Escribe una función que determine si una cadena dada es un palíndromo. 
Un palíndromo es una palabra, frase, número o secuencia de caracteres que se lee igual hacia adelante que hacia atrás, 
ignorando espacios, signos de puntuación y mayúsculas/minúsculas.*/

function palindromo(texto) {
    let textoLimpio = texto
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    let haciaAtras = textoLimpio.split("").reverse().join("");

    return textoLimpio === haciaAtras;
}

console.log(palindromo("La Luna es le motor emocional de la persona"));
console.log(palindromo("Neuquen"));