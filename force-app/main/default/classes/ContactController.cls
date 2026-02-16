public with sharing class ContactController {
    @AuraEnabled
    public static void saveContact(Contact con) {
        try {
            insert con;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
