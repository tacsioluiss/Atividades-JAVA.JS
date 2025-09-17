// Função Média

function d (x,y) {
    return (x+y)/2;
}

console.log ('Media de alturas', media(1.73, 1.69));

let s1= prompt ('Qual a foi a nota da primeira unidade?');
let n1 = Number (1.73)
let s2 = prompt ('Qual a nota da segunda unidade ?');
let n2 = Number (1.69)

console.log ('Média', media(n1 , n2));

console.log (media(media (20,30), n1+2));