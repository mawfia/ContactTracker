	var app = angular.module('ngContact');
	
	app.factory('contactService', function(){
		
		var contactsCreated = 3;
	  
		var contacts = [
				{id : 1, fname : "George", mname : "", lname : "Washington", email : "gwashington1@whitehouse.gov", phone : "8042241732", address : {street : "1732 Popes Creek Rd", city : "Colonial Beach", state : "VA", zipcode : "22443"}},
				{id : 2, fname : "James", mname : "Earl", lname : "Carter", email : "jecarter39@whitehouse.gov", phone : "2298244104", address : {street : "300 N Bond St", city : "Plains", state : "GA", zipcode : "31780"}},
				{id : 3, fname : "Barak", mname : "Hussein", lname : "Obama", email : "bhobama44@whitehouse.gov", phone : "2024561111", address : {street : "1600 Pennsylvania Ave NW", city : "Washington", state : "DC", zipcode : "20500"}},
			];
	  
		var getContacts = function(){
			return contacts;
		}

		var createContact = function(contact) {
			contact.id = ++contactsCreated;
			contacts.push(contact);
		}

		var deleteContact = function(contact) {
			contacts.splice(contacts.indexOf(contact),1);
			contactsCreated--;
		}

		var updateContact = function(contact) {
			contacts.forEach(function(val) {
				if (val.id === contact.id) {
					val = contact;
					return;
				}
			});
		}

		return {
			getContacts : getContacts,
			createContact : createContact,
			deleteContact : deleteContact,
			updateContact : updateContact
		};
		// return service;
    });