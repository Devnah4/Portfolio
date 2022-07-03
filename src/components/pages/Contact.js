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
        <form className="form">
            <input name="email" type="email" placeholder="email" onChange={handleInputChange}></input>
            <input name="name" type="text" placeholder="name" onChange={handleInputChange}></input>
            <input name="message" type="text" placeholder="message" onChange={handleInputChange}></input>
            <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
        </div>
        )}
        </div>
    )
}