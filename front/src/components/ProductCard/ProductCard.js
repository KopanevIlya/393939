import React from 'react'
import './ProductCard.css'

/* карточка товаров принимает через props элемент массива, в котором содержиться путь к картинке, значение для тега alt,
   заголовок, цену, и размер картинки
   */
function ProductCard({productImg, productImgAlt, productTitle, productPrice, productImgSize}) {
  return (
    <aside className='productCardWrapper'>
      {/* <img className={'productImg '+ productImgSize} src= {require(`../../images/${productImg}.png`)} alt={productImgAlt} /> */}
      <div className='productDescriptionWrapper'>
      <h4 className='productTitle'>{productTitle}</h4>
      <p>{'\u00A3' + productPrice}</p>
      </div>

    </aside>
  )
}

export default ProductCard
