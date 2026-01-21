/*Ejercicio 6: Ordenando personas
¿Cómo podrías ordenar la colección, de menor a mayor, considerando solo la estatura? 
Utiliza bubble sort.*/

let personas = [
    { 
        nombre: "Dua", 
        apellido: "Lipa",
        ocupacion: "cantante",
        estatura: 173
    },
        { 
        nombre: "Ariana", 
        apellido: "Grande",
        ocupacion: "cantante",
        estatura: 160
    },
        { 
        nombre: "Taylor", 
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180
    }
];

function ordenarPorEstatura(personas) {
    let copia = [...personas];

    for (let i = 0; i < copia.length - 1; i++) {
        for (let j = 0; j < copia.length - 1 - i; j++) {
            if (copia[j].estatura > copia[j + 1].estatura) {
                let auxiliar = copia[j];
                copia[j] = copia[j + 1];
                copia[j + 1] = auxiliar;
            };
        };
    };

    return copia;
};

console.log(ordenarPorEstatura(personas));