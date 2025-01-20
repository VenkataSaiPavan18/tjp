// import React from "react";
// import "../about.css";
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import img from "../../../assets/img/about/Image04.png";
// import FlagIcon from '@mui/icons-material/Flag';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';


// function Things() {
//   const cardStyle = {
//     backgroundColor: "white",
//     color: "black",
//     padding: "1rem",
//     boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
//     borderRadius: "10px",
//     width: "300px",
//     textAlign: "center",
//   };

//   const lineStyle = {
//     height: "5px",
//     width: "100px",
//     backgroundColor: "red",
//     position: "absolute",
//   };

//   const dotStyle = {
//     height: "10px",
//     width: "10px",
//     backgroundColor: "red",
//     borderRadius: "50%",
//     position: "absolute",
//   };

//   return (
//     <div style={{ position: "relative", textAlign: "center", margin: "100px",paddingBottom:'150px' }}>
//       <div>
//         <p className="storyHeading">Our <span style={{color:'#F67939'}}>Things</span></p>
//       </div>
//       {/* Centralized Image */}
//       <div style={{ position: "relative" }}>
//         <img
//           src={img}
//           alt="Central Image"
//           style={{ width: "400px", height: "330px" }}
//         />
//       </div>

//       <div style={{ ...cardStyle, position: "absolute", top: "50%", left: "0", background: "#FFDDD0", borderRadius: "10px", padding: "20px", width: "300px",fontWeight:'600' }}>
//   <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//     <div style={{ 
//       color: "#F67939", 
//       background: "rgba(253, 126, 75, 0.35)", 
//       borderRadius: "10px", 
//       padding: "5px", 
//       marginRight: "10px" 
//     }}>
//       <FlagIcon size= {24} />
//     </div>
//     <p style={{ margin: 0,color: '#F67939',fontFamily:'inter',fontSize:'18px',lineHeight:'20px'
//  }}>Our Mission</p>
//   </div>
  
//   <p style={{ fontFamily: "Inter", fontSize: "18px", fontWeight: "400", lineHeight: "28px", textAlign: "justify", color: "#848383" }}>
//     Our mission is to provide the best solutions to meet our customers' needs and drive innovation in the industry.
//   </p>

// </div>
//       <div style={{ ...cardStyle, position: "absolute", top: "50%", right: "0" , background: "#FFDDD0", borderRadius: "10px", padding: "20px", width: "300px",fontWeight:'600' }}>
//   <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//     <div style={{ 
//       color: "#F67939", 
//       background: "rgba(253, 126, 75, 0.35)", 
//       borderRadius: "10px", 
//       padding: "5px", 
//       marginRight: "10px" 
//     }}>
//       <VisibilityIcon size= {24} />
//     </div>
//     <p style={{ margin: 0,color: '#F67939',fontFamily:'inter',fontSize:'18px',lineHeight:'20px'
//  }}>Our Vision</p>
//   </div>
  
//   <p style={{ fontFamily: "Inter", fontSize: "18px", fontWeight: "400", lineHeight: "28px", textAlign: "justify", color: "#848383" }}>
//   Our vision is to create a sustainable future where everyone has access
//           to the best resources and services </p>

// </div>
//       <div style={{ ...cardStyle, position: "absolute", bottom: "-100", left: "50%", transform: "translateX(-50%)" , background: "#FFDDD0", borderRadius: "10px", padding: "20px", width: "300px",fontWeight:'600' }}>
//   <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//     <div style={{ 
//       color: "#F67939", 
//       background: "rgba(253, 126, 75, 0.35)", 
//       borderRadius: "10px", 
//       padding: "5px", 
//       marginRight: "10px" 
//     }}>
//       <ThumbUpIcon size= {24} />
//     </div>
//     <p style={{ margin: 0,color: '#F67939',fontFamily:'inter',fontSize:'18px',lineHeight:'20px'
//  }}>Our Promise</p>
//   </div>
  
//   <p style={{ fontFamily: "Inter", fontSize: "18px", fontWeight: "400", lineHeight: "28px", textAlign: "justify", color: "#848383" }}>
//   We promise to maintain excellence and continuously improve in all
//   aspects of our business. </p>

// </div>
//     </div>
//   );
// }

// export default Things;

import React from "react";
import "./styles.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import img from "../../../assets/img/about/Image04.png";
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Things() {
  return (
    <div className="responsive-container" style={{paddingBottom:'250px'}}>
      <div>
        <p className="storyHeading">
          Our <span className="highlight">Things</span>
        </p>
      </div>
      
      {/* Centralized Image */}
      <div className="image-container">
        <img src={img} alt="Central Image" className="responsive-image" />
      </div>

      <div className="responsive-card mission-card">
        <div className="icon-text-container">
          <div className="icon-background">
            <FlagIcon size={24} />
          </div>
          <p className="card-title">Our Mission</p>
        </div>
        <p className="about-card-description">
          Our mission is to provide the best solutions to meet our customers' needs and drive innovation in the industry.
        </p>
      </div>

      <div className="responsive-card vision-card">
        <div className="icon-text-container">
          <div className="icon-background">
            <VisibilityIcon size={24} />
          </div>
          <p className="card-title">Our Vision</p>
        </div>
        <p className="about-card-description">
          Our vision is to create a sustainable future where everyone has access to the best resources and services.
        </p>
      </div>

      <div className="responsive-card promise-card">
        <div className="icon-text-container">
          <div className="icon-background">
            <ThumbUpIcon size={24} />
          </div>
          <p className="card-title">Our Promise</p>
        </div>
        <p className="about-card-description">
          We promise to maintain excellence and continuously improve in all aspects of our business.
        </p>
      </div>
    </div>
  );
}

export default Things;

