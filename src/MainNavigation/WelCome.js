import React, { useContext } from 'react';
import './WelCome.css';
import Econtext from '../store/ecom-context';
import user from '../Images/user.png';
import { NavLink } from 'react-router-dom';

function WelCome() {
  const ctx = useContext(Econtext);
  let totalQuantity = ctx.cart.reduce((currentValue, product) => {
    return (currentValue += product.amount);
  }, 0);

  const logoutHandler = () => {
    ctx.logout();
  };

  const showCartItemsHandler = () => {
    ctx.onShowCart();
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list navbar-list-left">
          <li className="navbar-item">
            <NavLink to="/home" className="navbar-link">
              HOME
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/About" className="navbar-link">
              ABOUT
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/ContactUs" className="navbar-link">
              CONTACT US
            </NavLink>
          </li>
          {!ctx.isLogedin && (
            <>
              <li className="navbar-item">
                <NavLink to="/Login" className="navbar-link">
                  LOGIN
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink to="/Signup" className="navbar-link">
                  SIGNUP
                </NavLink>
              </li>
            </>
          )}
          {ctx.isLogedin && (
            <li className="navbar-item">
              <NavLink
                to={`/Login/Product/${ctx.token}`}
                className="navbar-link"
              >
                STORE
              </NavLink>
            </li>
          )}
        </ul>
        <ul className="navbar-list navbar-list-right">
          {ctx.isLogedin && (
            <>
              <li className="navbar-item">
                <NavLink
                  to="/"
                  onClick={logoutHandler}
                  className="navbar-link"
                >
                  LOGOUT
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to={`/Login/Cart/${ctx.token}`}
                  onClick={showCartItemsHandler}
                  className="navbar-link"
                >
                  <span className="navbar-link-text">Cart</span>
                  <span className="badge">{totalQuantity}</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default WelCome;
