import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Econtext from "../store/ecom-context";
import "./ProductList.css";

const ProductList = (props) => {
  const ctx = useContext(Econtext);
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  async function onAddHandler() {
    const sameItemIndex = ctx.cart.findIndex((item) => item.title === props.title);
    const sameItem = ctx.cart[sameItemIndex];
    if (sameItem) {
      const productObj = {
        title: props.title,
        price: props.price,
        imageUrl: props.imageUrl,
        amount: sameItem.amount + 1,
      };
      try {
        const response = await axios.put(
          `https://ecommerce-app-17d67-default-rtdb.firebaseio.com/${ctx.email}/${sameItem.id}.json`,
          productObj
        );
        ctx.onShowCart();
        setIsAdded(true);
        console.log(response.data);
      } catch (error) {
        alert(error.response.data.error.message);
        setIsAdded(false);
      }
    } else {
      const productObj = {
        title: props.title,
        price: props.price,
        imageUrl: props.imageUrl,
        amount: 1,
      };

      try {
        const response = await axios.post(
          `https://ecommerce-app-17d67-default-rtdb.firebaseio.com/${ctx.email}.json`,
          productObj
        );
        ctx.onShowCart();
        setIsAdded(true);
      } catch (error) {
        alert(error.response.data.error.message);
        setIsAdded(false);
      }
    }
  }

  function ShowDetailsOfPro() {
    ctx.onShowDetails({
      imageUrl: props.imageUrl,
      title: props.title,
      price: props.price,
      amount: 1,
    });
  }

  function onShowHandler() {
    navigate(`/Login/Cart/${ctx.token}`);
    ctx.onShowCart();
  }

  return (
    <div className="product-card">
      <h4 className="product-title">{props.title}</h4>
      <Link to={`/Product/${props.id}`} onClick={ShowDetailsOfPro}>
        <img className="product-image" src={props.imageUrl} alt="Product" />
      </Link>
      <div className="product-footer">
        <span className="product-price">${props.price}</span>
        <button
          className={`product-button ${isAdded ? "added" : ""}`}
          onClick={!isAdded ? onAddHandler : onShowHandler}
        >
          {isAdded ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductList;
