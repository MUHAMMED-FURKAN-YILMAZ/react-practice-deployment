import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../product-card/product-card";
import data from "./data.json";

const ProductList = () => {
  return (
    <Container fluid>
      <Row>
        {data.map((data) => (
          <Col key={data.id}>
            <ProductCard {...data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
