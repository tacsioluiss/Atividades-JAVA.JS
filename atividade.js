let a = 5;
let b = 10;
let c = a;
a = b;
b = c;

console.log ("a=",a); // Deve ser 5
console.log ("b=",b); // Deve ser 10
console.log ("c=",c); // Valor auxilixar 

// Atividade 2
let maioridade = 18;
let idade = 17;

function ehMaiorDeIdade (idade){
    return idade >= maioridade
}
console.log(ehMaiorDeIdade(19)); // true
console.log(ehMaiorDeIdade(12)); // false

//              Atividade 3
// criar uma função que receba 'true' se estiver entre 10 e 50

let min = 10;
let max=  50;
let numero = 32;

function estaNoIntervalo(numero){ numero <= intervalo
resultado = numero > min && numero < max;
return resultado
}

    console.log(estaNoIntervalo(10)); //true
    console.log(estaNoIntervalo(50)); //false

