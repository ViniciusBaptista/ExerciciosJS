//Crie uma função letterFrequence(text) que retorne um objeto contendo a
//quantidade de ocorrências de cada caracter presente no texto.

function letterFrequence(text) {
	var obj = {}
	for(var i = 0; i < text.length; i++) {
		var letra = text.charAt(i);
		if(obj[letra]) {
			obj[letra]++;
		} else {
			obj[letra] = 1;
		}
	}
	return obj;
}
