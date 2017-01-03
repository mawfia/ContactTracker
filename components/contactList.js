	var app = angular.module('ngContact'); 
	
		function contactList(contactService) {
			console.log("loaded")
			var vm = this;
			vm.contacts = contactService.getContacts();
			vm.contactID = 0;
		
			vm.destroy = function(contact){
				contactService.deleteContact(contact);
			}
			
			vm.selectContact = function(contact){				
				console.log("update clicked for: "+ vm.contactID);
				if(vm.contactID > 0) vm.contactID = 0;
				else if(vm.contactID === 0) vm.contactID = contact.id;
			}
			
			vm.updateContact1 = function(contact){
				if(contact.id === vm.contactID) return true;
				else return false;
			}
			
			vm.updateContact2 = function(contact){
				contactService.updateContact(contact);
				vm.selectContact(contact);
			}
			
		}
		
	app.component('contactList', {

		template : `
			<div class="col-md-8 col-md-offset-2 container-fluid">
				<div class="row">
					<div class="col-md-4" ng-repeat="contact in $ctrl.contacts">
						<table class="table">
							<thead></thead>
							<tbody>
								<tr ng-show="!$ctrl.updateContact1(contact)"><td><h4><b>{{contact.fname}} {{contact.mname}} {{contact.lname}}</b></h4></td></tr>
								<tr ng-show="$ctrl.updateContact1(contact)"><td><div class="form-group row">
									<div class="col-md-4"><input class="form-control" type="text" ng-model="contact.fname"></div>
									<div class="col-md-4"><input class="form-control" type="text" ng-model="contact.mname"></div>
									<div class="col-md-4"><input class="form-control" type="text" ng-model="contact.lname"></div>
								</div></td></tr>
								
								<tr ng-show="!$ctrl.updateContact1(contact)"><td>{{contact.email}}</td></tr>
								<tr ng-show="$ctrl.updateContact1(contact)"><td><div class="form-group row">
									<div class="col-md-12"><input class="form-control" type="email" ng-model="contact.email"></div>
								</div></td></tr>
								
								<tr ng-show="!$ctrl.updateContact1(contact)"><td>({{contact.phone.slice(0,3)}}) {{contact.phone.slice(3,6)}}-{{contact.phone.slice(6,10)}}</td></tr>
								<tr ng-show="$ctrl.updateContact1(contact)"><td><div class="form-group row">
									<div class="col-md-12"><input class="form-control" type="tel" ng-model="contact.phone"></div>
								</div></td></tr>
								
								<tr ng-show="!$ctrl.updateContact1(contact)"><td>{{contact.address.street}}</td></tr>
								<tr ng-show="$ctrl.updateContact1(contact)"><td><div class="form-group row">
									<div class="col-md-12"><input class="form-control" type="text" ng-model="contact.address.street"></div>
								</div></td></tr>
								
								<tr ng-show="!$ctrl.updateContact1(contact)"><td>{{contact.address.city}}, {{contact.address.state}} {{contact.address.zipcode}}</td></tr>
								<tr ng-show="$ctrl.updateContact1(contact)"><td><div class="form-group row">
									<div class="col-md-4"><input class="form-control" type="text" ng-model="contact.address.city"></div>
									<div class="col-md-4"><input class="form-control" type="text" ng-model="contact.address.state"></div>
									<div class="col-md-4"><input class="form-control" type="text" ng-model="contact.address.zipcode"></div>
								</div></td></tr>
								
								<tr ng-show="!$ctrl.updateContact1(contact)"><td><button type="input" class="btn btn-primary col-md-6" ng-click="$ctrl.destroy(contact)" focus>Delete</button>
										<button type="input" class="btn btn-primary col-md-6" ng-click="$ctrl.selectContact(contact)" >Update</button></td></tr>
								<tr ng-show="$ctrl.updateContact1(contact)"><td><button type="input" class="btn btn-primary col-md-6" ng-click="$ctrl.updateContact2(contact)" focus>Submit</button>
										<button type="input" class="btn btn-primary col-md-6" ng-click="$ctrl.selectContact(contact)" >Cancel</button></td></tr>
							</tbody>
							<tfoot></tfoot>
						</table>
					</div>
				<div>
			</div>
		`,

		controller : contactList,
		
			bindings : {
			contacts: '=',
		}
	
	});