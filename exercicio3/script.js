// # Exercício 3
// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
for (let index = 0; index < maioresPaises.length ; index++) {
  //let index1 = index 
  console.log(`${index +1} - ${maioresPaises[index]}`);  
}
