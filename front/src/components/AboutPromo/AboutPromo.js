import React from "react";
import "./AboutPromo.css";
import Button from "../Button/Button";

/* Принимает в себя пропс с значением rotate для возможности интвертирования блока с текстом и картинкой */
function AboutPromo({ rotate }) {
  return (
    <section className={"aboutPromo " + rotate}>
      <article className={"aboutPromo__descBlock " + rotate}>
        <div className={"aboutPromo__desContainer " + rotate}>
          <div className="aboutPromo__descWrapper">
            <h3 className="aboutPromo__title">
              From a studio in London to a global brand with over 400 outlets
            </h3>
            <p className="aboutPromo__description">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>
            <br />
            <p className="aboutPromo__description">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>
          <Button width={150} color={"gray"} href="/">
            Get in touch
          </Button>
        </div>
      </article>
      <div className="aboutPromo__imgWrapper">
        <img
          className="aboutPromo__img"
          src="img/AboutPromo1.png"
          alt="img alt"
        ></img>
      </div>
    </section>
  );
}

export default AboutPromo;
