//Altere a função max() para receber qualquer quantidade de
//argumentos e retornar o maior número dentre eles.

function max() {
  var num = arguments;
  var maximo = num[0];
  for (var i = 0; i < num.length - 1; i++) {
 	maximo = Math.max(maximo, num[i]);
  };
  return maximo;
}
console.log(max());