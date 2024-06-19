import React from "react";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

function Basket() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <ShoppingCart />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Basket;
