import React, { useEffect, useState } from "react";
import "./ShoppingCart.css";
import Button from "../Button/Button";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { Link } from "react-router-dom";

function ShoppingCart() {

  /* первоначальные данные */
  const products = [
    {
      id: 1,
      productImg: "Rustic Vase Set",
      productImgAlt: "image alt",
      productTitle: "Graystone vase",
      productDescription:
        "A timeless ceramic vase with a tri color grey glaze.",
      productPrice: 85,
      productQuantity: 1,
    },
    {
      id: 2,
      productImg: "The Silky Vase",
      productImgAlt: "image alt",
      productTitle: "Basic white vase",
      productDescription: "Beautiful and simple this is one for the classics.",
      productPrice: 125,
      productQuantity: 2,
    },
  ];

  const [productsList, setList] = useState(products);

  /* устанавливаем первоначальныйе данные для итоговой суммы */
  let inialsubtotalPrice = 0;
  products.map(
    (item) => (inialsubtotalPrice += item.productPrice * item.productQuantity)
  );
  const [subtotalPrice, setSubtotalPrice] = useState(inialsubtotalPrice);

  /* обновляем итоговую цену */
  function updateSubtotalPrice(price, add) {
    add
      ? setSubtotalPrice(subtotalPrice + price)
      : setSubtotalPrice(subtotalPrice - price);
  }

  /* удаляем элемент из массива */
  function deleteProduct(id) {
    setList(productsList.filter(i => i.id !=id));
}

  return (
    <section className="shoppingCart">
      {productsList.length > 0 && (
        <div className="shoppingCart__container">
          <h1 className="shoppingCart__title">Your shopping cart</h1>

          <div className="shoppingCart__productCartHeader">
            <h6>Product</h6>
            <h6>Quantity</h6>
            <h6>Total</h6>
          </div>

          <div className="shoppingCart__productCart">
            {productsList.map((item) => (
              <ShoppingCartItem
                {...item}
                key={item.id}
                updateSubtotalPrice={updateSubtotalPrice}
                deleteProduct={deleteProduct}
              />
            ))}
          </div>

          <div className="shoppingCart__pricingInfo">
            <div className="shoppingCart__subtotalWrapper">
              <div>
                <h4 className="shoppingCart__subtotalTitle">Subtotal</h4>
                <h3 className="shoppingCart__subtotalPrice">{`\u00A3${subtotalPrice}`}</h3>
              </div>
              <span className="shoppingCart__taxesInfo">
                Taxes and shipping are calculated at checkout
              </span>
            </div>
            <Button
              className="shoppingCart__btn"
              width={172}
              color={"dark"}
              href="/"
            >
              Go to checkout
            </Button>
          </div>
        </div>
      )}
      {productsList.length === 0 && (
        <div className="shoppingCart__emptyCartMessage">
          <h2>
            You haven't added any items to your cart yet. Let's find something.
          </h2>
          <Link to="/">Go to homepage.</Link>
        </div>
      )}
    </section>
  );
}

export default ShoppingCart;
