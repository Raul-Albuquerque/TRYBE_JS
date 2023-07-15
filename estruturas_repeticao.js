/* 
    for (expressão inicial; condição ; atualizção da expressão inicial) {
        Código a ser executado
    }
*/

for (let index = 10; index >= 1; index = index -1){
    console.log(index)
}

//por decremento

for (let index = 10; index >= 1; index -= 1){
    console.log(index)
}


/*
    Utilize uma estrutura de repetição para exibir cada item de um array.

    Observe a estrutura abaixo:
    const numeros = [1, 2, 3, 4, 5];
*/

const numeros = [1, 2, 3, 4, 5];
/***** Escreva seu código nas linhas abaixo *****/
for (index = 0; index < numeros.length; index += 1){
  console.log(numeros[index])
};

/*
    Você foi a uma lanchonete e gostaria de comprar um sanduíche, uma batata frita e um refrigerante, mas não sabia se seu dinheiro seria suficiente. Para descobrir se você tem saldo para pagar pelo pedido, some os valores dos produtos:

    Sanduíche - R$ 10;
    Batata frita - R$ 12;
    Refrigerante - R$ 8.
    Os valores dos produtos foram salvos dentro de um array na variável valoresProdutos:
*/
const valoresProdutos = [10, 12, 8];
let somaTotal = 0;

for (index = 0; index < valoresProdutos.length; index += 1){
  somaTotal = somaTotal + valoresProdutos[index]
}
console.log(somaTotal);

