// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Modal,
//   Box,
//   Typography,
//   IconButton,
//   Grid,
//   Paper,
//   CircularProgress,
//   useMediaQuery,
// } from "@mui/material";
// import { LocationOn, Close, Restaurant, KeyboardArrowDown } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import delhiIcon from "../../../assets/img/locationIcons/delhi.png";
// import locationIcon from "../../../assets/img/locationIcons/location.png";
// import mumbaiIcon from "../../../assets/img/locationIcons/mumbai.png";
// import bengaluruIcon from "../../../assets/img/locationIcons/bangaluru.png";
// import chennaiIcon from "../../../assets/img/locationIcons/chennai.png";
// import hyderabadIcon from "../../../assets/img/locationIcons/hyderabad.png";
// import kolkataIcon from "../../../assets/img/locationIcons/kolkata.png";
// import ahmedabadIcon from "../../../assets/img/locationIcons/ahmedabad.png";
// import puneIcon from "../../../assets/img/locationIcons/pune.jpg";
// import kochiIcon from "../../../assets/img/locationIcons/kochi.jpg";
// import chandigarhIcon from "../../../assets/img/locationIcons/chandigarh.png";
// import GpsFixedIcon from '@mui/icons-material/GpsFixed';
// import { myColors } from "../../../contants/Colors";
// import axios from "axios";
// import { googleMapAPI } from "../../../config";

// const popularCities = [
//   { name: "Delhi", icon: delhiIcon },
//   { name: "Mumbai", icon: mumbaiIcon },
//   { name: "Bengaluru", icon: bengaluruIcon },
//   { name: "Chennai", icon: chennaiIcon },
//   { name: "Hyderabad", icon: hyderabadIcon },
//   { name: "Kolkata", icon: kolkataIcon },
//   { name: "Ahmedabad", icon: ahmedabadIcon },
//   { name: "Pune", icon: puneIcon },
//   { name: "Kochi", icon: kochiIcon },
//   { name: "Chandigarh", icon: chandigarhIcon },
// ];

// export default function LocationModal({ open, onClose }) {
//   const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
//   const [location, setLocation] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const isSmallScreen = useMediaQuery('(max-width:600px)');
//   const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:1200px)');

//   useEffect(() => {
//     const fetchSelectedCity = async () => {
//       const city = localStorage.getItem("myCity");
//       if (city) {
//         setSelectedCity(city);
//       }
//     };

//     fetchSelectedCity();
//   }, []);

//   const handleLocationPress = async () => {
//     if (navigator.geolocation) {
//       setLoading(true);
//       navigator.permissions.query({ name: 'geolocation' }).then((permission) => {
//         if (permission.state === 'granted' || permission.state === 'prompt') {
//           navigator.geolocation.getCurrentPosition(
//             (position) => {
//               const { latitude, longitude } = position.coords;
//               axios
//                 .get(
//                   `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapAPI}`
//                 )
//                 .then((response) => {
//                   const { results } = response.data;
//                   if (results && results.length > 0) {
//                     const city = results[0].address_components.find((component) =>
//                       component.types.includes('locality')
//                     )?.long_name;

//                     if (city) {
//                       setLocation(city);
//                       setSelectedCity(city);
//                       localStorage.setItem("myCity", city);
//                     }
//                     setLoading(false);
//                     onClose();
//                   }
//                 })
//                 .catch((error) => {
//                   console.error("Error fetching city from coordinates:", error);
//                   setLoading(false);
//                 });
//             },
//             (error) => {
//               console.error("Error getting geolocation:", error);
//               setLoading(false);
//             }
//           );
//         } else {
//           console.error("Geolocation permission denied.");
//           setLoading(false);
//         }
//       });
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//       setLoading(false);
//     }
//   };

//   const handleCitySelect = (city) => {
//     setSelectedCity(city);
//     localStorage.setItem("myCity", city);
//     onClose();
//     console.log("hiii52");
    
//   };

//   const navigateToHome = () => {
//     navigate("/milletproducts");
//     onClose();
//   };

//   const removeSelectedCity = () => {
//     localStorage.removeItem("myCity");
//     setSelectedCity(null);
//   };

//   const handleClose = () => {
//     if (selectedCity) {
//       onClose();
//     }
//   };

