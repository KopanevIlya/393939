import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Banner from '../components/Banner/Banner'
import Features from '../components/Features/Features'
import ProductsList from '../components/ProductsList/ProductsList'
import EmailSignUp from '../components/EmailSignUp/EmailSignUp'
import AboutPromo from '../components/AboutPromo/AboutPromo'


function Main() {
  return (
    <div>
      
      <header>
        <Navigation/>
      </header>
      <main>
        <Banner/>
        <Features/>
        <ProductsList title = {'New ceramics'}/>
        <ProductsList title = {'Our popular products'}/>
        <EmailSignUp />
        <AboutPromo />
      </main>
    


      
    </div>
  )
}

export default Main
