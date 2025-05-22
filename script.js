// Calculador de IMC:

// Crie uma função chamada calcularIMC que recebe peso (em kg) e altura (em metros) como parâmetros.
// A função deve calcular o Índice de Massa Corporal (IMC) usando a fórmula: $IMC = peso / (altura \* altura)$.
// Retorne o valor do IMC.
// Exemplo: calcularIMC(70, 1.75) deve retornar aproximadamente 22.85.

calcularIMC(70, 1.75);

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    console.log(imc);
}