// import React, { useState } from "react";
// import backgroundImg from '../../../../assets/home/posters/experience/HeroNext.png';
// import icon1 from '../../../../assets/home/posters/experience/EatFit.png';
// import icon2 from '../../../../assets/home/posters/experience/LiveHealthy.png';
// import icon3 from '../../../../assets/home/posters/experience/StayStrong.png';
// import icon4 from '../../../../assets/home/posters/experience/LiveLong.png';

// const Experience = () => {
//   const [selectedContent, setSelectedContent] = useState("");

//   // Content for each icon
//   const content = {
//     icon1: {
//       title: "100% Organic",
//       description: "All our products are crafted with 100% natural and organic ingredients.",
//     },
//     icon2: {
//       title: "Traceability",
//       description: "Track the journey of every ingredient from farm to table.",
//     },
//     icon3: {
//       title: "Sustainability",
//       description: "We ensure our processes are eco-friendly and sustainable.",
//     },
//   };

//   const handleIconClick = (key) => {
//     setSelectedContent(content[key]);
//   };

//   return (
//     <div className="experience-page">
//       {/* Background Image Section */}
//       <section
//         className="position-relative text-white"
//         style={{
//           backgroundImage: `url(${backgroundImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "400px",
//         }}
//       >
//         {/* Heading */}
//         <div className="position-absolute top-50 start-0 translate-middle-y ps-5">
//           <p className="display-3 fw-bold"
//           style={{fontSize:'35px',fontWeight:'700',letterSpacing:'7px'}}>The Jaavapot Experience</p>

//           {/* Icons with Clickable Content */}
//           <div className="d-flex flex-row mt-4">
//           <div className="mb-3 text-center m-1">
//               <img
//                 src={icon1}
//                 alt="Icon 1"
//                 style={{ width: "70px", cursor: "pointer" }}
//                 // onClick={() => handleIconClick("icon1")}
//               />
//               <p className="mt-2" style={{ fontSize: "16px" }}>
//                 100% Organic <br />
//                 Ingredients
//               </p>
//             </div>
//             <div className="mb-3 text-center m-1">
//               <img
//                 src={icon2}
//                 alt="Icon 2"
//                 style={{ width: "70px", cursor: "pointer" }}
//                 // onClick={() => handleIconClick("icon1")}
//               />
//               <p className="mt-2" style={{ fontSize: "16px" }}>
//                 Live Life  <br />
//                 Healthy
//               </p>
//             </div>
//             <div className="mb-3 text-center m-1">
//               <img
//                 src={icon3}
//                 alt="Icon 3"
//                 style={{ width: "70px", cursor: "pointer" }}
//                 // onClick={() => handleIconClick("icon1")}
//               />
//               <p className="mt-2" style={{ fontSize: "16px" }}>
//                 Stay Healthy<br />
//                 Strong
//               </p>
//             </div>
//             <div className="mb-3 text-center m-1">
//               <img
//                 src={icon4}
//                 alt="Icon 4"
//                 style={{ width: "70px", cursor: "pointer" }}
//                 // onClick={() => handleIconClick("icon4")}
//               />
//               <p className="mt-2" style={{ fontSize: "16px" }}>
//                 Live<br />
//                 Long
//               </p>
//             </div>
//             {/* <img
//               src={icon1}
//               alt="Icon 1"
//               className="mb-3"
//               style={{ width: "50px", cursor: "pointer", }}
//               onClick={() => handleIconClick("icon1")}
//             /> */}
//             {/* <img
//               src={icon2}
//               alt="Icon 2"
//               className="mb-3"
//               style={{ width: "50px", cursor: "pointer" }}
//               onClick={() => handleIconClick("icon2")}
//             />
//             <img
//               src={icon3}
//               alt="Icon 3"
//               style={{ width: "50px", cursor: "pointer" }}
//               onClick={() => handleIconClick("icon3")}
//             /> */}
//           </div>
//         </div>

//         {/* Display Selected Content */}
//         {selectedContent && (
//           <div
//             className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75 text-white p-4 rounded"
//             style={{ width: "300px" }}
//           >
//             <h2 className="h4">{selectedContent.title}</h2>
//             <p>{selectedContent.description}</p>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Experience;


import React, { useState } from "react";
import backgroundImg from "../../../../assets/home/posters/experience/HeroNext.png";
import icon1 from "../../../../assets/home/posters/experience/EatFit.png";
import icon2 from "../../../../assets/home/posters/experience/LiveHealthy.png";
import icon3 from "../../../../assets/home/posters/experience/StayStrong.png";
import icon4 from "../../../../assets/home/posters/experience/LiveLong.png";

