import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";

import Bathroom from "../assets/bathroom.jpg?as=webp";
import Bedroom from "../assets/bedroom.jpg?as=webp";
import Dining from "../assets/kitchen.jpeg?as=webp";
import Living from "../assets/living_room.jpg?as=webp";
import Office from "../assets/office.jpeg?as=webp";
import Outdoor from "../assets/outdoor.jpg?as=webp";
import * as styles from "../styles/new_slider.module.css";

type Slide = {
  description: string;
  image: string;
  name: string;
};

const slidesData: Slide[] = [
  { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Outdoor, name: "Outdoor" },
  { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Dining, name: "Dining" },
  { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Living, name: "Living" },
  { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Bedroom, name: "Bedroom" },
  { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Office, name: "Office" },
  { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Bathroom, name: "Bathroom" },
];

export default function NewSlider() {
  const [slides, setSlides] = useState<Slide[]>(slidesData);
  const [render, setRender] = useState<number>(0);

  const handleNext = () => {
    setRender(render + 1);
    setSlides((prevSlides) => {
      return [...prevSlides.slice(1), prevSlides[0]!];
    });
  };

  const handlePrev = () => {
    setRender(render - 1);
    setSlides((prevSlides) => {
      return [prevSlides[prevSlides.length - 1]!, ...prevSlides.slice(0, -1)];
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.slide}>
        {slides.map((slide, idx) => (
            <div className={styles.item} key={render + idx} style={{ backgroundImage: `url(${slide.image})` }}>
              <div className={styles.content}>
                <div className={styles.name}>{slide.name}</div>
                <div className={styles.des}>{slide.description}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <button onClick={handlePrev}>
            <ArrowBackIcon />
          </button>
          <button onClick={handleNext}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </>
  );
}
