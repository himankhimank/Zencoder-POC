@isTest
private class ContactRegistrationControllerTest {
    @isTest
    static void testRegisterContactSuccess() {
        Contact con = new Contact(
            FirstName = 'Test',
            LastName = 'User',
            MobilePhone = '1234567890',
            Email = 'test@example.com',
            Title = 'Developer'
        );
        
        Test.startTest();
        ContactRegistrationController.registerContact(con);
        Test.stopTest();
        
        List<Contact> contacts = [SELECT Id, FirstName, LastName, Email FROM Contact WHERE Email = 'test@example.com'];
        Assert.areEqual(1, contacts.size(), 'Contact should be created');
        Assert.areEqual('Test', contacts[0].FirstName, 'First Name should match');
        Assert.areEqual('User', contacts[0].LastName, 'Last Name should match');
    }

    @isTest
    static void testRegisterContactError() {
        // Missing required field LastName should cause an error during insert
        Contact con = new Contact(
            FirstName = 'Test'
        );
        
        Test.startTest();
        try {
            ContactRegistrationController.registerContact(con);
            Assert.fail('Expected AuraHandledException');
        } catch (AuraHandledException e) {
            Assert.isNotNull(e.getMessage(), 'Error message should not be null');
        }
        Test.stopTest();
    }
}
