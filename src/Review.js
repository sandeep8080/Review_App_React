import React, { useEffect, useState } from "react";
import reviews from "./data";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Reviews = () => {
  const length = reviews.length;
  const [current, setCurrent] = useState(0);

  const handleLeftIcon = (index) => {
    const moveLeft = index === 0 ? length - 1 : index - 1;
    setCurrent(moveLeft);
  };

  const handleRightIcon = (index) => {
    const moveRight = index === length - 1 ? 0 : index + 1;
    setCurrent(moveRight);
  };
  return (
    <>
      {reviews.map((item, index) => {
        return (
          <section
            key={item.id}
            className={current === index ? "active" : "inactive"}
          >
            <img src={item.image} className="img-conatiner" />
            <h4>{item.name}</h4>
            <h4>{item.job}</h4>
            <p>{item.text}</p>
            <footer>
              <div>
                <FaAngleLeft onClick={() => handleLeftIcon(index)} />
                <FaAngleRight onClick={() => handleRightIcon(index)} />
              </div>
              <button>Surprise Me</button>
            </footer>
          </section>
        );
      })}
    </>
  );
};

export default Reviews;
