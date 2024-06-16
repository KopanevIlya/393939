import React from "react";
import "./EmailSignUp.css";
import Button from "../Button/Button";

function EmailSignUp() {
  return (
    <section className="signUp">
      <article className="signUp__wrapper">
        <h1 className="signUp__title">Join the club and get the benefits</h1>
        <p className="signUp__description">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <form className="signUp__form" action="/" method="post">
          <input
            className="signUp__input"
            type="email"
            name="email"
            placeholder="your@email.com"
            inputMode="email"
          />
          <button className="signUp__btn" type="submit">
            Sign Up
          </button>
        </form>
      </article>
    </section>
  );
}

export default EmailSignUp;