//   return (
//     <div  >
//       <Button onClick={() => setIsLocationModalOpen(true)} style={{color:myColors.primaryBlack,fontSize:"15px",backgroundColor:"white",fontWeight:"bold",cursor:"none"}} >
//         <GpsFixedIcon style={{color:myColors.primaryOrange,marginRight:10,fontSize:20,cursor:"arrow"}}/>
//         {selectedCity ? `${selectedCity}, IND`: "select location"} 
//         {/* <KeyboardArrowDown style={{color:myColors.primaryOrange,marginLeft:5,fontSize:30}}/> */}
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="location-modal"
        
//       >


//         <Box sx={styles.modalContent(isSmallScreen, isMediumScreen)} style={{marginTop:"30px",marginBottom:"50px",boxShadow:"0px 4px 6px 6px #F67939",maxHeight:"80vh",overflow:"scroll"}}>
//         <p style={{fontSize:"16px",fontWeight:"bold",textAlign:"center",padding:"1px"}}>Kindly enable location access to continue <br/> exploring our website.</p>
//           {selectedCity && <Button sx={styles.closButtonNew} onClick={() => handleClose()} > <Close sx={{ fontSize: "24px" }} /></Button>}
//           <Box sx={styles.imageContainer}>
//             <img src={locationIcon} alt="Location" style={styles.image} />
//           </Box>
//           <Typography variant="h5" component="h2" sx={styles.heading}>
//             {selectedCity ? "Your Current Selected City" : "Add Your Location"}
        
//           </Typography>
//           {selectedCity && (
//             <Box sx={{ display: "flex", justifyContent: "center" }}>
//               <LocationOn sx={{ marginRight: 1, color: "#F67939" }} />
//               <Typography variant="h6" sx={styles.selectedCityText}>
//                 {selectedCity}
//               </Typography>
//               <IconButton onClick={removeSelectedCity} sx={{ marginLeft: 1 }}>
//                 <Close color="action" />
//               </IconButton>
//             </Box>
//           )}
//           {selectedCity && (
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<Restaurant />}
//               onClick={navigateToHome}
//               sx={styles.homeButton}
//             >
//               Order Now
//             </Button>
//           )}
//           {loading ? (
//             <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
//               <CircularProgress />
//             </Box>
//           ) : (
//             <Button
//               variant="contained"
//               color="secondary"
//               startIcon={<LocationOn />}
//               onClick={handleLocationPress}
//               sx={styles.locationButton}
//             >
//               Use Current Location
//             </Button>
//           )}
//           <Typography variant="h6" sx={styles.subheading}> OR </Typography>
        
//           <Typography variant="h6" sx={styles.subheading}>
//             Choose Your City
//           </Typography>
//           <Grid container spacing={2}  >
//             {popularCities.map((city, index) => (
//               <Grid item xs={6} key={index}>
//                 <Paper
//                   sx={{
//                     ...styles.cityCard,
//                     ...(selectedCity === city.name && styles.selectedCity),
//                   }}
//                   onClick={() => handleCitySelect(city.name)}
//                 >
//                   <img
//                     src={city.icon}
//                     alt={city.name}
//                     style={styles.cityIcon}
//                   />
//                   <Typography sx={styles.cityText}>{city.name}</Typography>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// const styles = {
//   modalContent: (isSmallScreen, isMediumScreen) => ({
//     position: "absolute",
//     top: "55%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: isSmallScreen ? "90%" : isMediumScreen ? "70%" : "40%",
//     maxWidth: "600px",
//     bgcolor: "background.paper",
//     boxShadow: 24,
//     p: 4,
//     borderRadius: "8px",
//     maxHeight: "90vh",
//     overflowY: "auto",
//   }),
//   imageContainer: {
//     textAlign: "center",
//     marginBottom: 2,
//   },
//   image: {
//     width: "120px",
//     height: "120px",
//   },
//   heading: {
//     textAlign: "center",
//     fontWeight: "bold",
//     marginBottom: 1,
//     color: "#000080",
//   },
//   selectedCityText: {
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//     color: "#FD7E4B",
//   },
//   locationButton: {
//     marginTop: 1,
//     marginBottom: 1,
//     width: "100%",
   
