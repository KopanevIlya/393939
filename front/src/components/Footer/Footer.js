import React from 'react'

import "./Footer.css"

function Footer() {
  return (
    
         <div class="footer-container">
           <div class="footer-container__topMenu">
                <div class="topMenuBlock">
                    <h1>Menu</h1>
                    <ul>New arrivals</ul>
                    <ul>Best sellers</ul>
                    <ul>Recently viewed</ul>
                    <ul>Popular this week</ul>
                    <ul>All products</ul>
                </div>
                <div class="topMenuBlock">
                    <h1>Categories</h1>
                    <ul>Crockery</ul>
                    <ul>Furniture</ul>
                    <ul>Homeware</ul>
                    <ul>Plant pots</ul>
                    <ul>Chairs</ul>
                    <ul>Crockery</ul>
                </div>
                <div class="topMenuBlock">
                    <h1>Our company</h1>
                    <ul>About us</ul>
                    <ul>Vacancies</ul>
                    <ul>Contact us</ul>
                    <ul>Privacy</ul>
                    <ul>Returns policy</ul>
                </div>
                <div class="topMenuBlock">
                    <h1>Join our mailing list</h1>
                    <div class="topMenu__searchForm searchForm">
                        <input class="searchForm__text" type="text" 
                        placeholder  = "your@email.com"></input>
                        <button class="searchForm__btn"><a class="searchForm__click" href="">Sign up</a> </button>
                    </div>
                </div>
           </div> 
           <div class="topMenu__bottomContent bottomContent">
                
                <div class="bottomContent__label">
                    <div class="bottomContent__labelTxt">
                        <h3>Copyright 2022 Avion LTD</h3>
                    </div>
                    <div class="bottomContent__labelSocial">
                        <img src='../img/Property 1=Logo--facebook.png'></img>
                        <img src='../img/Property 1=Logo--linkedin.png'></img>
                        <img src='../img/Property 1=Logo--pinterest.png'></img>
                        <img src='../img/Property 1=Logo--skype.png'></img>
                        <img src='../img/Property 1=Logo--twitter.png'></img>
                   
                    </div>
                </div>
        </div>

    </div>
    
  )
}


export default Footer
