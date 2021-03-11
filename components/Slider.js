import React from "react";
import { Carousel } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "./slider.module.scss";

const Slider = () => {
  return (
    <Carousel
      indicators={false}
      prevLabel={null}
      nextLabel={null}
      prevIcon={
        <span aria-hidden="true">
          <BsArrowLeft className={styles.icons} />
        </span>
      }
      nextIcon={
        <span aria-hidden="true">
          <BsArrowRight className={styles.icons} />
        </span>
      }
    >
      <Carousel.Item>
        <img className=" w-100" src="/images/hero1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className=" w-100" src="/images/hero2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className=" w-100" src="/images/hero3.jpg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src="/images/hero3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
