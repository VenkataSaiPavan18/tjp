// import React from "react";
// import { Container, Grid, Box, Typography, Button } from "@mui/material";
// import { styled } from "@mui/system";
// import img01 from "../../../assets/home/hero01.gif";
// import img02 from "../../../assets/home/bowl.svg";
// import img03 from "../../../assets/home/topBg.png";

// const AboutUsText = styled(Typography)({
//   color: "#FD7E4B",
//   fontFamily: "Arial",
//   fontSize: "52px",
//   fontWeight: 700,
//   lineHeight: "41px",
// });

// const EmphasizedText = styled(Typography)({
//   color: "#FD7E4B",
//   fontFamily: "Arial",
//   fontSize: "24px",
//   fontWeight: 700,
//   lineHeight: "52px",
// });

// const ExploreMoreButton = styled(Button)({
//   borderRadius: "20px",
//   border: "1px solid #FD7F4C",
//   backgroundColor: "#FD7E4B",
//   color: "#fff",
//   padding: "10px 20px",
//   textTransform: "none",
//   fontFamily: "Arial",
//   fontWeight: 700,
//   fontSize: "18px",
//   transition: "background-color 0.3s ease",
//   "&:hover": {
//     backgroundColor: "#e6693b",
//     borderColor: "#e6693b",
//   },
// });

// const HeroSection = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${img03})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         padding: "50px 0",
//       }}
//     >
//       <Container>
//         <Grid container spacing={10} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Box display="flex" alignItems="center">
//               <AboutUsText>The JAAVAPOT</AboutUsText>
//               <img
//                 src={img02}
//                 alt="Small Image"
//                 style={{ width: "64px", height: "64px", marginLeft: "16px" }}
//               />
//             </Box>
//             <p
//               style={{
//                 fontSize: "22px",
//                 width: "120%",
//                 fontFamily: "Arial",
//                 fontWeight: "400",
//               }}
//             >
//               Tiny seeds,{" "}
//               <EmphasizedText component="span">Big Health</EmphasizedText>{" "}
//               Elevate
//               <EmphasizedText component="span"> every meal</EmphasizedText> into
//               a superfood <br />
//               sensation. In the symphony of superfoods, let millets play the
//               lead <br />
//               role, harmonizing health and taste for a nutrient-packed life.
//             </p>
//             <ExploreMoreButton variant="outlined">ORDER NOW</ExploreMoreButton>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <img
//               src={img01}
//               alt="About Us"
//               style={{ width: "100%", height: "100%", objectFit: "contain" }}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default HeroSection;

import React, {useEffect,useState} from "react";
import Modal from 'react-modal';
import { useNavigate , Link } from "react-router-dom"; 
import { Container, Grid, Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import img01 from "../../../assets/home/hero01.gif";
import img02 from "../../../assets/home/bowl.svg";
import img03 from "../../../assets/home/topBg.png";
import reviews from '../../../contants/reviews.js';
import FoodData from '../../../contants/data.js';
import mainimg from "../../../assets/img/home/image12.png"



const AboutUsText = styled(Typography)({
  color: "#FD7E4B",
  fontFamily: "Arial",
  fontSize: "52px",
  fontWeight: 700,
  lineHeight: "41px",
});

const EmphasizedText = styled(Typography)({
  color: "#FD7E4B",
  fontFamily: "Arial",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "52px",
});

const ExploreMoreButton = styled(Button)({
  borderRadius: "20px",
  border: "1px solid #FD7F4C",
  backgroundColor: "#FD7E4B",
  color: "#fff",
  padding: "10px 20px",
  textTransform: "none",
  fontFamily: "Arial",
  fontWeight: 700,
  fontSize: "18px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#e6693b",
    borderColor: "#e6693b",
  },
});


const HeroSection = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  
 

  const [points, setPoints] = useState([
    'Nutrient Rich, Mighty and Small',
    'Gluten-Free Goodness',
    'Stable Blood Sugar Symphony',
    'Heart Health Harmony',
  ]);
  const [currentPointIndex, setCurrentPointIndex] = useState(0);

  const [points2, setPoints2] = useState([
    "Rich in Antioxidants",
    "Supports Digestive Regularity",
    "Low Glycemic Index",
    "Weight Management"
  ]);
  const [currentPointIndex2, setCurrentPointIndex2] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPointIndex((prevIndex) => (prevIndex + 1) % points.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [points.length]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPointIndex2((prevIndex) => (prevIndex + 1) % points2.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [points2.length]);



  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const videoUrl = 'https://surveyappanswers.blob.core.windows.net/jaavapot/Jaavapot.mp4';

  // Function to handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
  
    // Only show suggestions when there is a search query
    const suggestions =
      query !== ''
        ? FoodData.filter((food) => food.name.toLowerCase().includes(query.toLowerCase()))
        : [];
  
    setSearchSuggestions(suggestions);
  };



// ------------------------------rightside---------------

const [currentIndex, setCurrentIndex] = useState(0);


