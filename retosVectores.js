// Crea una función mayor(x) que reciba una lista x e imprima el mayor número
// de la lista y el número de veces que aparece el mayor.

// Crea una funcion reto1() que no reciba parámetros pero lea el numero de 
// elementos a ingresar y los elementos de la lista y llame a la función mayor(x).



function reto1() {

    return (equis) => {
        let nue = Math.max.apply(null, equis)
        let ind = equis.indexOf(nue)
        let repetidas = 0
        equis.forEach(element => {
            if (element === equis[ind]) repetidas += 1
        })
        console.log(nue, repetidas)

    }
}
reto1()([2, 3, 5, 8, 1, 8, 8])

// Escribe una función reto2(x,y,z) donde x es el número de elementos, 
// y es el valor inicial y z la diferencia entre cada elemento. Con estos 
// parámetros crea una lista de x elementos que inicia en y y va de z en z.

function reto2(x, y, z) {
    array = []
    for (i = 0; i < x; i += 1) {
        array.push(y)
        y += z
    }
    console.log(array)
}
reto2(3, 11, 7)
reto2(6, 2, 5)