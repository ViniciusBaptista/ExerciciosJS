//Escreva uma função scramble(text) que retorna um texto bagunçado
//randomicamente
function scramble(text){
  var text1 = text.split(" ");
  text1.reverse();
  return text1;
}