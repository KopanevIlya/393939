import React, { useState } from 'react';
import './ProductCard.css';
import axios from 'axios';

function ProductCard({ productImg, productImgAlt, productTitle, productPrice, id }) {
  const [item, setItem] = useState(null); // Инициализируем item как null
  const [showPopup, setShowPopup] = useState(false); // Состояние для отображения popup

  const handleClick = async (id) => {
    try {
      const res = await axios.get("http://localhost:8810/productitem/" + id);
      console.log(res);
      setItem(res.data[0]); // Обновляем состояние с полученными данными (извлекаем первый элемент массива)
      setShowPopup(true); // Показываем popup
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <article className='productCard' onClick={() => handleClick(id)}>
        <img src={productImg} alt={productImgAlt} />
        <div className='productCard__descWrapper'>
          <h4 className='productCard__title'>{productTitle}</h4>
          <p className='productCard__description'>{'\u00A3' + productPrice}</p>
        </div>
      </article>
      {showPopup && item && ( // Проверяем, что popup должен отображаться и данные получены
        <div className='popup'>
          <div className='popup__content'>
            <h1>{item.productTitle}</h1>
            <p>{'\u00A3' + item.productPrice}</p>
            <img src={item.productImg} alt={item.productImgAlt} />
            <button onClick={() => setShowPopup(false)}>Закрыть</button> {/* Кнопка для закрытия popup */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
