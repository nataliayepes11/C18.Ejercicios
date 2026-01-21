/* Ejercicio 3: Encontrar el número faltante
Dada una matriz de n-1 números enteros únicos en el rango de 1 a n, encuentra el número que falta en la secuencia.*/

let numeros = [1, 2, 3, 5];

function numeroFaltante(numeros, n) {
    let sumaEsperada = (n * (n + 1)) / 2;
    let sumaActual = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return sumaEsperada - sumaActual;
};

console.log(numeroFaltante(numeros, 5));