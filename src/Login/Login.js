import React, { useRef, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Econtext from "../store/ecom-context";
import axios from "axios";
const Login = () => {
    const ctx = useContext(Econtext)
    const history = useNavigate()
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const LoginHandler = async (e) => {
        e.preventDefault();
        const enterdEmail = emailInputRef.current.value;
        const enterdPassword = passwordInputRef.current.value;
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUcMpZhIH9IhfUQu4cL9wR9xexXHEaAKw', {
                email: enterdEmail, password: enterdPassword, returnSecureToken: true
            })
            const nameId = response.data.email.split('@')[0];
            ctx.login(response.data.idToken, nameId)
            history(`/Login/Product/${response.data.idToken}`)
        }
        catch (error) {
            alert(error.response.data.error.message)
        }
    }

    return (
        <>
            <Container className="mt-5 w-75 shadow" fluid>
                <Form className='text-center' onSubmit={LoginHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </>
    )
}
export default Login;
