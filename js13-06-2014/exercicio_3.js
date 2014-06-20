//Escreva uma função isVowel(vowel) que retorne true se a letra
//informada for uma vogal.
function isVowel(vowel) {
  var letra = vowel.toLoweCase();
  return ("aeiou".indexOf(letra) >= 0);
}