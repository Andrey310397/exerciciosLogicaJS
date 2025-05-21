// 1. Comparador de números:
// Crie uma função chamada maiorNumero que recebe dois números como parâmetros.
// Ela deve retornar o maior entre eles. Se forem iguais, retorne uma mensagem como "Os números são iguais!".

numMaior(2, 2);

function numMaior(n1, n2) {
    if (n1 > n2) {
        console.log('Número 1 é o maior');
    } else if (n2 > n1) {
        console.log('Número 2 é o maior');
    } else {
        console.log('Os números são iguais!');
    }
}