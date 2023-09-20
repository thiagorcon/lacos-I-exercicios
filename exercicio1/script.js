// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let pergunta 
let conta = 0
let quantidade = 0
while (pergunta !== "n") { 
  
  //alert(`Sua conta está em ${conta}`)
  pergunta = prompt(`Deseja comer coxinhas ? \n (s) - para sim \n (n) - Para não`)
  conta = conta + 2.50
  quantidade = quantidade + 1
  alert(`Voce comeu ${quantidade} e sua conta está em ${conta}`)
  
}

alert(`Voce fechou a conta: forma compradas ${quantidade} e sua conta a pagar ficou em  R$ ${conta}`)
