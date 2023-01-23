import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import data from "./data";
const Bilgiler = () => {
  const [index, setIndex] = useState(0);
  const { id, isim, tarih, metin, resim } = data[index];
  const sonraki = (nxt) => {
    if (nxt > data.length - 1) nxt = 0;
    setIndex(nxt);
  };
  const onceki = (prv) => {
    if (prv < 0) prv = data.length - 1;
    setIndex(prv);
  };
  const rastgele = () => {
    const rnd = Math.floor(Math.random() * data.length);
    setIndex(rnd);
  };
  return (
    <div style={{ padding: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={resim} />
        <Card.Body>
          <Card.Title className="text-center">{isim}</Card.Title>
          <Card.Title className="text-center">{id}</Card.Title>
          <Card.Text>{metin}</Card.Text>
          <Button variant="danger" onClick={() => onceki(index - 1)}>
            Previous
          </Button>
          <Button variant="warning" onClick={rastgele}>
            Random
          </Button>
          <Button variant="primary" onClick={() => sonraki(index + 1)}>
            Next
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Bilgiler;
