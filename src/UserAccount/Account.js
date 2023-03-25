import React, { useContext } from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import Econtext from '../store/ecom-context';
import user from '../Images/user.png';
const Account = () => {
    const ctx = useContext(Econtext)
    return (
        <Container className='d-flex justify-content-center '>
            <Card>
                <Card.Body>
                    <Image src={user} roundedCircle />
                    <Card.Title>Profile</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{ctx.email}</Card.Subtitle>
                    <Card.Text>{ }</Card.Text>
                    <Card.Link href=''></Card.Link>
                </Card.Body>
            </Card>
        </Container>
    );
};
export default Account;