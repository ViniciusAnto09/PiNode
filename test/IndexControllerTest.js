var IndexController = require("../app/controllers/IndexController")()
var expect = require("expect");

describe("IndexController", function() {
	it("Espero quando passar 2 e 3 retorne 5", function() {
		var retorno = IndexController.somar2Num(2,3);
		var esperado = 5;
		
		expect(retorno).toEqual(esperado);
		
		
	});
	
	it("Espero quando passar 3 e 2 retorne 1", function() {
		var retorno = IndexController.subtrair2Num(3,2);
		var esperado = 1;
		
		expect(retorno).toEqual(esperado);
		
	})
	
	it("Espero quando passar 2 e 3 retorne 6", function() {
		var retorno = IndexController.multiplicar2Num(2,3);
		var esperado = 6;
		
		expect(retorno).toEqual(esperado);
		
		
	})
});
