import React, { useEffect, useState } from "react";
import "./ShoppingCart.css";
import Button from "../Button/Button";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { Link } from "react-router-dom";
import axios from 'axios';

function ShoppingCart() {
  const [shopList, setList] = useState([]);

  useEffect(() => {
    const fetchShopList = async () => {
      try {
        const res = await axios.get("http://localhost:8810/basket/");
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchShopList();

 
  });


  return (


    <div>
      <section className="shoppingCart">
      <div className="shoppingCart__container">
      <h1 className="shoppingCart__title">Your shopping cart</h1>
      <div className="shoppingCart__productCartHeader">
            <h6>Product</h6>
            <h6>Quantity</h6>
            <h6>Total</h6>
          </div>

        {shopList.map((item) => (
            <p>{item.productTitle}</p>
          ))}
 </div>


</section>



    </div>
   
  );
}

export default ShoppingCart;
