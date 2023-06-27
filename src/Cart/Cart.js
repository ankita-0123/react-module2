import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import CartItem from './CartItem';
import UICard from '../UI/UICard';
import Econtext from '../store/ecom-context';
import './Cart.css';

const Cart = () => {
  const ctx = useContext(Econtext);
  const totalAmount = `$${ctx.totalAmount}`;

  const remoCartItemHandler = (id) => {
    ctx.onRemoveProd(id);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {ctx.cart.length === 0 && (
        <div className="cart-empty">
          <h2>Cart is Empty..</h2>
        </div>
      )}

      {ctx.cart.length !== 0 && (
        <div className="cart-content">
          <div className="cart-summary">
            <div className="cart-summary-row">
              <h2 className="cart-summary-label">Total Amount:</h2>
              <h2 className="cart-summary-amount">{totalAmount}</h2>
            </div>
          </div>

          <UICard>
            <div className="cart-items">
              <div className="cart-items-header">
                <h3 className="cart-item-header">Item</h3>
                <h3 className="cart-item-header">Quantity</h3>
                <h3 className="cart-item-header">Price</h3>
              </div>
              {ctx.cart.map((item, index) => (
                <CartItem
                  key={index}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  amount={item.amount}
                  imageUrl={item.imageUrl}
                  onRemove={remoCartItemHandler.bind(null, item.id)}
                />
              ))}
            </div>
          </UICard>

          <div className="cart-actions">
            <Button variant="info">PURCHASE</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
