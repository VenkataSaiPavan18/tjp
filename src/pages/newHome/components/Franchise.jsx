// import React from "react";
// import { Card, CardContent, Typography, Grid } from "@mui/material";
// import { styled } from "@mui/system";

// const Franchise = () => {
//   const franchises = [
//     {
//       image: "https://via.placeholder.com/300x150",
//       address: "123 Main St, Springfield, USA",
//     },
//     {
//       image: "https://via.placeholder.com/300x150",
//       address: "456 Elm St, Metropolis, USA",
//     },
//     {
//       image: "https://via.placeholder.com/300x150",
//       address: "789 Oak St, Gotham, USA",
//     },
//   ];

//   const StyledCard = styled(Card)({
//     width: 300,
//     margin: "20px",
//     position: "relative",
//     overflow: "visible",
//     paddingTop: "25px", // to make space for the offset image
//   });

//   const StyledImage = styled("img")({
//     borderRadius: "10px",
//     width: "100%",
//     height: "150px",
//     position: "absolute",
//     top: "-25px",
//     right: "-15px",
//     objectFit: "cover",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   });

//   const AddressTypography = styled(Typography)({
//     fontFamily: "Arial, sans-serif",
//     fontSize: "18px",
//     fontWeight: 500,
//     color: "#333",
//     marginTop: "160px", // to ensure text appears below the image
//     animation: "fadeIn 2s",
//     "@keyframes fadeIn": {
//       "0%": { opacity: 0 },
//       "100%": { opacity: 1 },
//     },
//   });

//   return (
//     <Grid container justifyContent="center">
//       {franchises.map((franchise, index) => (
//         <StyledCard key={index}>
//           <StyledImage src={franchise.image} alt={`Franchise ${index + 1}`} />
//           <CardContent>
//             <AddressTypography>{franchise.address}</AddressTypography>
//           </CardContent>
//         </StyledCard>
//       ))}
//     </Grid>
//   );
// };

// export default Franchise;


import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const Franchise = () => {
  const franchises = [
    {
      image: "https://via.placeholder.com/300x300",
      name:'Shope Place',
      address: "123 Main St, Gachibouli hitech City, Hyderabad, Telengana State",
    },
    {
      image: "https://via.placeholder.com/300x300",
      name:'Shope Place',
      address: "456 Elm St, Banjarahils, Hyderabad, Telengana State",
    },
    {
      image: "https://via.placeholder.com/300x300",
      name:'Shope Place',
      address: "789 Oak St, MG Road, Bangalore, Karnataka",
    },
  ];

  const StyledCard = styled(Card)({
    width: 350,
    margin: "20px",
    position: "relative",
    overflow: "visible",
    paddingTop: "25px", // to make space for the offset image
  });

  const StyledImage = styled("img")({
    borderRadius: "10px",
    width: "100%",
    height: "300px",
    position: "absolute",
    top: "-25px",
    right: "-15px",
    objectFit: "cover",
    // boxShadow: "0 4px 8px #FD7E4B",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  });

  const AddressTypography = styled(Typography)({
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
    fontWeight: 500,
    color: "#333",
    marginTop: "10px", 
    animation: "fadeIn 2s",
    "@keyframes fadeIn": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
  });

  const NameTypography = styled(Typography)({
    fontFamily: "Arial, sans-serif",
    fontSize: "22px",
    fontWeight: 700,
    color: "#333",
    marginTop: "310px", // to ensure text appears below the image
    animation: "fadeIn 2s",
    "@keyframes fadeIn": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
  });

  const Heading = styled(Typography)({
    fontFamily: "Arial, sans-serif",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#FD7E4B",
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "20px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  });

  return (
    <div style={{paddingBottom:'50px',paddingTop:'60px'}}>
         <Heading>Our Franchise</Heading>;
    <Grid container justifyContent="center">
      {franchises.map((franchise, index) => (
        <StyledCard key={index}>
          <StyledImage src={franchise.image} alt={`Franchise ${index + 1}`} />
          <CardContent>
            <NameTypography>{franchise.name}</NameTypography>
            <AddressTypography>{franchise.address}</AddressTypography>
          </CardContent>
        </StyledCard>
      ))}
    </Grid>
    </div>
  );
};

export default Franchise;
