import React from "react";
import { Button, Card } from "react-bootstrap";
import { MdStarBorder, MdStarRate } from "react-icons/md";

import "./product-card.scss";

const ProductCard = (data) => {
  let { id, title, image, price, discount, rate } = data;

  let displayF = {
    display: "inline",
  };

  if (!discount) {
    displayF = { display: "none" };
  }

  const discountPrice =
    discount === 0 ? price : price - (price * discount) / 100;

  const starIcon = (rate) => {
    if (rate >= 5) {
      return (
        <>
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
        </>
      );
    } else if (rate === 4) {
      return (
        <>
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarBorder />
        </>
      );
    } else if (rate === 3) {
      return (
        <>
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarBorder />
          <MdStarBorder />
        </>
      );
    } else if (rate === 2) {
      return (
        <>
          <MdStarRate />
          <MdStarRate />
          <MdStarBorder />
          <MdStarBorder />
          <MdStarBorder />
        </>
      );
    } else if (rate === 1) {
      return (
        <>
          <MdStarRate />
          <MdStarBorder />
          <MdStarBorder />
          <MdStarBorder />
          <MdStarBorder />
        </>
      );
    } else {
      return (
        <>
          <MdStarBorder />
          <MdStarBorder />
          <MdStarBorder />
          <MdStarBorder />
          <MdStarBorder />
        </>
      );
    }
  };

  return (
    <Card className="crd">
      <Card.Img variant="top" src={`../assets/products/${image}`} />
      <span className="discount" style={displayF}>
        -{discount}%
      </span>
      <Card.Body className="crd-body">
        <Card.Title className="title-rate">{starIcon(rate)}</Card.Title>
        <Card.Text className="text-title">{title}</Card.Text>
        <Card.Title className="title-price">
          <span className="price" style={displayF}>
            ${price}
          </span>
          <span className="discountprice"> ${discountPrice}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
