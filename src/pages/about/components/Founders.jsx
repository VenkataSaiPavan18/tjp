// import React from "react";
// import "../about.css";
// import img from "../../../assets/img/about/Image05.png";
// import img02 from "../../../assets/img/about/Image03.png";

// function Founders() {
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
//     <div style={{marginTop:'100px',}}>
//         <div className="FounderHeading">
//     <div className="HeadingContent">
//         <p style={{color:'#FD7E4B',fontWeight:'400'}}>Meet Our</p>
//         <p style={{color:'#F67939'}}>Founders</p>
//     </div>
// </div>

//       {/* <div className="FounderHeading">
//         <p><span style={{color:'#FD7E4B',fontWeight:'400'}}>Meet Our</span></p>
//         <p><span style={{color:'#F67939'}}>Founders</span></p>
//       </div> */}
//       <div className="row rest-about" style={{marginTop:'40px'}}>
//         {/* <div className="col-md-12 rest-about"> */}
//         <div className="col-md-6 text-center">
//           <img src={img} style={imageStyle} height="500px" width="620px" />
//         </div>
//         <div className="col-md-6 rest-about">
//           {/* <p className="storyTitle">"Lost Legacies: The Fading Traditions of <br/> Our Grandparents' Nurturing Ways"</p> */}
//           <p className="storyText">
//           <span style={{color:'#F67939',fontSize:"30px"}}>“</span>  Here is the story of Mr. & Mrs. Ramesh, who were dealing with their elderly ill parents who have digestive issues that come through side effects associated with the long-term medication that they were taking. In their search for a solution, they discovered ancient grains and foods as food that worked so magically on them leading to positive results within no time.

//           </p>
    
//           <p className="storyText">
//           <p className="storyText">
//           Here is the story of Mr. & Mrs. Ramesh, who were dealing with their elderly ill parents who have digestive issues that come through side effects associated with the long-term medication that they were taking. In their search for a solution, they discovered ancient grains and foods as food that worked so magically on them leading to positive results within no time.
//           <span style={{color:'#F67939',fontSize:"30px"}}>”</span> 
          
//           </p>
//           </p>
//         </div>
       
//       </div>

//     </div>
//   );
// }

// export default Founders;

import React from "react";
import "../about.css";
import img from "../../../assets/img/about/Image05.png";
import img02 from "../../../assets/img/about/Image03.png";

function Founders() {
  return (
    <div className="founders-container">
      <div className="FounderHeading">
        <div className="HeadingContent">
          <p className="meet-our-text">Meet Our</p>
          <p className="founders-text">Founders</p>
        </div>
      </div>

      <div className="row rest-about">
        <div className="col-md-6 text-center">
          <img src={img} alt="Founder" className="founder-image" />
        </div>
        <div className="col-md-6 rest-about">
          <p className="storyText">
            <span className="quote-symbol">“</span> Here is the story of Our Founders, who were dealing with their
            elderly ill parents who have digestive issues that come through side
            effects associated with the long-term medication that they were
            taking. In their search for a solution, they discovered ancient
            grains and foods as food that worked so magically on them leading to
            positive results within no time.
          </p>

          <p className="storyText">
            <span className="quote-symbol">”</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Founders;