useEffect(() => {
  // Set up an interval to update both the current review and the animation
  const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length); // Update the current review index
  
  }, 5000);

  // Clean up the interval when the component unmounts
  return () => clearInterval(intervalId);
}, []);



  const currentReview = reviews[currentIndex];
 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to handleResize
    handleResize();

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);





  return (
 <div  style={{overflowX:"hidden"}}>  
 
  <div className='newbkg container-fluid '>
      <div className='row'>
        {/* Left side */}
        <div className='col-12 col-md-6 mt-5 mb-5' style={{ paddingLeft: '20px' }}>
          <h1 className='' style={{ letterSpacing: '0.5px' }}>
            Jaavapot: Tiny seeds, <span className='animate' style={{ color: '#ff5e0d' }}>big health.</span> Elevate{' '}
            <span className='animate' style={{ color: '#ff5e0d' }}>every meal</span> into a superfood sensation.
          </h1>
          <p  className='wavy-text' style={{ letterSpacing: '1px', paddingTop: '5px' }}>
            In the symphony of superfoods, let millets play the lead role, harmonizing health and
            taste for a nutrient-packed life.
          </p>
          <div className='input-group mb-3'>
            <input
              type='text'
              className=''
              placeholder='Know about your favorite superfood'
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              style={{width:"60%",borderRadius:"10px",padding:"5px",boxShadow:"1px 1px 1px 1px #ff5e0d",border:"0px",backgroundColor:"transparent"}}
            />
            {/* <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button' style={{marginLeft:"10px",fontSize:"12px",}}>
                Search
              </button>
            </div> */}
          </div>
          {/* Display search suggestions */}
          {searchQuery !== '' && (
          <ul className='list-group' style={{maxHeight:"5rem",overflow:"auto",width:"60%"}}>
            {searchSuggestions.map((food) => (
           <Link
           to={{
             pathname: `/menubenefits/${food.id}`,
           
           }}
           key={food.id}
         >
           <li className='list-group-item' style={{ width: '100%' }}>
             {food.name}
           </li>
         </Link>
            ))}
          </ul>
          )}


<div className='mt-3 ' style={{display:"flex"}}>
          <a href="/blogspage"> <button className='btn tabs2'  style={{backgroundColor:"#ff5e0d",fontWeight:"bold",color:"white",fontSize:"15px",margin:"10px"}}>
              Know More
            </button> </a> 
         {/* <a href="https://www.youtube.com/watch?v=cb7tkjB8pT0" target='_blank'>
           <div
              className='btn btn-watch-video'
              style={{ color: '#ff5e0d', border: '2px solid #ff5e0d', fontSize: '13px', margin: '10px', fontWeight: 'bold' }}
             
            >
              <span>Watch Video</span> 
            </div>
            </a>  */}
            <div
        className='btn btn-watch-video tabs1'
        style={{
          color: '#ff5e0d',
          border: '2px solid #ff5e0d',
          fontSize: '13px',
          margin: '10px',
          fontWeight: 'bold',
        }}
        onClick={openModal}
      >
        <span>Watch Video</span>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Watch Video Modal"
        style={{
          overlay: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            marginTop: '100px', // Adjust the top margin as needed
          },
        }}
      >
       
        <div>
          <iframe
            title="YouTube Video"
            width="100%"
            height="400"
            src={videoUrl}
         
            allowFullScreen
          ></iframe>
           <button onClick={closeModal} style={{backgroundColor:"#f26a0f",fontSize:"14px",color:"white",padding:"px",borderRadius:"20PX"}}>Close </button>
        </div>
      </Modal>
          </div>

<div  style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
  <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",}} >
  <div style={{marginTop:"4px", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",}}>
    {/* <img src='https://clipart-library.com/images/6iy599oAT.png' alt="tick" style={{height:"25px", width:"25px", border:"2px red solid"}}/> */}
    <p style={{color:"#ff5e0d", fontWeight:"bold", }}>
    <img src='https://clipart-library.com/images/6iy599oAT.png' alt="tick" style={{height:"25px", width:"25px", }}/>
   
      {points[currentPointIndex]}</p>
</div>
    <div style={{marginTop:"4px",marginLeft:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/* <img src='https://clipart-library.com/images/6iy599oAT.png' alt="tick" style={{height:"25px",width:"25px"}}/> */}
      <p style={{color:"#ff5e0d",fontWeight:"bold"}}>
      <img src='https://clipart-library.com/images/6iy599oAT.png' alt="tick" style={{height:"25px", width:"25px"}}/>
   
        {points2[currentPointIndex]}</p>
     
     
    </div>
    </div>
    
      <div className='rightinsidebox1 animate1' style={{ position:"relative",borderTopLeftRadius:"60px",borderBottomLeftRadius:"60px",borderBottomRightRadius:"60px",padding:"10px",boxShadow:"2px 2px 2px 2px #fc9258",minHeight:"200px",maxHeight:"500px",backgroundColor: "rgba(240, 207, 185,0.2)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",  }}>
       
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"0px" }}>
          <img src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1711185246/5264176-removebg-preview_n18181.png" alt="tag" style={{height:"35px",width:"35px",position:"absolute",top:"-15px",right:"-19px"}}/>
          <img src="https://cdn-icons-png.flaticon.com/512/4891/4891830.png" alt="reviews" style={{ height: "50px", width: "50px" }} />
          <p style={{ paddingLeft:"5px",paddingRight:"5px" }}>{currentReview.review}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p>- {currentReview.author}</p>
          {/* <img src={currentReview.img} alt="reviewimg" style={{ height: "55px", width: "55px", borderRadius: "70px", marginLeft: "10px" }} /> */}
        </div>
      </div>
   
    </div>
{/* <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
    <p style={{fontSize:"12px"}}>Our services available @ </p>
    <img src="https://entrackr.com/storage/2023/01/Zomato-Swiggy.jpg" style={{marginLeft:"10PX",height:"50px ",width:"110px",transform:"scale(1.1)"}} />
    </div>  */}
    </div>

        {/* Right side */}
     
      <div className='col-12 col-md-6' >
        <img
        src="https://surveyappanswers.blob.core.windows.net/jaavapot/jaavapot_hero.gif"
        alt='Slideshow'
        style={{width:"90%",height:"80%",objectFit:"contain",transform: `scale(0.9)`}}
        
      />
 

    </div>
         
  

        </div>
      
      </div>

     
      
        </div>
    
  );

};

export default HeroSection;
