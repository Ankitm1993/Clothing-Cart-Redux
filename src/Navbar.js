import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { quantity } = useGlobalContext();

  return (
    <>
      <div className='nav__bar'>
        <div className='nav__left'>
          <nav className='nav__logo'>
            <img
              src='https://cdn.pixabay.com/photo/2017/07/24/15/01/vector-2534950_960_720.png'
              alt=''
            />
          </nav>
        </div>
        <div className='nav__center'>
          <h3> Fashion Square Shopping Store </h3>
        </div>

        <div className='nav__right'>
          <FaShoppingCart
            style={{
              position: "relative",
              fontSize: "2.5rem",
              color: "blue",
              marginRight: "4.7rem",
              marginTop: "0.9rem",
            }}
          />
          <div className='amount__container'>
            <p className='total__amount'> {quantity} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
