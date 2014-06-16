/*Crie uma funções construtora Account que implementa a seguinte API:

Account(description, balance);
Account.prototype.withdraw(amount);
Account.prototype.deposit(amount);
Account.prototype.transfer(amount, account);

Lance uma exceção com a palavra-chave throw caso uma retirada tente ser
realizada em uma conta sem saldo.*/

function Account(description, balance) {
	this.description = description;
	this.balance = balance;
}

Account.prototype.withdraw = function(amount) {
	if(amount > this.balance){
		console.log("Saldo para saque insuficiente!")
	}
	return this.balance -= amount;
}

Account.prototype.deposit = function(amount) {
	return this.balance += amount;
}

Account.prototype.transfer = function(amount, account) {
	account.deposit(amount);
	return this.withdraw(amount);
}