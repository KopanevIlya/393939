import React from "react";
import "./Features.css";
import FeaturesItem from "../FeaturesItem/FeaturesItem";

/* компонент принимает через props заголовок */
function Features({ title }) {
  /* массив с преимуществами */
  const feturesList = [
    {
      id: 1,
      featureIcon: "Delivery",
      featureIconAlt: "icon alt",
      featureTitle: "Next day as standard",
      featureDesc:
        "Order before 3pm and get your order the next day as standard",
    },
    {
      id: 2,
      featureIcon: "Checkmark--outline",
      featureIconAlt: "icon alt",
      featureTitle: "Made by true artisans",
      featureDesc:
        "Handmade crafted goods made with real passion and craftmanship",
    },
    {
      id: 3,
      featureIcon: "Purchase",
      featureIconAlt: "icon alt",
      featureTitle: "Unbeatable prices",
      featureDesc:
        "For our materials and quality you won’t find better prices anywhere",
    },
    {
      id: 4,
      featureIcon: "Sprout",
      featureIconAlt: "icon alt",
      featureTitle: "Recycled packaging",
      featureDesc:
        "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];

  return (
    <section className="featuresWrapper">
      <h3>{title}</h3>
      <div className="featureItemsContainer">
        {feturesList.map((item) => (
          <FeaturesItem {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Features;
