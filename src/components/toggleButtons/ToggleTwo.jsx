// import React, { useState } from "react";
// import "./ToggleTwo.css";

// const ToggleTwo = ({ navItems = [], sliderColor = "#00878e", onItemClick }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleClick = (evt, index) => {
//     evt.preventDefault();
//     setActiveIndex(index);
//     if (onItemClick) {
//       onItemClick(index);
//     }
//   };

//   return (
//     <nav className="toggle-nav">
//       <ul className="toggle-nav__list">
//         {navItems.map((label, index) => (
//           <li className="toggle-nav__item" key={index}>
//             <a
//               href="#"
//               className={`toggle-nav__link ${
//                 activeIndex === index ? "toggle-nav__link--active" : ""
//               }`}
//               onClick={(evt) => handleClick(evt, index)}
//             >
//               {label}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <div className="toggle-nav__slider">
//         <div
//           className="toggle-nav__slider-rect"
//           style={{
//             transform: `translateX(${activeIndex * (100 / navItems.length)}%)`,
//             backgroundColor: sliderColor,
//             width: `${100 / navItems.length}%`,
//           }}
//         ></div>
//       </div>
//     </nav>
//   );
// };

// export default ToggleTwo;


import React from "react";
import { styled } from "@mui/system";

const NavButton = styled("button")(({ active }) => ({
  backgroundColor: active ? "#FD7E4B" : "white",
  color: active ? "#fff" : "#333",
  border: "none",
  padding: "10px 20px",
  margin: "0 5px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "20px",
  fontWeight: active ? "bold" : "normal",
  "&:hover": {
    backgroundColor: active ? "#e06d43" : "#e6e6e6",
  },
}));

const ToggleTwo = ({ options, activeOption, onOptionChange, animationType }) => {
  return (
    <div className="d-flex justify-content-center m-3">
      {options.map((option, index) => (
        <NavButton
          key={index}
          data-aos={animationType[index] || "fade-up"}
          active={activeOption === option.value}
          onClick={() => onOptionChange(option.value)}
        >
          {option.label}
        </NavButton>
      ))}
    </div>
  );
};

export default ToggleTwo;
