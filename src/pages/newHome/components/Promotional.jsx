// import React from "react";
// import { useNavigate } from "react-router-dom"; 
// import { Container, Grid, Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
// import { styled } from "@mui/system";
// import img01 from "../../../assets/home/promotional/card02.png";
// import img02 from "../../../assets/home/bowl.svg";
// import img03 from "../../../assets/home/promotional/bg02.png";

// const HeaderOne = styled(Typography)({
//   color: "#434343",
//   fontFamily: "Arial",
//   fontSize: "52px",
//   fontWeight: 700,
//   lineHeight: "41px",
//   fontStyle:'normal'
// });

// const HeaderTwo = styled(Typography)({
//   color: "#FD7E4B",
//   fontFamily: "Arial",
//   fontSize: "52px",
//   fontWeight: 700,
//   lineHeight: "60px",
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

// const ColoredBar = styled(Box)({
//   backgroundColor: "#FD7E4B",
//   height: "15px",
//   width: "100%",
//   marginTop: "30px",
// });

// const Promotional = () => {
//   const theme = useTheme();
//   const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
//   const navigate = useNavigate();
  
//   const handleOrderNowClick = () => {
//     navigate("/contact"); // Navigate to the desired route
//   };

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
//         <Grid container spacing={10} alignItems="center" marginTop='0px'  >
//           {isMobileOrTablet ? (
//             <>
//               <Grid item xs={12} md={6}>
//                 <img
//                   src={img01}
//                   alt="About Us"
//                   style={{ width: "100%", height: "100%", objectFit: "contain" }}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6} style={{ paddingTop: 0 }}>
//                 <HeaderOne>We are ready to</HeaderOne>
//                 <Box display="flex" alignItems="center">
//                   <HeaderTwo>Distributors Partnership</HeaderTwo>
//                 </Box>
//                 <p
//                   style={{
//                     fontSize: "22px",
//                     width: "120%",
//                     fontFamily: "Arial",
//                     fontWeight: "400",
//                   }}
//                 >
//                   Tiny seeds,{" "}
//                   <EmphasizedText component="span">Big Health</EmphasizedText>{" "}
//                   Elevate
//                   <EmphasizedText component="span"> every meal</EmphasizedText> into
//                   a superfood <br />
//                   sensation. In the symphony of superfoods, let millets play the
//                   lead <br />
//                   role, harmonizing health and taste for a nutrient-packed life.
//                 </p>
//                 <ExploreMoreButton variant="outlined" onClick={handleOrderNowClick}>Contact Us</ExploreMoreButton>
//                 <ColoredBar />
//               </Grid>
//             </>
//           ) : (
//             <>
//               <Grid item xs={12} md={8} style={{ paddingTop: 0 }}>
//                 <HeaderOne>We are ready to</HeaderOne>
//                 <HeaderTwo>Distributors Partnership</HeaderTwo>
//                 <p
//                   style={{
//                     fontSize: "20px",
//                     width: "120%",
//                     fontFamily: "Arial",
//                     fontWeight: "400",
//                   }}
//                 >
//                   Tiny seeds,{" "}
//                   <EmphasizedText component="span">Big Health</EmphasizedText>{" "}
//                   Elevate
//                   <EmphasizedText component="span"> every meal</EmphasizedText> into
//                   a superfood <br />
//                   sensation. In the symphony of superfoods, let millets play the
//                   lead <br />
//                   role, harmonizing health and taste for a nutrient-packed life.
//                 </p>
//                 <ExploreMoreButton variant="outlined" onClick={handleOrderNowClick}>Contact Us</ExploreMoreButton>
//                 <ColoredBar />
//               </Grid>
//               <Grid item xs={7} md={4}>
//                 <img
//                   src={img01}
//                   alt="About Us"
//                   style={{ width: "100%", height: "100%", objectFit: "contain" }}
//                 />
//               </Grid>
//             </>
//           )}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Promotional;

// import React from "react";
// import { useNavigate } from "react-router-dom"; 
// import { Container, Grid, Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
// import { styled } from "@mui/system";
// import img01 from "../../../assets/home/promotional/card02.png";
// import img02 from "../../../assets/home/bowl.svg";
// import img03 from "../../../assets/home/promotional/bg02.png";

// const HeaderOne = styled(Typography)({
//   color: "#434343",
//   fontFamily: "Arial",
//   fontSize: "52px",
//   fontWeight: 700,
//   lineHeight: "41px",
//   fontStyle:'normal'
// });

// const HeaderTwo = styled(Typography)({
//   color: "#FD7E4B",
//   fontFamily: "Arial",
//   fontSize: "52px",
//   fontWeight: 700,
//   lineHeight: "60px",
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

// const ColoredBar = styled(Box)({
//   backgroundColor: "#FD7E4B",
//   height: "15px",
//   width: "100%",
//   marginTop: "30px",
// });

// const Promotional = () => {
//   const theme = useTheme();
//   const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
//   const navigate = useNavigate();
  
