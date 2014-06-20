//Escreva uma função titleize(text) que converte cada primeira letra de cada
//palavra em maiúsculas.
//titleize("this IS just A tExT"); // This Is Just A Text.

function titleize(text) {
  var texto = text.split(" ");
  var array = [];
  for (var i = 0; i < texto.length; i++) {
    array.push(texto[i].charAt(0).toUpperCase()+ (texto[i].toLowerCase().slice(1));
  }
  return array.join(" ");
}