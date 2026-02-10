import { LightningElement, track } from 'lwc';
import saveContact from '@salesforce/apex/ContactRegistrationController.saveContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactRegistrationForm extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track mobile = '';
    @track email = '';
    @track designation = '';

    handleInputChange(event) {
        const field = event.target.dataset.id;
        if (field === 'firstName') this.firstName = event.target.value;
        else if (field === 'lastName') this.lastName = event.target.value;
        else if (field === 'mobile') this.mobile = event.target.value;
        else if (field === 'email') this.email = event.target.value;
        else if (field === 'designation') this.designation = event.target.value;
    }

    handleReset() {
        this.firstName = '';
        this.lastName = '';
        this.mobile = '';
        this.email = '';
        this.designation = '';
        // Clear validity styling
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
            saveContact({
                firstName: this.firstName,
                lastName: this.lastName,
                mobile: this.mobile,
                email: this.email,
                designation: this.designation
            })
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact created successfully',
                        variant: 'success'
                    })
                );
                this.handleReset();
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating contact',
                        message: error.body.message || error.message,
                        variant: 'error'
                    })
                );
            });
        }
    }
}