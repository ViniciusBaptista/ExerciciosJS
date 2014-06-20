//Escreva uma função chamada findLongestWord(words) que retorna a
//maior palavras baseada na quantidade de caracteres.

function findLongestWords(words) {
  var texto = words.split(" ");
  var x = 0
  var text;
  for (var i = 0; i < texto.length; i++) {
    if(x <= texto.length){
      text = texto[i];
    }
  }
  return text;
}