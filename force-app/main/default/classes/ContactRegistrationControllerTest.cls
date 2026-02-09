@isTest
private class ContactRegistrationControllerTest {
    @isTest
    static void testSaveContactSuccess() {
        Test.startTest();
        ContactRegistrationController.saveContact('John', 'Doe', '1234567890', 'john.doe@example.com', 'Manager');
        Test.stopTest();
        
        Contact con = [SELECT Id, FirstName, LastName, MobilePhone, Email, Title FROM Contact WHERE LastName = 'Doe' LIMIT 1];
        System.assertEquals('John', con.FirstName, 'First Name should match');
        System.assertEquals('1234567890', con.MobilePhone, 'Mobile Phone should match');
        System.assertEquals('john.doe@example.com', con.Email, 'Email should match');
        System.assertEquals('Manager', con.Title, 'Title should match');
    }
    
    @isTest
    static void testSaveContactFailure() {
        try {
            Test.startTest();
            // Missing LastName should cause an exception
            ContactRegistrationController.saveContact('John', null, '1234567890', 'john.doe@example.com', 'Manager');
            Test.stopTest();
            System.assert(false, 'Should have thrown an exception');
        } catch (AuraHandledException e) {
            System.assert(true, 'Expected exception caught');
        } catch (Exception e) {
            System.assert(true, 'Expected exception caught');
        }
    }
}
