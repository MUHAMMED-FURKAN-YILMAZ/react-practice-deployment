import React, { useState } from "react";
import { Button, ButtonGroup, ProgressBar } from "react-bootstrap";
import "./prg-bar.css";

/** 1. YOL */
const PrgBar = () => {
  const [percent, setPercent] = useState(0);

  const now = percent;

  return (
    <div className="container fluid">
      <ButtonGroup className=" btn-grp" aria-label="Basic example ">
        <Button
          variant="primary"
          onClick={() => setPercent((prev) => prev + 10)}
          disabled={percent === 100}
        >
          +
        </Button>

        <Button
          variant="danger"
          onClick={() => setPercent((prev) => prev - 10)}
          disabled={!percent}
        >
          -
        </Button>
      </ButtonGroup>

      <ProgressBar
        className="prg"
        variant="warning"
        animated
        now={now}
        label={`${now}%`}
      />
    </div>
  );
};

/** 2. YOL */
/* const PrgBar = () => {
  const [percent, setPercent] = useState(0);

  const now = percent;

  const fillTheBar = (value) => {
    if (value <= 0) {
      value = 0;
    } else if (value >= 100) {
      value = 100;
    }

    setPercent(value);
  };

  return (
    <div>
      <ButtonGroup className="btn-grp" aria-label="Basic example ">
        <Button variant="primary" onClick={() => fillTheBar(percent + 10)}>
          +
        </Button>

        <Button variant="danger" onClick={() => fillTheBar(percent - 10)}>
          -
        </Button>
      </ButtonGroup>

      <ProgressBar
        className="prg"
        variant="warning"
        animated
        now={now}
        label={`${now}%`}
      />
    </div>
  );
}; */

export default PrgBar;