//   const handleOrderNowClick = () => {
//     navigate("/contact"); // Navigate to the desired route
//   };

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
//         <Grid container spacing={10} alignItems="center" marginTop='0px'  >
//           {isMobileOrTablet ? (
//             <>
//               <Grid item xs={12} md={6}>
//                 <img
//                   src={img01}
//                   alt="About Us"
//                   style={{ width: "120%", height: "120%", objectFit: "contain" }}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6} style={{ paddingTop: 0 }}>
//                 <HeaderOne>We are ready to</HeaderOne>
//                 <Box display="flex" alignItems="center">
//                   <HeaderTwo>Distributors Partnership</HeaderTwo>
//                 </Box>
//                 <p
//                   style={{
//                     fontSize: "22px",
//                     width: "120%",
//                     fontFamily: "Arial",
//                     fontWeight: "400",
//                   }}
//                 >
//                   Tiny seeds,{" "}
//                   <EmphasizedText component="span">Big Health</EmphasizedText>{" "}
//                   Elevate
//                   <EmphasizedText component="span"> every meal</EmphasizedText> into
//                   a superfood <br />
//                   sensation. In the symphony of superfoods, let millets play the
//                   lead <br />
//                   role, harmonizing health and taste for a nutrient-packed life.
//                 </p>
//                 <ExploreMoreButton variant="outlined" onClick={handleOrderNowClick}>Contact Us</ExploreMoreButton>
//                 <ColoredBar />
//               </Grid>
//             </>
//           ) : (
//             <>
//               <Grid item xs={12} md={8} style={{ paddingTop: 0 }}>
//                 <HeaderOne>We are ready to</HeaderOne>
//                 <HeaderTwo>Distributors Partnership</HeaderTwo>
//                 <p
//                   style={{
//                     fontSize: "20px",
//                     width: "120%",
//                     fontFamily: "Arial",
//                     fontWeight: "400",
//                   }}
//                 >
//                   Tiny seeds,{" "}
//                   <EmphasizedText component="span">Big Health</EmphasizedText>{" "}
//                   Elevate
//                   <EmphasizedText component="span"> every meal</EmphasizedText> into
//                   a superfood <br />
//                   sensation. In the symphony of superfoods, let millets play the
//                   lead <br />
//                   role, harmonizing health and taste for a nutrient-packed life.
//                 </p>
//                 <ExploreMoreButton variant="outlined" onClick={handleOrderNowClick}>Contact Us</ExploreMoreButton>
//                 <ColoredBar />
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <img
//                   src={img01}
//                   alt="About Us"
//                   style={{ width: "120%", height: "120%", objectFit: "contain" }}
//                 />
//               </Grid>
//             </>
//           )}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Promotional;

// Promotional.js
import React from "react";
import { useNavigate } from "react-router-dom"; 
import { Container, Grid, Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const HeaderOne = styled(Typography)({
  color: "#434343",
  fontFamily: "Arial",
  fontSize: "52px",
  fontWeight: 700,
  lineHeight: "41px",
  fontStyle:'normal'
});

const HeaderTwo = styled(Typography)({
  color: "#FD7E4B",
  fontFamily: "Arial",
  fontSize: "52px",
  fontWeight: 700,
  lineHeight: "60px",
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

const ColoredBar = styled(Box)({
  backgroundColor: "#FD7E4B",
  height: "15px",
  width: "100%",
  marginTop: "30px",
});

const Promotional = ({ bgImage, innerImage, headerOne, headerTwo, text }) => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  
  const handleOrderNowClick = () => {
    navigate("/contact"); // Navigate to the desired route
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "50px 0",
      }}
    >
      <Container>
        <Grid container spacing={10} alignItems="center" marginTop='0px'  >
          {isMobileOrTablet ? (
            <>
              <Grid item xs={12} md={6}>
                <img
                  src={innerImage}
                  alt="About Us"
                  style={{ width: "120%", height: "120%", objectFit: "contain" }}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ paddingTop: 0 }}>
                <HeaderOne>{headerOne}</HeaderOne>
                <Box display="flex" alignItems="center">
                  <HeaderTwo>{headerTwo}</HeaderTwo>
                </Box>
                <p
                  style={{
                    fontSize: "22px",
                    width: "120%",
                    fontFamily: "Arial",
                    fontWeight: "400",
                  }}
                >
                  {text.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <ExploreMoreButton variant="outlined" onClick={handleOrderNowClick}>Contact Us</ExploreMoreButton>
                <ColoredBar />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} md={8} style={{ paddingTop: 0 }}>
                <HeaderOne>{headerOne}</HeaderOne>
                <HeaderTwo>{headerTwo}</HeaderTwo>
                <p
                  style={{
                    fontSize: "20px",
                    width: "120%",
                    fontFamily: "Arial",
                    fontWeight: "400",
                  }}
                >
                  {text.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <ExploreMoreButton variant="outlined" onClick={handleOrderNowClick}>Contact Us</ExploreMoreButton>
                <ColoredBar />
              </Grid>
              <Grid item xs={12} md={4}>
                <img
                  src={innerImage}
                  alt="About Us"
                  style={{ width: "120%", height: "120%", objectFit: "contain" }}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Promotional;
