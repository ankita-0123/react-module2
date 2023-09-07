import React, { useState, useRef } from 'react';
import axios from 'axios';
import './ContactUs';

const ContactUs = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  async function DetailsSubmitHandler(event) {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const phone = phoneInputRef.current.value;
    const userObj = { name: name, email: email, phone: phone };

    try {
      await axios.post('https://netflix-ddcaf-default-rtdb.firebaseio.com/', userObj);
      setShowSuccessMessage(true);
      nameInputRef.current.value = '';
      emailInputRef.current.value = '';
      phoneInputRef.current.value = '';
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
      <div className="container mt-5 shadow">
        <h1 className="text-center">Contact Us</h1>

        <form className="text-center" onSubmit={DetailsSubmitHandler}>
          {showSuccessMessage && (
            <div className="alert alert-success" role="alert">
              Your form was submitted successfully!
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" ref={nameInputRef} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" ref={emailInputRef} />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <input type="text" className="form-control" id="phone" ref={phoneInputRef} />
          </div>

          <button className="btn btn-secondary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
