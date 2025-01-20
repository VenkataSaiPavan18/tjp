
// import React from 'react';
// import { Container } from 'react-bootstrap';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
// import { Navigation, Autoplay } from 'swiper';
// import './sectionStyles.css'; 
// import poster01 from '../../../assets/home/posters/poster01.png'
// import poster02 from '../../../assets/home/posters/poster02.png';
// import indi1 from '../../../assets/home/posters/indi1.png';
// import indi2 from '../../../assets/home/posters/indi2.png';
// import indi3 from '../../../assets/home/posters/indi3.png';
// import indi4 from '../../../assets/home/posters/indi4.png';

// const slides = [
//   {
//     imgSrc: indi1,
//     // imgSrc: 'https://plus.unsplash.com/premium_photo-1679811673491-18b886de424c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     // imgSrc: 'https://via.placeholder.com/1600x900.png?text=Slide+1',
//     title: 'One Meal a Day With Millets',
//   },
//   {
//     imgSrc: indi2,
//     // imgSrc: 'https://images.unsplash.com/photo-1504027973709-58986e840e79?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Products',
//   },
//   {
//     imgSrc: indi3,
//     // imgSrc: 'https://media.istockphoto.com/id/604830968/photo/fresh-millet-crop-landscape.jpg?s=1024x1024&w=is&k=20&c=66gb0h9bzQ993VHQvIdZ9mRlYsdsne1DB3UewIOC6ZU=',
//     title: 'Franchisee Stores',
//   },
//   {
//     imgSrc: indi4,
//     // imgSrc: 'https://media.istockphoto.com/id/604830968/photo/fresh-millet-crop-landscape.jpg?s=1024x1024&w=is&k=20&c=66gb0h9bzQ993VHQvIdZ9mRlYsdsne1DB3UewIOC6ZU=',
//     title: 'Franchisee Stores',
//   },
// ];

// const TopSection = () => {
//   return (
//     <div className="main-slide">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         spaceBetween={30}
//         slidesPerView={1}
//         style={{ zIndex: 0, position: 'relative' }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="item"
//               style={{
//                 backgroundImage: `url(${slide.imgSrc})`,
//                 backgroundSize: 'cover',
//                 objectFit:'contain',
//                 backgroundPosition:"center",
//                 width: '90%',
//                 height: '90%',
//                 scale:"0.8"
//               }}
//             >
//               <div
//                 className=" slide-2 d-flex align-items-center justify-content-center"
//                 style={{
//                   height: '90%',
//                   // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 }}
//               >
//                 {/* <Container className="text-center text-white">
//                   <h2 className="slide-title2 pb-50" style={{ marginBottom: '50px' }}>
//                     {slide.title}
//                   </h2>
//                 </Container> */}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default TopSection;

import React,{useState,useEffect} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './sectionStyles.css'; 

import { useNavigate } from 'react-router-dom';




const TopSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  const slides = [
    // { imgSrc: indi1, title: 'One Meal a Day With Millets' },
    // { imgSrc: indi2, title: 'Products' },
    // { imgSrc: indi3, title: 'Franchisee Stores' },
    // { imgSrc: indi4, title: 'Franchisee Stores' },
    // { imgSrc: poster01, title: 'Franchisee Stores' },
    // { imgSrc: poster02, title: 'franchisee Stores' },
    // { imgSrc: "https://surveyappanswers.blob.core.windows.net/jaavapot/Poster%204.png", title: 'franchisee Stores' },
    { imgSrc: "https://surveyappanswers.blob.core.windows.net/jaavapot/duh.png", title: 'franchisee Stores' },
    
    { imgSrc: "https://surveyappanswers.blob.core.windows.net/jaavapot/Poster%202.png", title: 'franchisee Stores' },
    // { imgSrc: "https://surveyappanswers.blob.core.windows.net/jaavapot/poster%203.png", title: 'Franchisee Stores' },
    { imgSrc: "https://surveyappanswers.blob.core.windows.net/jaavapot/duh.png", title: 'franchisee Stores' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel" style={{ height: '100vh', width: '100vw', overflow: 'hidden',backgroundColor:"#FDF0DD" }}>
      <div
        className="slides"
        style={{
          display: 'flex',
          transform: `translateX(-${currentSlide * 100}vw)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              minWidth: '100vw',
              height: '86vh',
              scale:"1",
              cursor: 'pointer', 
              background: `url(${slide.imgSrc}) center/cover no-repeat`,
            }}
            onClick={() => navigate('/milletproducts')} 
          >
             {/* <img
    src={slide.imgSrc} // Add the image source here
    alt={slide.title} // Add alt text for accessibility
    style={{
      position: 'absolute',
      bottom: '20%',
      left: '70%',
      width: '500px', // Adjust the size of the image as needed
      height: 'auto',
    }}
  /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
