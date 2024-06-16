import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="features">
      <div className="features_container">
      <h3>What makes our brand different</h3>
      <div className="features__itemsContainer">
        <article className="features__itemWrapper">
          <img
            className="features__icon icon"
            src="/icons/Delivery.svg"
            alt="icon alt"
          />
          <div className="features__descContainer">
            <h4 className="features__title">Next day as standard</h4>
            <p className="features__description">Order before 3pm and get your order the next day as standard</p>
          </div>
        </article>

        <article className="features__itemWrapper">
          <img
            className="features__icon icon"
            src="icons/Checkmark--outline.svg"
            alt="icon alt"
          />
          <div className="features__descContainer">
            <h4 className="features__title">Made by true artisans</h4>
            <p className="features__description">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
        </article>

        <article className="features__itemWrapper">
          <img
            className="features__icon icon"
            src="icons/Purchase.svg"
            alt="icon alt"
          />
          <div className="features__descContainer">
            <h4 className="features__title">Unbeatable prices</h4>
            <p className="features__description">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
        </article>

        <article className="features__itemWrapper">
          <img
            className="features__icon icon"
            src="icons/Sprout.svg"
            alt="icon alt"
          />
          <div className="featureDescriptionContainer">
            <h4 className="features__title">Sprout</h4>
            <p className="features__description">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </article>
      </div>
      </div>
    </section>
  );
}

export default Features;
