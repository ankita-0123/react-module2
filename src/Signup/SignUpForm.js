import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Econtext from '../store/ecom-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignupForm = () => {
    const ctx = useContext(Econtext);
    const Navigate = useNavigate();
    const [isLoding, setIsLoading] = useState(false)
    // Initialize state for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        if (password === confirmPassword) {
            try {
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMVMlJGVr5W6vDo4rp8KsbOnJs3V7um7g', {
                    email: email, password: password, returnSecureToken: true
                })
                const emailId = response.data.email.split('@')[0];
                ctx.login(response.data.idToken, emailId)
                Navigate('/')
            } catch (error) {
                alert(error.response.data.error.message)
            }
        } else {
            alert("Password and Confirm Password do not match")
        }
        setIsLoading(false)
    };

    return (
        <Container className='mt-5 shadow w-75' fluid>
            {isLoding && <p>Loading...</p>}
            {!isLoding &&
                <Form className='text-center' onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Button variant="secondary" type="submit">
                        Sign up
                    </Button>
                </Form>}
        </Container>
    );
};

export default SignupForm;