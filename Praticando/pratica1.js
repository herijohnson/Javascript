// 2) O IMC - Indice de Massa Corporal é um critério da OMS para dar uma indicacão sobre a condição do peso de uma pessoa adulta.

// Fórmula do IMC
// IMC = peso / (altura * altura)

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

//IMC
// - Abaixo de 18.5 Abaixo do peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Acima de 40 Obesidade Grave;

const peso = 80;
const altura = 2;
const imc = peso / Math.pow(altura ,2);
console.log(imc);
if (imc < 18.5) {
    console.log('Abaixo do peso.')
} else
    if (imc >= 18.5 && imc < 25) {
        console.log('Peso Normal.')
    } else
        if (imc >= 25 && imc < 30) {
            console.log('Acima do Peso.')
        } else
            if (imc >= 30 && imc <= 40) {
                console.log('Obeso.')
            } else {
                console.log('Obesidade Mórbida.')
            }