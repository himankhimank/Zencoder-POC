public with sharing class ContactRegistrationController {
    @AuraEnabled
    public static void registerContact(Contact contactRecord) {
        try {
            if (contactRecord != null) {
                // Ensure the user has permission to create Contact records
                if (!Schema.sObjectType.Contact.isCreateable()) {
                    throw new AuraHandledException('Insufficient permissions to create Contact.');
                }
                
                insert contactRecord;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
