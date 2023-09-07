import { useContext } from 'react';
import Econtext from '../store/ecom-context';
import classes from './CartItem.module.css';
import axios from 'axios';

const CartItem = (props) => {
  const ctx = useContext(Econtext);

  const onAddHandler = async () => {
    const productObj = {
      title: props.title,
      price: Number(props.price),
      imageUrl: props.imageUrl,
      amount: Number(props.amount + 1)
    };

    try {
      const response = await axios.put(
        `https://netflix-ddcaf-default-rtdb.firebaseio.com/${ctx.email}/${props.id}.json`,
        productObj
      );
      ctx.onShowCart();
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  const onRemoveHandler = async () => {
    const productObj = {
      title: props.title,
      price: Number(props.price),
      imageUrl: props.imageUrl,
      amount: Number(props.amount - 1)
    };

    try {
      const response = await axios.put(
        `https://netflix-ddcaf-default-rtdb.firebaseio.com/${ctx.email}/${props.id}.json`,
        productObj
      );
      ctx.onShowCart();
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  return (
    <>
      <hr />
      <div className={classes.cartItem} key={props.id}>
        <div>
          <p className={classes.title}>{props.title}</p>
          <img
            className={classes.cartProductImage}
            src={props.imageUrl}
            alt="Your items added to cart"
          />
        </div>
        <div>
          <h3 className={classes.quantity}>
            <button onClick={props.amount > 1 ? onRemoveHandler : props.onRemove}>-</button>
            <button>{props.amount}</button>
            <button onClick={onAddHandler}>+</button>
          </h3>
        </div>
        <div>
          <h3 className={classes.price}>${props.price}</h3>
          <button onClick={props.onRemove} className={classes.removeButton}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
