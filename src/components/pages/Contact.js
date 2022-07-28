import React, {useState} from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!name || !email || !message) {
            setErrorMessage('Please fill out all fields');
        } else {
            alert(`Thanks for you message ${name}!`);
            // Makes error disappear after submission
            setErrorMessage('');
        }
    }

    function handleInputChange(event) {
        const inputValue = event.target.value;
        const inputType = event.target.name;

        if (inputType === 'email') {
            setEmail(inputValue)
        } else if  (inputType === 'name') {
            setName(inputValue)
        } else {
            setMessage(inputValue)
        }
    }

    return (
        <div>
            <h1>Contact Me!</h1>
            <h2>Coming Soon!</h2>
        <form >
            <div className="container form-group justify-content-center">
            <input name="email" type="email" placeholder="email" onChange={handleInputChange}></input>
            <input name="name" type="text" placeholder="name" onChange={handleInputChange}></input>
            <textarea name="message" defaultValue={message} onBlur={handleInputChange} rows="5" />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
            </div>
        </form>
        {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
        </div>
        )}
        </div>
    )
}