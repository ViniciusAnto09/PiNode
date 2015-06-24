module.exports = function( app ) {
    var controller = {
    
		direcionarIndex : function(	request, response ){
			response.render("index",{
				mensagem: "Hello Word"
			});
		},
		
		direcionarMeuNome : function(request, response){
			response.render("meu-nome");
		},
		
		meuNome : function(	request, response ){
			var nome = request.body.nome;
			
			response.render( "meu-nome",{
				"nome" : nome
			});
		},
		
		direcionarSomar : function(request, response){
			response.render("somar");
		},
		
		somar : function(	request, response ){	
			var num1 = parseInt(request.body.num1);
			var num2 = parseInt(request.body.num2);
			var resultado = controller.somar2Num(num1,num2);
			response.render( "somar" , {
				"resultado" : resultado
			});
		},
		
		somar2Num : function(num1,num2){
			return num1 + num2;
		},
		
		direcionarSubtrair : function(request, response){
			response.render("subtrair");
		},
		
		subtrair : function(	request, response ){	
			var num1 = parseInt(request.body.num1);
			var num2 = parseInt(request.body.num2);
			var resultado = controller.subtrair2Num(num1,num2);
			response.render( "subtrair" , {
				"resultado" : resultado
			});
		},
		
		subtrair2Num : function(num1,num2){
			return num1 - num2;
		}
	};
    
    return controller;
};
