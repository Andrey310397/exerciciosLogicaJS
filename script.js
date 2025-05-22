// Inversor de Valores:


// Crie uma função chamada inverterValores que recebe duas variáveis, a e b.
// A função deve trocar os valores de a e b entre si.
// Dica: Você precisará de uma terceira variável temporária.
// Exemplo: Se a = 'laranja' e b = 'limao', após chamar inverterValores(a, b), a deve ser 'limao' e b deve ser 'laranja'. (Lembre-se que você precisará usar console.log dentro da função para mostrar a troca ou retornar um array [a, b]).

function inverterValores(val1, val2) {
    let temp = val1;
    val1 = val2;
    val2 = temp;
    return [val1, val2];
}

let a = 'laranja';
let b = 'limão';

console.log('Antes da função:');
console.log('A:', a);
console.log('B:', b);

let valoresTrocados = inverterValores(a, b);

a = valoresTrocados[0];
b = valoresTrocados[1];

console.log('\nDepois da função:');
console.log('A:', a);
console.log('B:', b);