
	var app = angular.module('ngContact');

		function appController() {
		console.log("App Component loaded")
		var vm = this;

			
		}
		
	app.component('appComponent', {

		template : `<contact-component></contact-component>`,

		controller : appController
	
	});