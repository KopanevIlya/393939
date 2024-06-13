import React from 'react'
import './FeaturesItem.css'

/* компонент принимает в себя элемент массива с преимуществами, содержащий путь к заголовку,  значение для тега alt,
   заголовок, и описание
  */
function FeaturesItem({featureIcon, featureIconAlt, featureTitle, featureDesc, ...attr}) {
  return (
    <aside className="featuresItemWrapper">
        <img className="featureIcon" src= {require(`../../icons/${featureIcon}.svg`)} alt={featureIconAlt} />
        <div className="featureDescriptionContainer">
        <h4 className='featureTitle'>{featureTitle}</h4>
        <p>{featureDesc}</p>
        </div>
    </aside>
  )
}

export default FeaturesItem
