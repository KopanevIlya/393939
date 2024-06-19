import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";
import Button from "../Button/Button";
import axios from "axios";

/* компонент с карточками товаров принимает через props заголовок */
function ProductsList({ title }) {
  /* массив с карточками товаров */
  /* const productsList = [
      {
        id: 0,
        productImg: "The Poplar sueda sofa",
        productImgAlt: "img alt",
        productTitle: "The Poplar sueda sofa",
        productPrice: 980,
        productImgSize:'large',
      },
        {
          id: 1,
          productImg: "The Dandy chair",
          productImgAlt: "img alt",
          productTitle: "The Dandy chair",
          productPrice: 250,
          productImgSize:'medium',
        },
        {
          id: 2,
          productImg: "Rustic Vase Set",
          productImgAlt: "img alt",
          productTitle: "Rustic Vase Set",
          productPrice: 155,
          productImgSize:'medium',
        },
        {
          id: 3,
          productImg: "The lucy Lamp",
          productImgAlt: "img alt",
          productTitle: "The lucy Lamp",
          productPrice: 125,
          productImgSize:'medium',
        },
        {
          id: 4,
          productImg: "The Silky Vase",
          productImgAlt: "img alt",
          productTitle: "The Silky Vase",
          productPrice: 399,
          productImgSize:'medium',
        },
        {
          id: 5,
          productImg: "The Dandy chair",
          productImgAlt: "img alt",
          productTitle: "The Dandy chair",
          productPrice: 250,
          productImgSize:'medium',
        },
        
      ]; */

  const [productsList, setList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await axios.get("http://localhost:8810/");
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchList();
  });

  return (
    <section className="productList">
      <div className="productList__container">
        <h2 className="productList__title">{title}</h2>
        <div className="productList__cardsContainer">
          {productsList.map((item) => (
            <ProductCard {...item} key={item.id} />
          ))}
        </div>
        <div className="productList__btnWrapper">
          <Button
            className="productList__btn"
            width={170}
            color={"gray"}
            href="/"
          >
            View collection
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
