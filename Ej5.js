/*Ejercicio 5: Servicio meteorológico
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un objeto temperatura donde registra día 
—valor numérico del día—, mes —valor numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho día. 
Las temperaturas —objeto temperatura— están cargados en un array.

*/

let temperaturas = [
    { dia: 1, mes: 11, min: 10, max: 15 },
    { dia: 2, mes: 11, min: 12, max: 18 },
    { dia: 3, mes: 11, min: 14, max: 20 },
    { dia: 4, mes: 11, min: 5, max: 12 }
];

// a) Ordenar por temperatura mínima de menor a mayor.
let minOrdenada = [...temperaturas].sort((a, b) => a.min - b.min);
console.log(minOrdenada);

// b) Ordenar por temperatura máxima de mayor a menor.
let maxOrdenada = [...temperaturas].sort((a, b) => b.max - a.max);
console.log(maxOrdenada);
