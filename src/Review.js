import React, { useEffect, useState } from "react";
import reviews from "./data";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Reviews = () => {
  const length = reviews.length;
  const [current, setCurrent] = useState(0);

  const { id, name, job, image, text } = reviews[current];

  const handleLeftIcon = () => {
    const moveLeft = current === 0 ? length - 1 : current - 1;
    setCurrent(moveLeft);
  };

  const handleRightIcon = () => {
    const moveRight = current === length - 1 ? 0 : current + 1;
    setCurrent(moveRight);
  };
  return (
    <section key={id}>
      <img src={image} className="img-conatiner" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      <p>{text}</p>
      <footer>
        <div>
          <FaAngleLeft onClick={handleLeftIcon} />
          <FaAngleRight onClick={handleRightIcon} />
        </div>
        <button>Surprise Me</button>
      </footer>
    </section>
  );
};

export default Reviews;
