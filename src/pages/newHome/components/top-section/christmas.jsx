// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // import "swiper/css/effect-coverflow";
// import img1 from "../../../../assets/home/posters/christmas/christmas01.png";
// import img2 from "../../../../assets/home/posters/christmas/christmas02.png";
// import img3 from "../../../../assets/home/posters/christmas/christmas03.png";
// import img4 from "../../../../assets/home/posters/christmas/christmas04.png";

// export default function Christmas() {
//   const navigate = useNavigate();

//   const slides = [img1, img2, img3, img4];

//   const handleSlideClick = () => {
//     navigate("/milletproducts");
//   };

//   return (
//     <div style={{ width: "100%", backgroundColor: "#f5f5f5", margin: "0" }}>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         // effect="coverflow"
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         loop
//         style={{ width: "100%", margin: "0" }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} onClick={handleSlideClick}>
//             <img
//               src={slide}
//               alt={`Slide ${index + 1}`}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//                 borderRadius: "15px",
//                 margin: "0",
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import img1 from "../../../../assets/home/posters/christmas/christmas01.png";
// import img2 from "../../../../assets/home/posters/christmas/christmas02.png";
// import img3 from "../../../../assets/home/posters/christmas/christmas03.png";
// import img4 from "../../../../assets/home/posters/christmas/christmas04.png";

// export default function Christmas() {
//   const navigate = useNavigate();

//   const slides = [img1, img2, img3, img4];

//   const handleSlideClick = () => {
//     navigate("/milletproducts");
//   };

//   return (
//     <div
//       className="carousel-container"
//       style={{
//         width: "100%",
//         backgroundColor: "#f5f5f5",
//         margin: "0",
//         padding: "0",
//       }}
//     >
//       <div
//         id="carouselExample"
//         className="carousel slide"
//         data-bs-ride="carousel"
//         style={{ height: "70vh", margin: "0" }}
//       >
//         <div className="carousel-inner" style={{ height: "100%" }}>
//           {slides.map((slide, index) => (
//             <div
//               className={`carousel-item ${index === 0 ? "active" : ""}`}
//               key={index}
//               onClick={handleSlideClick}
//               style={{ height: "100%" }}
//             >
//               <img
//                 src={slide}
//                 className="d-block w-100"
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   height: "100%",
//                   objectFit: "contain",
//                   margin: "0",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import img1 from "../../../../assets/home/posters/christmas/christmas01.png";
// import img2 from "../../../../assets/home/posters/christmas/christmas02.png";
// import img3 from "../../../../assets/home/posters/christmas/christmas03.png";
// import img4 from "../../../../assets/home/posters/christmas/christmas04.png";

// export default function Christmas() {
//   const navigate = useNavigate();

//   const slides = [img1, img2, img3, img4];

//   const handleSlideClick = () => {
//     navigate("/milletproducts");
//   };

//   return (
//     <div
//       className="carousel-container"
//       style={{
//         width: "100%",
//         backgroundColor: "#f5f5f5",
//         margin: "0",
//         padding: "0",
//       }}
//     >
//       <div
//         id="carouselExample"
//         className="carousel slide"
//         data-bs-ride="carousel"
//         data-bs-interval="3000" // Auto transition every 3 seconds
//         style={{ height: "70vh",  width: "100%", margin: "0" }}
//       >
//         <div className="carousel-inner" style={{ height: "100%" ,  width: "100%",}}>
//           {slides.map((slide, index) => (
//             <div
//               className={`carousel-item ${index === 0 ? "active" : ""}`}
//               key={index}
//               onClick={handleSlideClick}
//               style={{ height: "100%",  width: "100%", }}
//             >
//               <img
//                 src={slide}
//                 className="d-block"
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   height: "100%",
//                   width: "100%",
//                   objectFit: "contain",
//                   margin: "0",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../../../assets/home/posters/christmas/christmas01.png";
import img2 from "../../../../assets/home/posters/christmas/christmas02.png";
import img3 from "../../../../assets/home/posters/christmas/christmas03.png";
import img4 from "../../../../assets/home/posters/christmas/christmas04.png";

export default function Christmas() {
  const navigate = useNavigate();

  const slides = [img1, img2, img3, img4];

  const handleSlideClick = () => {
    navigate("/milletproducts");
  };

  return (
    <div
      className="carousel-container"
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        margin: "0",
        padding: "0",
        marginBottom:'80px'
      }}
    >
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{ height: "70vh", margin: "0" }}
      >
        <div className="carousel-inner" style={{ height: "100%", margin: "0", padding: "0" }}>
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
              onClick={handleSlideClick}
              style={{ height: "100%" }}
            >
              <img
                src={slide}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
