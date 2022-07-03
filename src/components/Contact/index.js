// Contact Form Component
import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value });
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" data-testid="submit-btn">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;

 // This function will sync the internal state of the component formState with the user input from the DOM.
 // we're using the setFormState function to update the formState value for the name property. We assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name.
    // We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.