let fruits = ['apple', 'Banana'] // Array of fruits
let newfruit = fruits.push("orange") // variable cambia = arrays.PUSH("nombre valor") ==>> Add of array fruits a new fruit 
    //fruits.forEach(fruit => console.log(fruit))     // loop over array fruits and print in screen
fruits.pop() // Array.POP()   ==>> Borra el ultimo dato del arreglo
    //fruits.forEach(fruit => console.log(fruit))
let errasePrimero = fruits.shift()
    //fruits.forEach(fruit => console.log(fruit))     //Varriable cambia = Areglo.SHIFT() ==>> Elimina primer valor del arreglo
let addPrimero = fruits.unshift("strawberry", "lemon", "mango") // variable cambia = arrelgo.UNSHIFT("nombre valor") ==>> Agrega un valor

let posicion = fruits.indexOf("lemon") //posicion=indexOf("palabra a buscar") Retorna la posicion del opbjeto buscado


//fruits.forEach(fruit => console.log(fruit))
let borrarPosicion = fruits.splice(1, 0) // variable=arreglo.SPLICE(posicion, cuantas borra)
console.log(posicion)
    //fruits.forEach(fruit => console.log(fruit))


let ArregloCopia = fruits.slice() // Variable = Arreglo.SLICE() ==>> Hace una copia de un Arreglo
let arreglo = fruits

arreglo.forEach(fruit => console.log(fruit))