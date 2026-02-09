import { LightningElement } from 'lwc';
import saveContact from '@salesforce/apex/ContactController.saveContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactRegistrationForm extends LightningElement {
    handleReset() {
        const inputs = this.template.querySelectorAll('lightning-input');
        inputs.forEach(input => {
            input.value = '';
        });
    }

    handleSubmit() {
        const isInputsCorrect = [...this.template.querySelectorAll('.validate')]
            .reduce((validSoFar, inputField) => {
                inputField.reportValidity();
                return validSoFar && inputField.checkValidity();
            }, true);

        if (isInputsCorrect) {
            const firstName = this.template.querySelector('[data-id="FirstName"]').value;
            const lastName = this.template.querySelector('[data-id="LastName"]').value;
            const mobile = this.template.querySelector('[data-id="Mobile"]').value;
            const email = this.template.querySelector('[data-id="Email"]').value;
            const designation = this.template.querySelector('[data-id="Designation"]').value;

            saveContact({ firstName, lastName, mobile, email, designation })
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
                            title: 'Error creating record',
                            message: error.body.message,
                            variant: 'error'
                        })
                    );
                });
        }
    }
}
