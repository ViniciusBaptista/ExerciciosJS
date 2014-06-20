//Escreva uma função isVowel(vowel) que retorne true se a letra
//informada for uma vogal.

function isVowel(vowel) {
  var vogais = ["a", "e", "i", "o", "u"];
  for(var i = 0; i < vogais.length; i++) {
    if(vowel === vogais[i]){
      return true;
    }
  }
  return false;
}
isVowel();