import React, { useEffect } from 'react'
import './ShowProduct.css'
import Button from '../Button/Button'
import axios from 'axios'

function ShowProduct(id) {

  




  return (
    <div className='container-showProduct'>
      <img src='img/ImageLeft.png' alt='#'/>
      <div className='container-showProduct__rightBlock rightBlock'>

      <div className="rightBlockWrapper">
            
            <div className="rightBlockWrapper__title">
                <h1>{}</h1>
                <h3>{`\u00A3  250`}</h3>
            </div>

            <div className="rightBlockWrapper__description">
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

            <div className="rightBlockWrapper__dimensions">
                <h2>Dimensions</h2>
                <div className='list-container'>
                <ul className="">
                    <li>Height</li>
                    <li>110cm</li>
                </ul>
                <ul className="">
                    <li>Width</li>
                    <li>75cm</li>
                </ul>
                <ul className="">
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
