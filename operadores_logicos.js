// && AND -> todas as condições têm que ser verdadeiras
// || OR -> pelo menos uma das condições tem que ser verdadeira
// ! inverte o valor 

//exercício 1
/*
    Neste exercício você vai desenvolver um programa que verifica se um número está no intervalo entre 20 e 50 e se o número é par
    . Abaixo existe uma variável com o número a ser verificado:
    let numero = 30;
    verificar se a variável numero é maior ou igual a 20 e menor ou igual a 50, e se o valor contido nela é par;
    criar uma variável chamada resultado e atribuir o resultado da verificação a ela;
    fazer um console.log do resultado.
*/

let numero = 30;
resultado = numero >= 20 && numero <= 50 && numero % 2 == 0;
console.log(resultado)

//Exercício 2
/*
    Abaixo existem duas variáveis, uma se chama local e a outra estadoEmocional:
    let local = 'praia';
    let estadoEmocional;
    A variável local representa o lugar em que a pessoa está no momento;
    A variável estadoEmocional representa qual o estado emocional da pessoa ao estar nesse local;
    Crie uma lógica para saber o valor de estadoEmocional:

    O valor da variável estadoEmocional deve ser uma verificação se o valor da variável local for igual
    a praia OU a variável local seja igual a cinema;
*/

let local = 'praia';
let estadoEmocional;

estadoEmocional = local == 'praia' || local == 'cinema';






