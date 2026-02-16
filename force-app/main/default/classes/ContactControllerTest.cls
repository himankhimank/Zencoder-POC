@isTest
private class ContactControllerTest {
    @isTest
    static void testSaveContact() {
        Contact con = new Contact(
            FirstName = 'Test',
            LastName = 'User',
            MobilePhone = '1234567890',
            Email = 'test@example.com',
            Title = 'Developer'
        );
        
        Test.startTest();
        ContactController.saveContact(con);
        Test.stopTest();
        
        Contact insertedCon = [SELECT Id, FirstName, LastName, MobilePhone, Email, Title FROM Contact WHERE LastName = 'User' LIMIT 1];
        System.assertEquals('Test', insertedCon.FirstName, 'First Name should match');
        System.assertEquals('User', insertedCon.LastName, 'Last Name should match');
        System.assertEquals('1234567890', insertedCon.MobilePhone, 'Mobile should match');
        System.assertEquals('test@example.com', insertedCon.Email, 'Email should match');
        System.assertEquals('Developer', insertedCon.Title, 'Designation (Title) should match');
    }

    @isTest
    static void testSaveContactError() {
        // Trigger an error by not providing mandatory LastName
        Contact con = new Contact(FirstName = 'Test');
        
        try {
            Test.startTest();
            ContactController.saveContact(con);
            Test.stopTest();
            System.assert(false, 'Exception should have been thrown');
        } catch (AuraHandledException e) {
            System.assert(true, 'Expected exception was thrown');
        }
    }
}
