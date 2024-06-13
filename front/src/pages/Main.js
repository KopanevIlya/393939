import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Banner from '../components/Banner/Banner'
import Features from '../components/Features/Features'
import ProductsList from '../components/ProductsList/ProductsList'


function Main() {
  return (
    <div>
      
      <header>
        <Navigation/>
      </header>
      <main>
        <Banner/>
        <Features title={'What makes our brand different'}/>
        <ProductsList title ={'New ceramics'}/>
        <ProductsList title ={'Our popular products'}/>
      </main>
    


      
    </div>
  )
}

export default Main
