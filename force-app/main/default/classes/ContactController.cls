public with sharing class ContactController {
    @AuraEnabled
    public static void saveContact(String firstName, String lastName, String mobile, String email, String designation) {
        try {
            Contact con = new Contact();
            con.FirstName = firstName;
            con.LastName = lastName;
            con.MobilePhone = mobile;
            con.Email = email;
            con.Title = designation;
            insert con;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
