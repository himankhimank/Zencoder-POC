@isTest
public class ContactControllerTest {
    @isTest
    static void testSaveContactSuccess() {
        Test.startTest();
        ContactController.saveContact('John', 'Doe', '1234567890', 'john.doe@test.com', 'Manager');
        Test.stopTest();
        
        List<Contact> contacts = [SELECT Id, FirstName, LastName, MobilePhone, Email, Title FROM Contact WHERE LastName = 'Doe'];
        System.assertEquals(1, contacts.size(), 'Contact should be saved');
        System.assertEquals('John', contacts[0].FirstName);
        System.assertEquals('1234567890', contacts[0].MobilePhone);
        System.assertEquals('john.doe@test.com', contacts[0].Email);
        System.assertEquals('Manager', contacts[0].Title);
    }

    @isTest
    static void testSaveContactFailure() {
        try {
            Test.startTest();
            // Failing by missing mandatory Last Name
            ContactController.saveContact('John', null, '1234567890', 'john.doe@test.com', 'Manager');
            Test.stopTest();
            System.assert(false, 'Should have thrown an exception');
        } catch (AuraHandledException e) {
            System.assert(true);
        } catch (Exception e) {
            System.assert(true);
        }
    }
}
