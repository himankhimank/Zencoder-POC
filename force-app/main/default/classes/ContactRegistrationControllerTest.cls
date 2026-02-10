@isTest
private class ContactRegistrationControllerTest {
    @isTest
    static void testSaveContactSuccess() {
        Test.startTest();
        ContactRegistrationController.saveContact('John', 'Doe', '1234567890', 'john.doe@example.com', 'Developer');
        Test.stopTest();

        List<Contact> contacts = [SELECT Id, FirstName, LastName, MobilePhone, Email, Title FROM Contact WHERE LastName = 'Doe'];
        Assert.areEqual(1, contacts.size(), 'Contact should have been created');
        Assert.areEqual('John', contacts[0].FirstName);
        Assert.areEqual('1234567890', contacts[0].MobilePhone);
        Assert.areEqual('john.doe@example.com', contacts[0].Email);
        Assert.areEqual('Developer', contacts[0].Title);
    }

    @isTest
    static void testSaveContactFailure() {
        Boolean exceptionThrown = false;
        try {
            Test.startTest();
            // LastName is mandatory in Salesforce
            ContactRegistrationController.saveContact('John', null, '1234567890', 'john.doe@example.com', 'Developer');
            Test.stopTest();
        } catch (AuraHandledException e) {
            exceptionThrown = true;
        }
        Assert.isTrue(exceptionThrown, 'Exception should have been thrown due to missing LastName');
    }
}