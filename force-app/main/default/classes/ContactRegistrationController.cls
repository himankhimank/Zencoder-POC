public with sharing class ContactRegistrationController {
    @AuraEnabled
    public static void saveContact(String firstName, String lastName, String mobile, String email, String designation) {
        try {
            Contact newContact = new Contact();
            newContact.FirstName = firstName;
            newContact.LastName = lastName;
            newContact.MobilePhone = mobile;
            newContact.Email = email;
            newContact.Title = designation;
            
            insert newContact;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
