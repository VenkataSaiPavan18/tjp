// PromotionalSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Promotional from "./Promotional"; // Your existing promotional component
import img03 from "../../../assets/home/promotional/bg02.png"; // Image for first slide
import img04 from "../../../assets/home/promotional/bg02.png"; // Image for second slide
import img05 from "../../../assets/home/promotional/bg02.png"; // Image for third slide
import card02 from "../../../assets/home/promotional/card02.png";
import card03 from "../../../assets/home/promotional/card03.png";


const promotionalContent = [
  {
    id: 1,
    bgImage: img03,
    innerImage: card02,
    headerOne: "We are ready to",
    headerTwo: "Distributors Partnership",
    text: "Tiny seeds, Big Health. Elevate every meal into a superfood sensation. In the symphony of superfoods, let millets play the lead role, harmonizing health and taste for a nutrient-packed life."
  },
  {
    id: 2,
    bgImage: img04,
    innerImage: card03,
    headerOne: "Join us as",
    headerTwo: "Retail Partners",
    text: "Experience the health benefits of millets. Make every meal a delight. Partner with us to bring superfoods to every home."
  },
  {
    id: 3,
    bgImage: img05,
    innerImage: card02,
    headerOne: "Explore our",
    headerTwo: "Product Range",
    text: "Discover a variety of millet-based products. Transform your diet with nutrient-rich options that taste great."
  }
];

const PromotionalSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {promotionalContent.map((content) => (
        <SwiperSlide key={content.id}>
          <Promotional
            bgImage={content.bgImage}
            innerImage={content.innerImage}
            headerOne={content.headerOne}
            headerTwo={content.headerTwo}
            text={content.text}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromotionalSlider;
