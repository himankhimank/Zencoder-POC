public with sharing class ContactRegistrationController {
    @AuraEnabled
    public static void saveContact(String firstName, String lastName, String mobile, String email, String designation) {
        // CRUD check
        if (!Schema.sObjectType.Contact.isCreateable()) {
            throw new AuraHandledException('You do not have permission to create Contact records.');
        }

        Contact con = new Contact(
            FirstName = firstName,
            LastName = lastName,
            MobilePhone = mobile,
            Email = email,
            Title = designation
        );

        try {
            insert con;
        } catch (Exception e) {
            throw new AuraHandledException('Error saving contact: ' + e.getMessage());
        }
    }
}