var app = angular.module('ngContact');

		function contactComponent(contactService, STATES_LIST) {
			console.log("Contact component loaded")
			var vm = this;
			vm.contacts = contactService.getContacts();
			vm.states = STATES_LIST.states;
			vm.newContact = {fname : "", mname : "", lname : "", email : "", phone : "", address : {street : "", city : "", state : "", zipcode : ""}};

			vm.addContact = function(){
				contactService.createContact(vm.newContact);
				return vm.newContact = {fname : "", mname : "", lname : "", email : "", phone : "", address : {street : "", city : "", state : "", zipcode : ""}};
			}
			
			vm.setState = function(state){
				vm.newContact.address.state = state.abbreviation;
				console.log(vm.newContact);
			}
			
		}
		
	app.component('contactComponent', {

		template : `
		<div class="row">
			<div class="col-md-8 col-md-offset-2 well"><h2>{{"Ng Contacts"}}<span id="total"> {{$ctrl.contacts.length}} </span></h2></div>
		</div>
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<fieldset class="form-group">
						<legend>New Contact:</legend>
						<form class="form-horizontal">
							<div class="form-group row">
								<label class="col-md-2 col-form-label" for="fname">First Name:</label>
								<div class="col-md-10">
									<input name="fname" class="form-control" type="text" placeholder="First Name" id="fname" ng-model="$ctrl.newContact.fname">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-md-2 col-form-label" for="mname">Middle Name:</label>
								<div class="col-md-10">
									<input name="nmname" class="form-control" type="text" placeholder="Middle Name" id="mname" ng-model="$ctrl.newContact.mname">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-md-2 col-form-label" for="lname">Last Name:</label>
								<div class="col-md-10">
									<input name="lname" class="form-control" type="text" placeholder="Last Name" id="lname" ng-model="$ctrl.newContact.lname">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-md-2 col-form-label" for="email">Email:</label>
								<div class="col-md-10">
									<input name="email" class="form-control" type="email" placeholder="Email" id="email" ng-model="$ctrl.newContact.email">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-md-2 col-form-label" for="phone">Phone Number:</label>
								<div class="col-md-10">
									<input name="phone" class="form-control" type="tel" placeholder="Phone Number" id="phone" ng-model="$ctrl.newContact.phone">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-md-2 col-form-label" for="street">Street Address:</label>
								<div class="col-md-10">
									<input name="street" class="form-control" type="text" placeholder="Street Address" id="street" ng-model="$ctrl.newContact.address.street">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-md-2 col-form-label" for="city">City:</label>
								<div class="col-md-10">
									<input name="city" class="form-control" type="text" placeholder="City" id="city" ng-model="$ctrl.newContact.address.city">
								</div>
							</div>
							<div class="form-group row">
								<label class="col-md-2 col-form-label" for="state">State:</label>
								<div class="col-md-2 dropdown">
									<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select State <span class="caret"></span></button>
										<ul class="dropdown-menu">
											<li ng-repeat="state in $ctrl.states"><a href="#" ng-click="$ctrl.setState(state)">{{state.name}} {{state.abbreviation}}</a></li>
										</ul>
								</div>
								<div class="col-md-1">
									<input name="state" class="form-control" type="text" placeholder="State" id="state" ng-model="$ctrl.newContact.address.state">
								</div>								
							</div><br />
							<div class="form-group row">
								<label class="col-md-2 col-form-label" for="zipcode">Zip Code:</label>
								<div class="col-md-10">
									<input name="zipcode" class="form-control" type="text" placeholder="Zip Code" id="zipcode" ng-model="$ctrl.newContact.address.zipcode">
								</div>
							</div>
							<button type="input" class="btn btn-primary col-md-offset-6" id="addContact" ng-click="$ctrl.addContact()" focus>Add Contact</button>
						</form>
					</fieldset>
			</div>
		<div>
		<contact-List contacts="$ctrl.contacts"></contact-List>
		
		<script>
			$(document).ready(function(){
				$(".dropdown-toggle").dropdown();
			
			});
			
			
		</script>
		`,

		controller : contactComponent,
		
		bindings : {
		}
	
	});