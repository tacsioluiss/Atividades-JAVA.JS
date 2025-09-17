// Defina uma função que calcule o IMC. Escreva um script que leia o peso
// a altura de três pessoas e que escreva a média artimética dos seus IMCs.

let peso1 = 80
let peso2 = 70
let peso3 = 60

let altura1 = 1.85
let altura2 = 1.65
let altura3 = 1.95

function IMC(peso, altura){
    return (peso / (altura**2))
}


let IMC1 = IMC(peso1, altura1)
let IMC2 = IMC(peso2, altura2)
let IMC3 = IMC(peso3, altura3)


console.log ("Mostre o IMC1: ", IMC(peso1, altura1).toFixed(2));
console.log ("Mostre o IMC2: ", IMC(peso2, altura2).toFixed(2));
console.log ("Mostre o IMC3: ", IMC(peso3, altura3).toFixed(2));

function media(IMC1, IMC2, IMC3){
    return ((IMC1 + IMC2 + IMC3)/3)
}
console.log('Mostre o resultado da media: ', media(IMC1, IMC2, IMC3).toFixed(2));



