import React, { useContext } from 'react';
import { Navbar, Nav, Badge, Image, NavDropdown, Offcanvas, Container } from 'react-bootstrap';
import Econtext from '../store/ecom-context';
import user from '../Images/user.png';
import { NavLink } from 'react-router-dom';

function WelCome() {
    const ctx = useContext(Econtext);
    let totalQuantity = ctx.cart.reduce((currentValue, product) => {
        return currentValue += product.amount;
    }, 0)

    const logoutHandler = () => {
        ctx.logout();
    }
    const ShowCartItemsHandler = () => {
        ctx.onShowCart()
    }

    return (<>
        <Navbar bg="dark" variant="dark" fixed='top'>
            <Nav className="ms-auto">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/home">HOME</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to='/About' >ABOUT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to='/ContactUs' >CONTACT US</Nav.Link>
                </Nav.Item>
                {!ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to='/Login' >LOGIN</Nav.Link>
                </Nav.Item>}
                {!ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to='/Signup' >SIGNUP</Nav.Link>
                </Nav.Item>}
                {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to={`/Login/Product/${ctx.token}`} >STORE</Nav.Link>
                </Nav.Item>}
               
            </Nav>
            <Nav className='me-auto' style={{ gap: '1rem' }}>
            {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to='/' onClick={logoutHandler} >LOGOUT</Nav.Link>
                </Nav.Item>}
                {ctx.isLogedin && <Nav.Item>
                    <Nav.Link as={NavLink} to={`/Login/Cart/${ctx.token}`} onClick={ShowCartItemsHandler}>
                        Cart
                        <Badge bg="light" style={{
                            position: 'absolute', color: '#56CCF2',
                            fontSize: '8px'
                            
                        }}>{totalQuantity}</Badge>

                    </Nav.Link>
                </Nav.Item>}
            </Nav>
        </Navbar>

    </>

    );
}

export default WelCome;