//     backgroundColor: myColors.primaryOrange,
//     "&:hover": {
//       backgroundColor: myColors.lightOrange,
//     },
//   },
//   homeButton: {
//     marginTop: 2,
//     marginBottom: 3,
//     width: "100%",
//     backgroundColor: "#F67939",
//     "&:hover": {
//       backgroundColor: myColors.lightOrange,
//     },
//   },
//   subheading: {
//     textAlign: "center",
//     fontWeight: "bold",
//     marginBottom: 1,
//   },
//   cityCard: {
//     textAlign: "center",
//     cursor: "pointer",
//     padding: "12px",
//     borderRadius: "8px",
//     transition: "transform 0.2s",
//     "&:hover": {
//       transform: "scale(1.05)",
//     },
//   },
//   selectedCity: {
//     border: "2px solid #FD7E4B",
//     // borderColor: "#FD7E4B",
//     backgroundColor: "#FFF3E6",
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
//   },
//   cityIcon: {
//     width: "40px",
//     height: "40px",
//     objectFit:"cover",
//     marginBottom: "2px",
//   },
//   cityText: {
//     fontSize: "1rem",
//     fontWeight: "bold",
//     color: "#555555",
//   },
//   closButtonNew:{
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     backgroundColor: "#F67939", // Set background color
//     color: "white", // Set text color
//     padding: "10px", // Increase padding for a larger size
//     fontSize: "20px", // Larger font size
//     borderRadius: "50%", // Make the button round
//     "&:hover": {
//       backgroundColor: "#d45f26", // Darker shade on hover
//     },
//   },
// };

//12/12/2024
// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Modal,
//   Box,
//   Typography,
//   IconButton,
//   Grid,
//   Paper,
//   CircularProgress,
//   useMediaQuery,
// } from "@mui/material";
// import { LocationOn, Close, Restaurant, KeyboardArrowDown } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import delhiIcon from "../../../assets/img/locationIcons/delhi.png";
// import locationIcon from "../../../assets/img/locationIcons/location.png";
// import mumbaiIcon from "../../../assets/img/locationIcons/mumbai.png";
// import bengaluruIcon from "../../../assets/img/locationIcons/bangaluru.png";
// import chennaiIcon from "../../../assets/img/locationIcons/chennai.png";
// import hyderabadIcon from "../../../assets/img/locationIcons/hyderabad.png";
// import kolkataIcon from "../../../assets/img/locationIcons/kolkata.png";
// import ahmedabadIcon from "../../../assets/img/locationIcons/ahmedabad.png";
// import puneIcon from "../../../assets/img/locationIcons/pune.jpg";
// import kochiIcon from "../../../assets/img/locationIcons/kochi.jpg";
// import chandigarhIcon from "../../../assets/img/locationIcons/chandigarh.png";
// import GpsFixedIcon from '@mui/icons-material/GpsFixed';
// import { myColors } from "../../../contants/Colors";
// import axios from "axios";
// import { googleMapAPI } from "../../../config";

// const popularCities = [
//   { name: "Delhi", icon: delhiIcon },
//   { name: "Mumbai", icon: mumbaiIcon },
//   { name: "Bengaluru", icon: bengaluruIcon },
//   { name: "Chennai", icon: chennaiIcon },
//   { name: "Hyderabad", icon: hyderabadIcon },
//   { name: "Kolkata", icon: kolkataIcon },
//   { name: "Ahmedabad", icon: ahmedabadIcon },
//   { name: "Pune", icon: puneIcon },
//   { name: "Kochi", icon: kochiIcon },
//   { name: "Chandigarh", icon: chandigarhIcon },
// ];

// export default function LocationModal({ open, onClose }) {
//   const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
//   const [location, setLocation] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const isSmallScreen = useMediaQuery('(max-width:600px)');
//   const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:1200px)');

//   useEffect(() => {
//     const fetchSelectedCity = async () => {
//       const city = localStorage.getItem("myCity");
//       if (city) {
//         setSelectedCity(city);
//       }
//     };

//     fetchSelectedCity();
//   }, []);

//   const handleLocationPress = async () => {
//     if (navigator.geolocation) {
//       setLoading(true);
//       navigator.permissions.query({ name: 'geolocation' }).then((permission) => {
//         if (permission.state === 'granted' || permission.state === 'prompt') {
//           navigator.geolocation.getCurrentPosition(
//             (position) => {
//               const { latitude, longitude } = position.coords;
//               axios
//                 .get(
//                   `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapAPI}`
//                 )
//                 .then((response) => {
//                   const { results } = response.data;
//                   if (results && results.length > 0) {
//                     const city = results[0].address_components.find((component) =>
//                       component.types.includes('locality')
//                     )?.long_name;

