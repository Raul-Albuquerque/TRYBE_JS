// if -> se
// else -> se não
// se tiver várias condições, vamos usar o else if

/*
    if (condição) {
        o que será executado
    } else if (condicao2) {
        se o if for false a condiçao2 for verdadeira, vai ser executado isso
    } else {
        se as condições acima forem falsas, vai ser executado isso
    }
*/

//Exercício 1
/*
    Uma operação de comparação na condicional if que verifique se o valor da variável lampada é igual a 'ligada';
    Uma condicional else que verifique se, caso o valor da variável lampada não for igual a ‘ligada’, então a variável estadoLampada receberá a string 'A lâmpada está desligada!'.
*/

let lampada = 'ligada';
let estadoLampada;

function ifElseExercise() {
  if (lampada == 'ligada') {
    estadoLampada = 'A lâmpada está ligada!';
  } else {
    estadoLampada = 'A lâmpada está desligada!';
  }
}



