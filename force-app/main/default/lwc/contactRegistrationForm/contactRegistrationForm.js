import { LightningElement, track } from 'lwc';
import saveContact from '@salesforce/apex/ContactController.saveContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactRegistrationForm extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track mobile = '';
    @track email = '';
    @track designation = '';

    handleInputChange(event) {
        const field = event.target.dataset.field;
        this[field] = event.target.value;
    }

    handleReset() {
        this.firstName = '';
        this.lastName = '';
        this.mobile = '';
        this.email = '';
        this.designation = '';
        // Clear validity on all inputs
        const inputs = this.template.querySelectorAll('lightning-input');
        inputs.forEach(input => {
            input.value = '';
            input.setCustomValidity('');
            input.reportValidity();
        });
    }

    handleSubmit() {
        const allValid = [
            ...this.template.querySelectorAll('lightning-input'),
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);

        if (allValid) {
            const contact = {
                FirstName: this.firstName,
                LastName: this.lastName,
                MobilePhone: this.mobile,
                Email: this.email,
                Title: this.designation,
                sobjectType: 'Contact'
            };

            saveContact({ con: contact })
                .then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Contact saved successfully',
                            variant: 'success'
                        })
                    );
                    this.handleReset();
                })
                .catch(error => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error saving contact',
                            message: error.body.message,
                            variant: 'error'
                        })
                    );
                });
        }
    }
}
