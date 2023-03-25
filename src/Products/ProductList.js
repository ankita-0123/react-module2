import React, { useContext, useState } from "react";
import axios from 'axios';
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Econtext from "../store/ecom-context";
const ProductList = (props) => {
    const ctx = useContext(Econtext);
    console.log(ctx.email)
    const [isAdded, setIsAdded] = useState(false)
    const Navigate = useNavigate();
    async function onAddHandler() {
        const sameItemIndex = ctx.cart.findIndex(item => item.title === props.title)
        const sameItem = ctx.cart[sameItemIndex]
        if (sameItem) {
            const productObj = {
                title: props.title,
                price: props.price,
                imageUrl: props.imageUrl,
                amount: (sameItem.amount + 1)
            }
            try {
                const response = await axios.put(`https://ecommerce-ee608-default-rtdb.firebaseio.com/${ctx.email}/${sameItem.id}.json`, productObj)
                ctx.onShowCart()
                setIsAdded(true)
                console.log(response.data)
            } catch (error) {
                alert(error.response.data.error.message)
                setIsAdded(false)
            }
        } else {
            const productObj = {
                title: props.title,
                price: props.price,
                imageUrl: props.imageUrl,
                amount: 1
            }

            try {
                const response = await axios.post(`https://ecommerce-ee608-default-rtdb.firebaseio.com//${ctx.email}.json`, productObj)
                ctx.onShowCart()
                setIsAdded(true)

            } catch (error) {
                alert(error.response.data.error.message)
                setIsAdded(false)
            }
        }
    }

    function ShowDetailsOfPro() {
        ctx.onShowDetails({
            imageUrl: props.imageUrl,
            title: props.title,
            price: props.price,
            amount: 1
        })
    }
    function onShowHandler() {
        Navigate(`/Login/Cart/${ctx.token}`)
        ctx.onShowCart()
    }
    
    return <>

        <Card style={{ width: 'auto', border: 'none' }}>
            <Card.Title style={{ textAlign: 'center',fontSize:'20px' }}>{props.title}</Card.Title>
            <Card.Body>
                <Link to={`/Product/${props.id}`} onClick={ShowDetailsOfPro}>
                    <Card.Img variant="top" style={{borderRadius:'40px'}} src={props.imageUrl} />   </Link>
            </Card.Body>
            <Card.Text>
                ${props.price}
                <Button variant="dark" style={{ float: 'right', borderRadius:'20px',disply:'flex' }} onClick={!isAdded ? onAddHandler : onShowHandler}>{isAdded ? 'go to cart' : 'Add to cart'}
                </Button>
            </Card.Text>
        </Card>

    </>
}
export default ProductList;