//                     if (city) {
//                       setLocation(city);
//                       setSelectedCity(city);
//                       localStorage.setItem("myCity", city);
//                     }
//                     setLoading(false);
//                     onClose();
//                   }
//                 })
//                 .catch((error) => {
//                   console.error("Error fetching city from coordinates:", error);
//                   setLoading(false);
//                 });
//             },
//             (error) => {
//               console.error("Error getting geolocation:", error);
//               setLoading(false);
//             }
//           );
//         } else {
//           console.error("Geolocation permission denied.");
//           setLoading(false);
//         }
//       });
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//       setLoading(false);
//     }
//   };

//   const handleCitySelect = (city) => {
//     setSelectedCity(city);
//     localStorage.setItem("myCity", city);
//     onClose();
//     console.log("hiii52");
    
//   };

//   const navigateToHome = () => {
//     navigate("/milletproducts");
//     onClose();
//   };

//   const removeSelectedCity = () => {
//     localStorage.removeItem("myCity");
//     setSelectedCity(null);
//   };

//   const handleClose = () => {
//     if (selectedCity) {
//       onClose();
//     }
//   };

//   return (
//     <div  >
//       <Button onClick={() => setIsLocationModalOpen(true)} style={{color:myColors.primaryBlack,fontSize:"15px",backgroundColor:"white",fontWeight:"bold",cursor:"none"}} >
//         <GpsFixedIcon style={{color:myColors.primaryOrange,marginRight:10,fontSize:20,cursor:"arrow"}}/>
//         {selectedCity ? `${selectedCity}, IND`: "select location"} 
//         {/* <KeyboardArrowDown style={{color:myColors.primaryOrange,marginLeft:5,fontSize:30}}/> */}
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="location-modal"
        
//       >


//         <Box sx={styles.modalContent(isSmallScreen, isMediumScreen)} style={{marginTop:"30px",marginBottom:"50px",boxShadow:"0px 4px 6px 6px #F67939",maxHeight:"80vh",overflow:"scroll"}}>
//         <p style={{fontSize:"16px",fontWeight:"bold",textAlign:"center",padding:"1px"}}>Kindly enable location access to continue <br/> exploring our website.</p>
//           {selectedCity && <Button sx={styles.closButtonNew} onClick={() => handleClose()} > <Close sx={{ fontSize: "24px" }} /></Button>}
//           <Box sx={styles.imageContainer}>
//             <img src={locationIcon} alt="Location" style={styles.image} />
//           </Box>
//           <Typography variant="h5" component="h2" sx={styles.heading}>
//             {selectedCity ? "Your Current Selected City" : "Add Your Location"}
        
//           </Typography>
//           {selectedCity && (
//             <Box sx={{ display: "flex", justifyContent: "center" }}>
//               <LocationOn sx={{ marginRight: 1, color: "#F67939" }} />
//               <Typography variant="h6" sx={styles.selectedCityText}>
//                 {selectedCity}
//               </Typography>
//               <IconButton onClick={removeSelectedCity} sx={{ marginLeft: 1 }}>
//                 <Close color="action" />
//               </IconButton>
//             </Box>
//           )}
//           {selectedCity && (
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<Restaurant />}
//               onClick={navigateToHome}
//               sx={styles.homeButton}
//             >
//               Order Now
//             </Button>
//           )}
//           {loading ? (
//             <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
//               <CircularProgress />
//             </Box>
//           ) : (
//             <Button
//               variant="contained"
//               color="secondary"
//               startIcon={<LocationOn />}
//               onClick={handleLocationPress}
//               sx={styles.locationButton}
//             >
//               Use Current Location
//             </Button>
//           )}
//           <Typography variant="h6" sx={styles.subheading}> OR </Typography>
        
