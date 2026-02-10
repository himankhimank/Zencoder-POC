import { LightningElement, track } from 'lwc';
import registerContact from '@salesforce/apex/ContactRegistrationController.registerContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactRegistrationForm extends LightningElement {
    @track contactRecord = {
        FirstName: '',
        LastName: '',
        MobilePhone: '',
        Email: '',
        Title: ''
    };

    handleInputChange(event) {
        const field = event.target.name;
        this.contactRecord[field] = event.target.value;
    }

    handleReset() {
        this.contactRecord = {
            FirstName: '',
            LastName: '',
            MobilePhone: '',
            Email: '',
            Title: ''
        };
        const inputs = this.template.querySelectorAll('lightning-input');
        inputs.forEach(input => {
            input.value = '';
            input.setCustomValidity('');
            input.reportValidity();
        });
    }

    handleSubmit() {
        const isInputsCorrect = [...this.template.querySelectorAll('.validate')]
            .reduce((validSoFar, inputField) => {
                inputField.reportValidity();
                return validSoFar && inputField.checkValidity();
            }, true);

        if (isInputsCorrect) {
            registerContact({ contactRecord: this.contactRecord })
                .then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Contact registered successfully',
                            variant: 'success'
                        })
                    );
                    this.handleReset();
                })
                .catch(error => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error creating record',
                            message: error.body ? error.body.message : 'Unknown error',
                            variant: 'error'
                        })
                    );
                });
        }
    }
}
