import React, { useState } from "react";
import "./PopUp.css";
import Button from "../Button/Button";

function PopUp({ item, handleAddToBasket, onClick }) {
  const [quantity, setQuantity] = useState(1);

  const incQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decQuantity = () => {
    if (quantity != 1) setQuantity((prev) => prev - 1);
  };

  const quantityOnChange = (e) => {
    e.target.value < 2 ? setQuantity(1) : setQuantity(+e.target.value);
  };

  console.log(quantity);

  return (
    <article className="popup">
      <button
        type="button"
        className="popup__close-btn"
        onClick={() => onClick(false)}
      >
        X
      </button>
      <div className="popup__container">
        <div className="popup__img-wrapper">
          <img src={item.productImg} alt={item.productImgAlt} />
        </div>
        <div className="popup__content">
          <div className="popup__inner-container">
            <div className="popup__title-container">
              <h1 className="popup__title">{item.productTitle}</h1>
              <p className="popup__price">{"\u00A3" + item.productPrice}</p>
            </div>
            <div className="popup__description-wrapper">
              <h3 className="popup__description-title">Description</h3>
              <p className="popup__description-content">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>
            </div>
            <div className="popup__characteristics-wrapper">
              <h3 className="popup__characteristics-title">Dimensions</h3>
              <p className="popup__characteristics-content">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>
            </div>
            <div className="popup__amount-wrapper">
              <div className="popup__amount-innerWrapper">
                <span className="popup__amount-title">Amount:</span>
                <div className="popup__quantity-container">
                  <button
                    type="button"
                    className="popup__quantity-btn"
                    onClick={incQuantity}
                  >
                    +
                  </button>
                  <input
                    className="popup__quantity-counter"
                    type="number"
                    value={quantity}
                    onChange={(e) => quantityOnChange(e)}
                  />
                  <button
                    type="button"
                    className="popup__quantity-btn"
                    onClick={decQuantity}
                  >
                    -
                  </button>
                </div>
              </div>
              <Button className="productList__btn" width={143} color={"dark"}>
                Add to card
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PopUp;
