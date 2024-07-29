import React, { useState } from "react";
import "./ProductCard.css";
import axios from "axios";
import Backdrop from "../Backdrop/Backdrop";
import PopUp from "../PopUp/PopUp";

function ProductCard({
  productImg,
  productImgAlt,
  productTitle,
  productPrice,
  id,
}) {
  const [item, setItem] = useState(null); // Инициализируем item как null
  const [showPopup, setShowPopup] = useState(false); // Состояние для отображения popup

  const handleClick = async (id) => {
    try {
      const res = await axios.get("http://localhost:8810/productitem/" + id);
      console.log("Fetched data: ", res.data);
      setItem(res.data[0]);
      setShowPopup(true);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleAddToBasket = async () => {
    try {
      // Отправляем упрощенные данные
      const basketData = {
        productImgAlt: item.productImgAlt,
        productTitle: item.productTitle,
        productPrice: item.productPrice,
        productCategory: item.productCategory,
        productType: item.productType,
        productMaterial: item.productMaterial,
      };

      console.log("Sending data to server:", basketData);

      await axios.post("http://localhost:8810/post", basketData);
      // Закрываем попап после успешного добавления
      setShowPopup(false);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <article className="productCard" onClick={() => handleClick(id)}>
        <img src={productImg} alt={productImgAlt} />
        <div className="productCard__descWrapper">
          <h4 className="productCard__title">{productTitle}</h4>
          <p className="productCard__description">{"\u00A3" + productPrice}</p>
        </div>
      </article>
      {showPopup &&
        item && ( // Проверяем, что popup должен отображаться и данные получены
          <>
            <PopUp item={item} handleAddToBasket={handleAddToBasket} onClick={setShowPopup}/>
            <Backdrop onClick={setShowPopup} />
          </>
        )}
    </>
  );
}

export default ProductCard;
