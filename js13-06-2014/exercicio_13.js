/* Crie uma função construtora Rect(width, height) que representa um
retângulo. Crie funções de instância que retornam a área, perímetro e
diagonal do retângulo representado. Use as fórmulas abaixo:

area = width * height
perimeter = 2 * width + 2 * height
diagonal = √(width2 + height2)*/

function Rect(width, height) {
	this.width = width;
	this.height =  height;
}

Rect.prototype.area = function() {
	return this.width * this.height;
};

Rect.prototype.perimeter = function() {
	return 2 * this.width * this.height;
};

Rect.prototype.diagonal = function() {
	return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.width, 2)); 
};