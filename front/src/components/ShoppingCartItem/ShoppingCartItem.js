import React, { useEffect, useState } from "react";
import './ShoppingCartItem.css'


function ShoppingCartItem({id, productImg, productImgAlt, productTitle, productDescription, productPrice,productQuantity, updateSubtotalPrice, deleteProduct}) {

    const [quantity, setQuantity] = useState(productQuantity);
    const [totalPrice, setTotalPrice] = useState(productPrice * productQuantity);

    function addProduct() {
        setQuantity(quantity+1);
        setTotalPrice(totalPrice+productPrice);
        updateSubtotalPrice(productPrice, true)
    }

    function removeProduct() {
        setQuantity(quantity-1);
        setTotalPrice(totalPrice-productPrice);
        updateSubtotalPrice(productPrice, false)
        if (quantity-1 == 0) deleteProduct(id);
    }

  return (
    <div className="shoppingCartItem">
    {/* карточка товара */}
    <div className="shoppingCartItem__productCardContainer">
      <img
        className="shoppingCartItem__productImg"
        src="img/The Silky Vase.png"
        alt={productImgAlt}
      />
      <div className="shoppingCartItem__productDescriptionWrapper">
        <h4 className="shoppingCartItem__productTitle">
          {productTitle}
        </h4>
        <span className="shoppingCartItem__productDescription">
          {productDescription}
        </span>
        <span className="shoppingCartItem__productPrice">
          {"\u00A3" + productPrice}
        </span>
      </div>
    </div>

    {/* количество товара */}
    <div className="shoppingCartItem__productQuantityWrapper">
      <button className="shoppingCartItem__quantityButton" onClick={removeProduct}>-</button>
      <span className="shoppingCartItem__productQuantity">
        {quantity}
      </span>
      <button className="shoppingCartItem__quantityButton" onClick={addProduct}>+</button>
    </div>

    {/* сумма товара */}
    <span className="shoppingCartItem__productTotalPrice">
      {"\u00A3" + totalPrice}
    </span>
  </div>
  )
}

export default ShoppingCartItem
