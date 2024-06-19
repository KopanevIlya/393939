import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-container__topBlock">
                <span className="material-symbols-outlined">
                    search
                </span>
          <h1 className="nav-container__title">Avion</h1>
          <div className="nav-container__wrapperBasket">
            <Link to="/basket">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                    </Link>
            <span className="material-symbols-outlined">
                        account_circle
            </span>
          </div>
        </div>
        <hr></hr>
       
          <div className="nav-container__bottomBlock">
            <ul className="nav-container__menu">
              <li className="nav-container__menuItem">Plant pots</li>
              <li className="nav-container__menuItem">Ceramics</li>
              <li className="nav-container__menuItem">Tables</li>
              <li className="nav-container__menuItem">Chairs</li>
              <li className="nav-container__menuItem">Crockery</li>
              <li className="nav-container__menuItem">Tableware</li>
              <li className="nav-container__menuItem">Cutlery</li>
            </ul>
          </div>
      </div>
    </div>
    


  )
}

export default Navigation
