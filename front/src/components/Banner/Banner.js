import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div>
        <section className="main-container__banner banner">
                <div className="banner__leftBlock">
                    <div className="banner__topContent">
                        <h2>The furniture brand for the future,<br/> with timeless designs</h2>
                        <a href="#green">View collection</a>
                    </div>
                    <div className="banner__bottomContent">
                        <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand
                            with nice fonts, tasteful colors and a beautiful way to display things digitally 
                            using modern web technologies.</p>
                    </div>
                </div>
                <img src="img/Right Image.png" className="banner__rightImage" alt=""/>
            </section>
    </div>
  )
}

export default Banner
