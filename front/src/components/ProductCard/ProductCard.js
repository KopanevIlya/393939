import React from 'react'
import './ProductCard.css'

/* карточка товаров принимает через props элемент массива, в котором содержиться путь к картинке, значение для тега alt,
   заголовок, цену, и размер картинки
   */
function ProductCard({productImg, productImgAlt, productTitle, productPrice }) {
  return (
    <article className='productCard'>
      <a href='/' className='productCard__link'>
      {/* <img className={'productImg '} src= {require(`../../images/${productImg}.png`)} alt={productImgAlt} /> */}
      <img src='img/The Dandy chair.png'/>
      <div className='productCard__descWrapper'>
      <h4 className='productCard__title'>{productTitle}</h4>
      <p className='productCard__description'>{'\u00A3' + productPrice}</p>
      </div>
      </a>
    </article>
  )
}

export default ProductCard
