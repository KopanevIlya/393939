import React from 'react'
import './ShowProduct.css'
import Button from '../Button/Button'

function ShowProduct() {
  return (
    <div className='container-showProduct'>
      <img src='img/ImageLeft.png' alt='#'/>
      <div className='container-showProduct__rightBlock rightBlock'>

      <div class="rightBlockWrapper">
            
            <div class="rightBlockWrapper__title">
                <h1>The Dandy Chair</h1>
                <h3>{`\u00A3  250`}</h3>
            </div>

            <div class="rightBlockWrapper__description">
                <h2>Description</h2>
                <p>A timeless design, with premium materials features as one of our most</p>
                <p>popular and icons pieces. The dandy chair os perfect for any stylish</p>
                <p>living space with beech legs and lambskin leather upholstery.</p>
                <ul className='list'>
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                </ul>
            </div>

            <div class="rightBlockWrapper__dimensions">
                <h2>Dimensions</h2>
                <div className='list-container'>
                <ul class="">
                    <li>Height</li>
                    <li>110cm</li>
                </ul>
                <ul class="">
                    <li>Width</li>
                    <li>75cm</li>
                </ul>
                <ul class="">
                    <li>Depth</li>
                    <li>50cm</li>
                </ul>

                </div>
         
            </div>


            <div className='rightBlockWrapper__amount'>
                <p>Amount</p>
                <span>1</span>
                <Button
                      className="productList__btn"
                      width={143}
                      color={"dark"}
                      href="/" >
           Add to card
          </Button>
            </div>        
        </div> 
    </div> 
    </div>
  )
}

export default ShowProduct
