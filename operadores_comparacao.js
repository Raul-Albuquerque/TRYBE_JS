// === igualdade entre dois valores
// !== difença entre dois valores
// > maior que < menor que
// >= maior ou igual ou <= menor ou igual

//exercício
/*
    Faça um algoritmo para verificar se as duas peças de que precisa, caberão no seu orçamento.

    a. Crie duas variáveis roupa1 e roupa2:

    Na variável chamada de roupa1, você vai adicionar o valor 35;
    Na variável chamada de roupa2, você vai adicionar o valor 20;
    b. Crie a variável compras:

    Atribua a ela o valor da soma entre roupa1 e roupa2;
    c. Crie uma variável chamada orcamento:

    Verifique se compras é menor ou igual a 60 e atribua o retorno a variável orcamento.
*/

roupa1 = 35;
roupa2 = 20;

compras = roupa1 + roupa2;
orcamento = compras <= 60;

//Exercício 2

/*
    Nesse exercício você vai desenvolver um programa capaz de verificar duas idades.

    a. Crie as variáveis idadeDaThays e idadeDoDouglas:

    Crie uma variável chamada idadeDaThays e atribua o valor 53;
    Crie uma variável chamada idadeDoDouglas e atribua o valor 49;
    b. Compare as idades, armazenando o resultado das comparações:

    Siga o padrão para o nome das variáveis que armazenarão as comparações comparacaoN, onde N é o número da comparação.

    comparacao1: Compare se idadeDaThays é maior que idadeDoDouglas;
    comparacao2: Compare se idadeDoDouglas é menor que idadeDaThays.
*/
idadeDaThays = 53;
idadeDoDouglas = 49;

comparacao1 = idadeDaThays > idadeDoDouglas;
comparacao2 = idadeDoDouglas < idadeDaThays;

// Exercício 3
/*
    Verifique as variáveis abaixo e valide as seguintes afirmações utilizando os operadores condicionais:
    let nomePessoa1 = 'Cleyton';
    let nomePessoa2 = 'Sheila';
    let idadePessoa1 = 30;
    let idadePessoa2 = 18;

    a. Crie as variáveis para armazenar as seguintes comparações:

    comparacao3: compare se o nome da pessoa 1 é diferente de Sheila;
    comparacao4: compare se a idade da pessoa 1 é igual a 18;
    comparacao5: compare se o nome da pessoa 2 é igual a Cleyton;
    comparacao6: compare se a idade da pessoa 2 é diferente de 30.
*/
let nomePessoa1 = 'Cleyton';
let nomePessoa2 = 'Sheila';
let idadePessoa1 = 30;
let idadePessoa2 = 18;

comparacao3 = nomePessoa1 !== 'Sheila';
comparacao4 = idadePessoa1 === 18;
comparacao5 = nomePessoa2 === 'Cleyton';
comparacao6 = idadePessoa2 !== 30; 