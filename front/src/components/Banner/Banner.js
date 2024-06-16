import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div>
        <section class="main-container__banner banner">
                <div class="banner__leftBlock">
                    <div class="banner__topContent">
                        <h2>The furniture brand for the future,<br/> with timeless designs</h2>
                        <a href="#green">View collection</a>
                    </div>
                    <div class="banner__bottomContent">
                        <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand
                            with nice fonts, tasteful colors and a beautiful way to display things digitally 
                            using modern web technologies.</p>
                    </div>
                </div>
                <img src="img/Right Image.png" class="banner__rightImage" alt=""/>
            </section>
    </div>
  )
}

export default Banner
