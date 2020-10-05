//Genera un código que dado un número, calcule la suma de los números pares 
//menores al valor hasta el 0. El número se incluye en la suma sea o no par. 
//Ejemplo: Si el usuario ingresa 21 21+20+18+16+14+12+10+8+6+4+2 = 131
//Si el usuario ingresa 6 6+4+2 = 12
numero = 21
num = numero
for (x = 2; x < numero; x += 2) {

    num += x
}
console.log(num)

//"AYER ESTABA LLOVIENDO?" devuelve DBHU HVWDED ÑÑRYLHPGR?

cadena = "Ayer estaba lloviendo?"
cadenaMayuscula = cadena.toUpperCase() // Retorna en mayuscula el String
abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVXYZABC"
abc = abecedario.split("")
const array1 = cadenaMayuscula.split("")
    // for (let [leter] of array1) {
    //     if (abc.indexOf(leter) !== -1) {
    //         console.log(abc[abc.indexOf(leter) + 3])
    //     } else {
    //         console.log(leter)
    //     }
    // }

// Escribe un programa que reciba una frase y una letra, y muestre por 
// pantalla el número de veces que aparece la letra en la frase 
// (incluye minúsculas y mayúsculas).
// Ejemplo: "Hoy es Jueves", "e" devuelve 3

frase = 'Hoy Es jueves'
letra = 'e'
repetidas = 0
for (letrita of frase.toUpperCase()) {
    if (letra.toUpperCase() === letrita) repetidas += 1
}
console.log(repetidas)