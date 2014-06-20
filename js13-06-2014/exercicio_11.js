//Escreva uma função scramble(text) que retorna um texto bagunçado
//randomicamente

function scramble(text) {
  return text.split(" ").reverse().join(" ");
}