//           <Typography variant="h6" sx={styles.subheading}>
//             Choose Your City
//           </Typography>
//           <Grid container spacing={2}  >
//             {popularCities.map((city, index) => (
//               <Grid item xs={6} key={index}>
//                 <Paper
//                   sx={{
//                     ...styles.cityCard,
//                     ...(selectedCity === city.name && styles.selectedCity),
//                   }}
//                   onClick={() => handleCitySelect(city.name)}
//                 >
//                   <img
//                     src={city.icon}
//                     alt={city.name}
//                     style={styles.cityIcon}
//                   />
//                   <Typography sx={styles.cityText}>{city.name}</Typography>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// const styles = {
//   modalContent: (isSmallScreen, isMediumScreen) => ({
//     position: "absolute",
//     top: "55%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: isSmallScreen ? "90%" : isMediumScreen ? "70%" : "40%",
//     maxWidth: "600px",
//     bgcolor: "background.paper",
//     boxShadow: 24,
//     p: 4,
//     borderRadius: "8px",
//     maxHeight: "90vh",
//     overflowY: "auto",
//   }),
//   imageContainer: {
//     textAlign: "center",
//     marginBottom: 2,
//   },
//   image: {
//     width: "120px",
//     height: "120px",
//   },
//   heading: {
//     textAlign: "center",
//     fontWeight: "bold",
//     marginBottom: 1,
//     color: "#000080",
//   },
//   selectedCityText: {
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//     color: "#FD7E4B",
//   },
//   locationButton: {
//     marginTop: 1,
//     marginBottom: 1,
//     width: "100%",
   
//     backgroundColor: myColors.primaryOrange,
//     "&:hover": {
//       backgroundColor: myColors.lightOrange,
//     },
//   },
//   homeButton: {
//     marginTop: 2,
//     marginBottom: 3,
//     width: "100%",
//     backgroundColor: "#F67939",
//     "&:hover": {
//       backgroundColor: myColors.lightOrange,
//     },
//   },
//   subheading: {
//     textAlign: "center",
//     fontWeight: "bold",
//     marginBottom: 1,
//   },
//   cityCard: {
//     textAlign: "center",
//     cursor: "pointer",
//     padding: "12px",
//     borderRadius: "8px",
//     transition: "transform 0.2s",
//     "&:hover": {
//       transform: "scale(1.05)",
//     },
//   },
//   selectedCity: {
//     border: "2px solid #FD7E4B",
//     // borderColor: "#FD7E4B",
//     backgroundColor: "#FFF3E6",
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
//   },
//   cityIcon: {
//     width: "40px",
//     height: "40px",
//     objectFit:"cover",
//     marginBottom: "2px",
//   },
//   cityText: {
//     fontSize: "1rem",
//     fontWeight: "bold",
//     color: "#555555",
//   },
//   closButtonNew:{
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     backgroundColor: "#F67939", // Set background color
//     color: "white", // Set text color
//     padding: "10px", // Increase padding for a larger size
//     fontSize: "20px", // Larger font size
//     borderRadius: "50%", // Make the button round
//     "&:hover": {
//       backgroundColor: "#d45f26", // Darker shade on hover
//     },
//   },
// };


import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  IconButton,
  Grid,
  Paper,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { LocationOn, Close, Restaurant, GpsFixed as GpsFixedIcon } from "@mui/icons-material";
import delhiIcon from "../../../assets/img/locationIcons/delhi.png";
import locationIcon from "../../../assets/img/locationIcons/location.png";
import mumbaiIcon from "../../../assets/img/locationIcons/mumbai.png";
import bengaluruIcon from "../../../assets/img/locationIcons/bangaluru.png";
import chennaiIcon from "../../../assets/img/locationIcons/chennai.png";
import hyderabadIcon from "../../../assets/img/locationIcons/hyderabad.png";
import kolkataIcon from "../../../assets/img/locationIcons/kolkata.png";
import ahmedabadIcon from "../../../assets/img/locationIcons/ahmedabad.png";
import puneIcon from "../../../assets/img/locationIcons/pune.jpg";
import kochiIcon from "../../../assets/img/locationIcons/kochi.jpg";
import chandigarhIcon from "../../../assets/img/locationIcons/chandigarh.png";
import axios from "axios";
import { googleMapAPI } from "../../../config";
import { myColors } from "../../../contants/Colors";

const popularCities = [
  { name: "Delhi", icon: delhiIcon },
  { name: "Mumbai", icon: mumbaiIcon },
  { name: "Bengaluru", icon: bengaluruIcon },
  { name: "Chennai", icon: chennaiIcon },
  { name: "Hyderabad", icon: hyderabadIcon },
  { name: "Kolkata", icon: kolkataIcon },
  { name: "Ahmedabad", icon: ahmedabadIcon },
  { name: "Pune", icon: puneIcon },
  { name: "Kochi", icon: kochiIcon },
  { name: "Chandigarh", icon: chandigarhIcon },
];

