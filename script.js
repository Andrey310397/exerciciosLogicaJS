// Verificador de Idade:

// Crie uma função chamada podeDirigir que recebe a idade de uma pessoa como parâmetro.
// Se a idade for igual ou maior que 18, retorne true. Caso contrário, retorne false.
// Exemplo: podeDirigir(17) deve retornar false. podeDirigir(18) deve retornar true.
podeDirigir(18);

function podeDirigir(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}