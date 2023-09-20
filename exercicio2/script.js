// # Exercício 2
// Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.
// Exemplo com entrada **`7`**:
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
let pergunta = +(prompt('Informe um número para a tabuada'))
for (let index = 1; index <= 10; index++) {
  console.log(`${index} x ${pergunta} = ${index * pergunta}`); 
}
