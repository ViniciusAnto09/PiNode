module.exports = function( app ) {
    var controller = app.controllers.IndexController;
    
    app.route("/")
		.get( controller.direcionarIndex );
		
	app.route("/meuNome")
		.get(controller.direcionarMeuNome)
		.post(controller.meuNome);
		
	app.route("/somar")
		.get(controller.direcionarSomar)
		.post(controller.somar);
	
	app.route("/subtrair")
		.get(controller.direcionarSubtrair)
		.post(controller.subtrair);
};
