import React, { useState, useEffect } from "react";

import "./advert-scroll.styles.scss";

const data = [
  "FREE SHIPPING WHEN YOU SPEND $75 OR MORE",
  "FREE RETURNS",
  "HOLIDAY SAVINGS",
];

export const AdvertScroll = () => {
  const [text, setText] = useState("HOLIDAY SAVINGS");
  const [counter, setCounter] = useState(0);
  const [classNames, setClassNames] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(data[counter]);
      setClassNames("animation-right");

      if (counter > 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 3000);

    const resetClass = setTimeout(() => {
      setClassNames("");
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(resetClass);
    };
  }, [text, counter, classNames]);

  const handleNext = () => {
    setClassNames("animation-right");
    if (counter > 1) {
      setCounter(0);
      setText(data[counter]);
    } else {
      setCounter(counter + 1);
      setText(data[counter]);
    }
  };
  const handlePrevious = () => {
    setClassNames("animation-left");
    if (counter < 1) {
      setCounter(2);
      setText(data[counter]);
    } else {
      setCounter(counter - 1);
      setText(data[counter]);
    }
  };

  return (
    <div className="advert-scroll">
      <div className="scroll-wrapper">
        <div className="button" onClick={handlePrevious}>
          &#x3c;
        </div>
        <div className="text-container">
          <div className={`text ${classNames}`}>{text}</div>
        </div>
        <div className="button" onClick={handleNext}>
          &#x3e;
        </div>
      </div>
    </div>
  );
};

export default AdvertScroll;