export default function LocationModal() {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(min-width:600px) and (max-width:1200px)");

  useEffect(() => {
    const fetchSelectedCity = async () => {
      const city = localStorage.getItem("myCity");
      if (city) setSelectedCity(city);
    };
    fetchSelectedCity();
  }, []);

  const handleOpen = () => setIsLocationModalOpen((prev) => !prev);

  const handleLocationPress = async () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapAPI}`
            );
            const city = response.data.results[0]?.address_components.find((component) =>
              component.types.includes("locality")
            )?.long_name;

            if (city) {
              setSelectedCity(city);
              localStorage.setItem("myCity", city);
            }
          } catch (error) {
            console.error("Error fetching city:", error);
          } finally {
            setLoading(false);
            handleOpen();
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLoading(false);
        }
      );
    }
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    localStorage.setItem("myCity", city);
    handleOpen();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        style={{
          color: myColors.primaryBlack,
          fontSize: isSmallScreen ? "9px" : isMediumScreen ? "10px" : "11px",
          // fontSize: "15px",
          backgroundColor: "white",
          fontWeight: "bold",
        }}
      >
        <GpsFixedIcon style={{ color: myColors.primaryOrange, marginRight: 10 }} />
        {selectedCity ? `${selectedCity}, IND` : "Select Location"}
      </Button>

      <Modal open={isLocationModalOpen} onClose={handleOpen} aria-labelledby="location-modal">
        <Box sx={styles.modalContent(isSmallScreen, isMediumScreen)}>
          <Box sx={styles.imageContainer}>
            <img src={locationIcon} alt="Location" style={styles.image} />
          </Box>
          <Typography variant="h5" sx={styles.heading}>
            {selectedCity ? "Your Current Selected City" : "Add Your Location"}
          </Typography>

          {selectedCity && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <LocationOn sx={{ marginRight: 1, color: "#F67939" }} />
              <Typography sx={styles.selectedCityText}>{selectedCity}</Typography>
              <IconButton onClick={() => setSelectedCity(null)}>
                <Close color="action" />
              </IconButton>
            </Box>
          )}

          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLocationPress}
              sx={styles.locationButton}
            >
              Use Current Location
            </Button>
          )}

          <Typography variant="h6" sx={styles.subheading}>
            OR Choose Your City
          </Typography>
          <Grid container spacing={2}>
            {popularCities.map((city, index) => (
              <Grid item xs={6} key={index}>
                <Paper
                  sx={{
                    ...styles.cityCard,
                    ...(selectedCity === city.name && styles.selectedCity),
                  }}
                  onClick={() => handleCitySelect(city.name)}
                >
                  <img src={city.icon} alt={city.name} style={styles.cityIcon} />
                  <Typography sx={styles.cityText}>{city.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

const styles = {
  modalContent: (isSmallScreen, isMediumScreen) => ({
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? "90%" : isMediumScreen ? "70%" : "40%",
    maxWidth: "600px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    maxHeight: "90vh",
    overflowY: "auto",
  }),
  imageContainer: {
    textAlign: "center",
    marginBottom: 2,
  },
  image: {
    width: "120px",
    height: "120px",
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 1,
    color: "#000080",
  },
  selectedCityText: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#FD7E4B",
  },
  locationButton: {
    marginTop: 1,
    marginBottom: 1,
    width: "100%",
   
    backgroundColor: myColors.primaryOrange,
    "&:hover": {
      backgroundColor: myColors.lightOrange,
    },
  },
  homeButton: {
    marginTop: 2,
    marginBottom: 3,
    width: "100%",
    backgroundColor: "#F67939",
    "&:hover": {
      backgroundColor: myColors.lightOrange,
    },
  },
  subheading: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 1,
  },
  cityCard: {
    textAlign: "center",
    cursor: "pointer",
    padding: "12px",
    borderRadius: "8px",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  selectedCity: {
    border: "2px solid #FD7E4B",
    // borderColor: "#FD7E4B",
    backgroundColor: "#FFF3E6",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
  },
  cityIcon: {
    width: "40px",
    height: "40px",
    objectFit:"cover",
    marginBottom: "2px",
  },
  cityText: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#555555",
  },
  closButtonNew:{
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#F67939", // Set background color
    color: "white", // Set text color
    padding: "10px", // Increase padding for a larger size
    fontSize: "20px", // Larger font size
    borderRadius: "50%", // Make the button round
    "&:hover": {
      backgroundColor: "#d45f26", // Darker shade on hover
    },
  },
};
