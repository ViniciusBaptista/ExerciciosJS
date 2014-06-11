//Escreva uma função chamada findLongestWord(words) que retorna a
//maior palavras baseada na quantidade de caracteres.

function findLongestWord(words) {
  var bla = words.split(" ");
  var x = 0
  var word;
  for (var i = 0; i < bla.length; i++) {
  	if (x < bla[i].length) {
  	  x = bla[i].length;
  	  word = bla[i];
  	};
  };
  return word;
}