const Experience = () => {
  const [selectedContent, setSelectedContent] = useState("");

  // Content for each icon with their respective images
  const content = [
    {
      key: "icon1",
      title: "100% Organic",
      description: "All our products" ,
      image: icon1,
    },
    {
      key: "icon2",
      title: "Traceability",
      description: "Track the journey",
      image: icon2,
    },
    {
      key: "icon3",
      title: "Sustainability",
      description: "We ensure our",
      image: icon3,
    },
  ];

  const handleIconClick = (key) => {
    const selected = content.find((item) => item.key === key);
    setSelectedContent(selected);
  };

  return (
    <div className="experience-page">
  {/* Background Image Section */}
  <section
    className="position-relative text-white"
    style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "right center",
      height: "420px",
    }}
  >
    {/* Heading */}
    <div className="position-absolute top-50 start-0 translate-middle-y ps-5">
      <p
        className="display-3 fw-bold"
        style={{
          fontSize: "35px",
          fontWeight: "700",
          letterSpacing: "7px",
        }}
      >
        The Jaavapot Experience
      </p>

      {/* Icons with Clickable Content */}
      <div className="d-flex flex-wrap justify-content-center align-items-start mt-4">
        {content.map((item, index) => (
          <div
            key={index}
            className="icon-container d-flex align-items-center mb-4"
            style={{
              textAlign: "center",
              margin: "10px",
              gap: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "70px",
                cursor: "pointer",
              }}
              onClick={() => handleIconClick(item.key)}
            />
            <div
              className="text-container"
              style={{
                fontSize: "16px",
                maxWidth: "150px", // Prevents content from overflowing
                wordWrap: "break-word", // Ensures words break if necessary
              }}
            >
              <p className="mb-1 fw-bold">{item.title}</p>
              <p className="mb-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Display Selected Content */}
    {selectedContent && (
      <div
        className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75 text-white p-4 rounded"
        style={{ width: "300px" }}
      >
        <h2 className="h4">{selectedContent.title}</h2>
        <p>{selectedContent.description}</p>
      </div>
    )}
  </section>

  {/* Mobile View Specific Adjustments */}
  <style jsx>{`
    @media (max-width: 768px) {
      .experience-page section {
        background-position: center center;
      }
      .icon-container {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
      .text-container {
        text-align: left;
        padding-left: 10px;
        overflow: hidden; /* Ensures no visual overflow */
        white-space: normal; /* Ensures text wraps */
        max-width: 150px; /* Adjust to fit your design */
      }
    }

    @media (min-width: 769px) {
      .icon-container {
        flex-direction: column;
        align-items: center;
      }
      .text-container {
        text-align: center;
      }
    }
  `}</style>
</div>
    // <div className="experience-page">
    //   {/* Background Image Section */}
    //   <section
    //     className="position-relative text-white"
    //     style={{
    //       backgroundImage: `url(${backgroundImg})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "right center",
    //       height: "400px",
    //     }}
    //   >
    //     {/* Heading */}
    //     <div className="position-absolute top-50 start-0 translate-middle-y ps-5">
    //       <p
    //         className="display-3 fw-bold"
    //         style={{
    //           fontSize: "35px",
    //           fontWeight: "700",
    //           letterSpacing: "7px",
    //         }}
    //       >
    //         The Jaavapot Experience
    //       </p>

    //       {/* Icons with Clickable Content */}
    //       <div className="d-flex flex-wrap justify-content-center align-items-start mt-4">
    //         {content.map((item, index) => (
    //           <div
    //             key={index}
    //             className="icon-container d-flex align-items-center mb-4"
    //             style={{
    //               textAlign: "center",
    //               margin: "10px",
    //               gap: "10px",
    //             }}
    //           >
    //             <img
    //               src={item.image}
    //               alt={item.title}
    //               style={{
    //                 width: "70px",
    //                 cursor: "pointer",
    //               }}
    //               onClick={() => handleIconClick(item.key)}
    //             />
    //             <div className="text-container" style={{ fontSize: "16px" }}>
    //               <p className="mb-1 fw-bold">{item.title}</p>
    //               <p className="mb-0">{item.description}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Display Selected Content */}
    //     {selectedContent && (
    //       <div
    //         className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75 text-white p-4 rounded"
    //         style={{ width: "300px" }}
    //       >
    //         <h2 className="h4">{selectedContent.title}</h2>
    //         <p>{selectedContent.description}</p>
    //       </div>
    //     )}
    //   </section>
    //   {/* Mobile View Specific Adjustments */}
    //   <style jsx>{`
    //     @media (max-width: 768px) {
    //       .experience-page section {
    //         background-position: center center;
    //       }
    //       .icon-container {
    //         flex-direction: row;
    //         align-items: center;
    //         justify-content: flex-start;
    //       }
    //       .text-container {
    //         text-align: left;
    //         padding-left: 10px;
    //       }
    //     }

    //     @media (min-width: 769px) {
    //       .icon-container {
    //         flex-direction: column;
    //         align-items: center;
    //       }
    //       .text-container {
    //         text-align: center;
    //       }
    //     }
    //   `}</style>
    // </div>
  );
};

export default Experience;
