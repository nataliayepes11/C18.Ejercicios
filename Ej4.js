/* Ejercicio 4: Concurso de Likes
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, 
se registra la cantidad de likes obtenidos por cada usuario en un array. 
Ordenar los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, 
cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo 
—suponer que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

let likes = [120, 450, 30, 89, 240, 560, 310, 90, 75, 600, 410, 220, 15, 95, 180];

function ordenarLikes(likes) {
    let copia = [...likes];

    for (let i = 0; i < copia.length; i++) {
        for (let j = 0; j < copia.length - 1; j++) {
            if (copia[j] < copia[j + 1]) {
                let auxiliar = copia[j];
                copia[j] = copia[j + 1];
                copia[j + 1] = auxiliar;
            };
        };
    };

    return {
        mayor: copia[0],
        segundo: copia[1],
        tercero: copia[2],
        menor: copia[copia.length - 1]
    };
};

console.log(ordenarLikes(likes));
