//function 

/*
    function nomeDaFuncao(){
        return bloco a ser executado
    }

    nomeDaFuncao() -> tem que chamar a função no final
*/

function imprimeSaudacao() {
    return 'Olá, Gisele!';
}

imprimeSaudacao()

// função com parâmetro

function imprimeSaudacao(parametro){
    return parametro;
}

console.log(imprimeSaudacao("Olá, Giesele!"));

//Exercício 1

/*
    Crie uma função que exiba a frase: Vamo que vamo! 🚀
    Crie uma função mostrarFrase que retorne a frase ‘Vamo que vamo!’ quando chamada.
*/

function mostrarFrase() {
    return 'Vamo que vamo!';
  }
mostrarFrase()

/*
  Crie uma função saudacao que recebe um parâmetro nome e mostre uma mensagem de saudação, por exemplo: 'Olá, Julia!'.
*/
function saudacao(nome){
    return 'Olá, ' + nome + '!';
  }
saudacao('Júlia');
