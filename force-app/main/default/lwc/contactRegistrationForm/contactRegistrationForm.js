import { LightningElement, track } from 'lwc';
import saveContact from '@salesforce/apex/ContactRegistrationController.saveContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactRegistrationForm extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track mobile = '';
    @track email = '';
    @track designation = '';

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    handleMobileChange(event) {
        this.mobile = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleDesignationChange(event) {
        this.designation = event.target.value;
    }

    handleReset() {
        this.firstName = '';
        this.lastName = '';
        this.mobile = '';
        this.email = '';
        this.designation = '';
        
        // Reset validation state
        const inputFields = this.template.querySelectorAll('.validate');
        if (inputFields) {
            inputFields.forEach(field => {
                field.value = '';
                field.setCustomValidity('');
                field.reportValidity();
            });
        }
    }

    handleSubmit() {
        const isInputsCorrect = [...this.template.querySelectorAll('.validate')]
            .reduce((validSoFar, inputField) => {
                inputField.reportValidity();
                return validSoFar && inputField.checkValidity();
            }, true);

        if (isInputsCorrect) {
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
                        message: 'Contact record created successfully',
                        variant: 'success'
                    })
                );
                this.handleReset();
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
        }
    }
}
