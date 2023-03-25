import React, { useContext } from "react"
import { Row, Container, Col, Button } from "react-bootstrap";
import ProductList from './ProductList';
import Econtext from "../store/ecom-context";
import { useNavigate } from 'react-router-dom'
const Product = (props) => {
    const ctx = useContext(Econtext)
    const productsArr = [

        {
            id: 'e1',
            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {
            id: 'e2',
            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {
            id: 'e3',
            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {
            id: 'e4',
            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        },
        {
            id: 'e5',
            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },
        {
            id: 'e6',
            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },
        {
            id: 'e7',
            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },
        
        {
            id: 'e8',
            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },
        {
            id: 'e9',
            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },


    ]
    const Navigate = useNavigate();
    const CartShowHandler = () => {
        Navigate(`/Login/Cart/${ctx.token}`)
        ctx.onShowCart()
    }

    return (
        <>
            <Container className="p-4 text-center h3">
                PRODUCTS
            </Container>
            <Container>
                <Row className="d-flex justify-content-center" style={{ gridColumnGap: '50px', gridRowGap: '50px',borderRadious:'50px' }}>
                    {productsArr.map((item) => (
                        <Col lg={3} md={12}
                            key={item.id} >
                            <ProductList id={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="mb-5 p-4 text-center">
                <Button variant="secondary" style={{ color: '#56CCF2' }} onClick={CartShowHandler} >See the cart</Button>
            </Container>

        </>
    )
}
export default Product;