describe('Address Book', function()  {

	var addressBook, 
		contact; 
 

	//<!-- looks like a initiator like beforeEach-->
	beforeEach(function() {
		addressBook = new AddressBook(); 
		contact = new Contact(); 
	});


	it ('should be alble to add a contact', function() { 
 			
 			addressBook.addContact(contact); 
			expect(addressBook.getContact(0)).toBe(contact); 
	});

	it ('should be able to delete a contact', function() { 

			addressBook.addContact(contact); 
			addressBook.deleteContact(0); 

			expect(addressBook.getContact(0)).not.toBeDefined(); 
	});  

	//<!-- testing on async function -->
	describe ('Async Address Book', function () {
		var addressBook = new AddressBook(); 

		beforeEach(function(done) {
			addressBook.getInitialContacts(function() {
				done();    // signal framework that async func is done
			});
		});

		it ('should grab initial contacts', function (done) { 
				expect(addressBook.initialComplete).toBe(true); 
				done(); 
		}); 
	});

}); 



