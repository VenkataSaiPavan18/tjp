import React from "react";
import Slider from "react-slick";
// import img1 from "./assets/image1.png";
// import img1 from "../../../../assets/proso.png";
// import img1 from "../../../../assets/babyfood/barnyard.png";
import img1 from "../../../../assets/home/products/product01.png";
import img2 from "../../../../assets/home/products/product02.png";
// import img3 from "../../../../assets/home/products/product10.png"; 
import img4 from "../../../../assets/home/products/product04.png"; 
import img5 from "../../../../assets/home/products/product05.png"; 
import img6 from "../../../../assets/home/products/product06.png"; 
import img7 from "../../../../assets/home/products/product07.png"; 
import img8 from "../../../../assets/home/products/product08.png"; 
import img9 from "../../../../assets/home/products/product09.png"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AnimatedImageSlider.css"; // Import the CSS for additional styling

const images = [img1, img2, img4, img5, img6, img7, img8, img9]; // Add all your imported images here

const AnimatedImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image-wrapper">
            <img src={image} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AnimatedImageSlider;
