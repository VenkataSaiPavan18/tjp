// import React from "react";
// import "../about.css";
// import img from "../../../assets/img/about/Image02.png";
// import img02 from "../../../assets/img/about/Image03.png";

// function Stories() {
//   const containerStyle = {
//     marginTop: "2rem",
//     marginBottom: "5rem",
//     backgroundColor: "rgba(189, 152, 109,0.5)",
//     // backgroundColor:'#F8F8F8',
//     padding: "2rem",
//     borderRadius: "20px",
//     boxShadow: "2px 2px 2px 2px black",
//   };

//   const buttonStyle = {
//     backgroundColor: "#3498db",
//     border: "none",
//     color: "#fff",
//     backgroundColor: "#FF7953",
//   };
//   const imageStyle = {
//     // opacity:'0.8'
//   };
//   return (
//     <div style={{margin:'100px'}}>
//       <div>
//         <p className="storyHeading">Our <span style={{color:'#F67939'}}>Story</span></p>
//       </div>
//       <div className="row rest-about" style={{marginTop:'100px'}}>
//         {/* <div className="col-md-12 rest-about"> */}
//         <div className="col-md-6 rest-about">
//           <p className="storyTitle">"Lost Legacies: The Fading Traditions of <br/> Our Grandparents' Nurturing Ways"</p>
//           <p className="storyText">
//             As children, we were raised by Grand Parents who surrounded us with
//             healthy breath, healthy food, and healthy thoughts, but we suddenly
//             knew these good things had crumbled. Once they had crumbled, they
//             became history and never seems a reality again.
//           </p>
    
//         </div>
//         <div className="col-md-6 text-center">
//           <img src={img} style={imageStyle} height="500px" width="500px" />
//         </div>
//       </div>
//       <div className="row rest-about" style={{marginTop:'100px'}}>
//       <div className="col-md-6 text-center">
//           <img src={img02} style={imageStyle} height="500px" width="500px" />
//         </div>
//         <div className="col-md-6 rest-about">
//           <p className="storyTitle">"JaavaPot: “Reviving Ancient Grains with <br/> Global Inspiration for Modern Wellness" </p>
//           <p className="storyText">
//           Our undivided attention toward millet and millet-based foods has been on the rise with the blend of psychology and nutrition together. The urge of catering healthy food made us craft the JaavaPot to your table. Hence, we understood the steady need for ancient foods and were inspired by global cuisines like Asian congee, Mexican champurrado, and Indian Khichdi.
//           </p>
    
//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default Stories;

import React from "react";
import "./styles.css";
import img from "../../../assets/img/about/Image02.png";
import img02 from "../../../assets/img/about/Image03.png";

function Stories() {
  return (
    <div className="stories-container">
      <div>
        <p className="storyHeading">
          Our <span className="highlight">Story</span>
        </p>
      </div>

      <div className="row rest-about">
        <div className="col-md-6 rest-about text-container">
          <p className="storyTitle">
            "Lost Legacies: The Fading Traditions of <br />
            Our Grandparents' Nurturing Ways"
          </p>
          <p className="storyText">
            As children, we were raised by Grand Parents who surrounded us with
            healthy breath, healthy food, and healthy thoughts, but we suddenly
            knew these good things had crumbled. Once they had crumbled, they
            became history and never seem a reality again.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={img} className="storyImage" alt="Story image 1" />
        </div>
      </div>

      <div className="row rest-about">
        <div className="col-md-6 text-center">
          <img src={img02} className="storyImage" alt="Story image 2" />
        </div>
        <div className="col-md-6 rest-about text-container">
          <p className="storyTitle">
            "JaavaPot: Reviving Ancient Grains with <br />
            Global Inspiration for Modern Wellness"
          </p>
          <p className="storyText">
            Our undivided attention toward millet and millet-based foods has
            been on the rise with the blend of psychology and nutrition
            together. The urge of catering healthy food made us craft the
            JaavaPot to your table. Hence, we understood the steady need for
            ancient foods and were inspired by global cuisines like Asian
            congee, Mexican champurrado, and Indian Khichdi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stories;
