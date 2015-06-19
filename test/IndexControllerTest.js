var IndexController = require("../app/controllers/IndexController")()
var expect = require("expect");

describe("IndexController", function() {
	it("Espero quando passar 2 e 3 retorne 5", function() {
		var retorno = IndexController.somar2Num(2,3);
		var esperado = 5;
		
		expect(retorno).toEqual(esperado);
		
		
	});
});
