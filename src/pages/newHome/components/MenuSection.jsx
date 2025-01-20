
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Card from "./Card.jsx";
// import { ApiPath } from "../../../config/index.js";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/system";
// import bgImage from "../../../assets/home/neworderbg.png";
// import NewCard from "./newcard/NewCard.jsx";
// import { toast } from "react-toastify";
// import LocationModal from "../../general/location/Location.jsx";
// import { Button } from "@mui/material";
// // import bgImage from "../../../assets/home/orderBg.png";

// const CustomPagination = styled(Pagination)({
//   "& .MuiPaginationItem-root": {
//     backgroundColor: "#FD7E4B",
//     color: "#fff",
//     "&:hover": {
//       backgroundColor: "#e06d43",
//     },
//     "&.Mui-selected": {
//       backgroundColor: "#FD7E4B",
//       color: "#fff",
//       "&:hover": {
//         backgroundColor: "#e06d43",
//       },
//     },
//   },
// });

// const TabButton = styled("button")(({ active }) => ({
//   backgroundColor: active ? "#FD7E4B" : "white",
//   color: active ? "#fff" : "#333",
//   border: "none",
//   padding: "10px 20px",
//   margin: "0 5px",
//   borderRadius: '10px',
//   cursor: "pointer",
//   fontSize: "16px",
//   fontWeight: active ? "bold" : "normal",
//   "&:hover": {
//     backgroundColor: active ? "#e06d43" : "#e6e6e6",
//   },
// }));

// const MenuSectionWrapper = styled("div")({
//   textAlign: "center",
//   marginTop: "0px",
//   fontFamily: "Arial,sans-serif",
//   // backgroundImage: `url(${bgImage})`,
//   backgroundColor: "#FDF0DD", 
//   color: "#333",
//   padding: "50px 0", 
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   // position: "relative",
//   // textAlign: "center",
//   // marginTop: "0px",
//   // fontFamily: "Arial,sans-serif",
//   // backgroundImage: `url(${bgImage})`,
//   // backgroundColor: "#FDF0DD",
//   // backgroundSize: "cover",
//   // color: "#333",
//   // paddingBottom: "50px",
//   // paddingTop: "50px",
//   // "::before": {
//   //   content: '""',
//   //   position: "absolute",
//   //   top: 0,
//   //   left: 0,
//   //   right: 0,
//   //   bottom: 0,
//   //   backgroundColor: "rgba(255, 255, 255, 0.6)", 
//   //   zIndex: 1,
//   // },
//   // "> *": {
//   //   position: "relative",
//   //   zIndex: 2,
//   // },
// });

// const MenuSection = () => {
//   const [foodData, setFoodData] = useState([]);
//   const [filteredFoodData, setFilteredFoodData] = useState([]);
//   const [mainCategory, setMainCategory] = useState("ReadyToCook");
//   const [page, setPage] = useState(1);
//   const [userCity, setUserCity] = useState('');
//   const itemsPerPage = 6;
//   const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
//   const [myCity, setMyCity] = useState('');

//   const nav = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${ApiPath}jaavapotmenu/api/products`);
//         const data = await response.json();
//         setFoodData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     filterFoodData();
//   }, [foodData, mainCategory, page]);

//   const filterFoodData = () => {
//     let filteredData = foodData;

//     if (mainCategory !== "All") {
//       filteredData = filteredData.filter(
//         (item) => item.maincategory === mainCategory
//       );
//     }

//     setFilteredFoodData(filteredData);
//   };

//   const handleMainCategoryChange = (category) => {
//     setMainCategory(category);
//     setPage(1); // Reset to the first page when changing main category
//   };

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   // Pagination logic
//   // const paginatedData = filteredFoodData.slice(
//   //   (page - 1) * itemsPerPage,
//   //   page * itemsPerPage
//   // );

//   // useEffect(() => {
//   //   fetchUserLocation();
//   // }, []);

//   // const fetchUserLocation = () => {
//   //   if (navigator.geolocation) {
//   //     navigator.geolocation.getCurrentPosition(
//   //       (position) => {
//   //         const { latitude, longitude } = position.coords;
//   //         fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
//   //           .then(response => response.json())
//   //           .then(data => {
//   //             const userLocation = data.city;
//   //             setUserCity(userLocation);
//   //           })
//   //           .catch(error => {
//   //             console.error('Error fetching location:', error);
//   //             toast.error('Failed to fetch location');
//   //           });
//   //       },
//   //       (error) => {
//   //         console.error('Error getting user location:', error);
//   //         toast.error('Failed to get user location');
//   //       }
//   //     );
//   //   } else {
//   //     console.error('Geolocation is not supported by this browser');
//   //     toast.error('Geolocation is not supported by this browser');
//   //   }
//   // };

//   const handleCloseModal = () => {
//     setIsLocationModalOpen(false);
//   };
//   const handleOpenModal = () => {
//     setIsLocationModalOpen(true);
//   };

//   useEffect(() => {
//     const fetchSelectedCity = async () => {
//       const city = localStorage.getItem("myCity");
//       if (city) {
//         setMyCity(city);
//       } else {
//         setIsLocationModalOpen(true); // Open modal if no city is found
//       }
//       // console.log('city', city); 
//     };
//     fetchSelectedCity();
//   }, []);

//   return (
//     <MenuSectionWrapper>
//       <h2
//         style={{
//           color: "#FD7E4B",
//           fontFamily: "Arial",
//           fontSize: "40px",
//           fontWeight: 700,
//           lineHeight: "41px",
//           paddingBottom: "20px",
//         }}
//       >
//         Wanna Prioritize Health? See Our Menu!
//       </h2>
//       <div>
//       <Button onClick={handleOpenModal}>Open Cities</Button>
//       <LocationModal open={isLocationModalOpen} onClose={handleCloseModal} />
//     </div>
//       <div className="d-flex justify-content-start m-3" style={{ marginLeft: "20px" }}>
//         <TabButton
//           active={mainCategory === "ReadyToCook"}
//           onClick={() => handleMainCategoryChange("ReadyToCook")}
//         >
//           Ready To Cook
//         </TabButton>
//         <TabButton
//           active={mainCategory === "ReadyToEat"}
//           onClick={() => handleMainCategoryChange("ReadyToEat")}
//         >
//           Ready To Eat
//         </TabButton>
//       </div>

//       <div className="container d-flex flex-wrap justify-content-center">
//         {/* {paginatedData.map((item) => ( */}
//         {filteredFoodData.map((item) => (
//           <div key={item._id}>
//             {/* <NewCard foodItem={item} /> */}
//             <Card foodItem={item}  userCity={myCity} />
//           </div>
//         ))}
//       </div>

//       {/* <Stack spacing={2} sx={{ alignItems: 'center', marginTop: '20px' }}>
//         <CustomPagination
//           count={Math.ceil(filteredFoodData.length / itemsPerPage)}
//           page={page}
//           onChange={handlePageChange}
//         />
//       </Stack> */}
//     </MenuSectionWrapper>
//   );
// };

// export default MenuSection;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Card from "./Card.jsx";
// import { ApiPath } from "../../../config/index.js";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/system";
// import bgImage from "../../../assets/home/neworderbg.png";
// import NewCard from "./newcard/NewCard.jsx";
// import { toast } from "react-toastify";
// import LocationModal from "../../general/location/Location.jsx";
// import { Button } from "@mui/material";
// // import bgImage from "../../../assets/home/orderBg.png";

// const CustomPagination = styled(Pagination)({
//   "& .MuiPaginationItem-root": {
//     backgroundColor: "#FD7E4B",
//     color: "#fff",
//     "&:hover": {
//       backgroundColor: "#e06d43",
//     },
//     "&.Mui-selected": {
//       backgroundColor: "#FD7E4B",
//       color: "#fff",
//       "&:hover": {
//         backgroundColor: "#e06d43",
//       },
//     },
//   },
// });

// const TabButton = styled("button")(({ active }) => ({
//   backgroundColor: active ? "#FD7E4B" : "white",
//   color: active ? "#fff" : "#333",
//   border: "none",
//   padding: "10px 20px",
//   margin: "0 5px",
//   borderRadius: '10px',
//   cursor: "pointer",
//   fontSize: "20px",
//   fontWeight: active ? "bold" : "normal",
//   "&:hover": {
//     backgroundColor: active ? "#e06d43" : "#e6e6e6",
//   },
// }));

// const MenuSectionWrapper = styled("div")({
//   textAlign: "center",
//   marginTop: "0px",
//   fontFamily: "Arial,sans-serif",
//   backgroundColor: "#FDF0DD", 
//   color: "#333",
//   padding: "50px 0", 
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// });

// const MenuSection = () => {
//   const [foodData, setFoodData] = useState([]);
//   const [filteredFoodData, setFilteredFoodData] = useState([]);
//   const [mainCategory, setMainCategory] = useState("ReadyToCook");
//   const [page, setPage] = useState(1);
//   const [userCity, setUserCity] = useState('');
//   const itemsPerPage = 6;
//   const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
//   const [myCity, setMyCity] = useState('');

//   const nav = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${ApiPath}jaavapotmenu/api/products`);
//         const data = await response.json();
//         setFoodData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     filterFoodData();
//   }, [foodData, mainCategory, page]);

//   const filterFoodData = () => {
//     let filteredData = foodData;

//     if (mainCategory !== "All") {
//       filteredData = filteredData.filter(
//         (item) => item.maincategory === mainCategory
//       );
//     }

//     setFilteredFoodData(filteredData);
//   };

//   const handleMainCategoryChange = (category) => {
//     setMainCategory(category);
//     setPage(1); // Reset to the first page when changing main category
//   };

//   const handleCloseModal = () => {
//     setIsLocationModalOpen(false);
//   };
//   const handleOpenModal = () => {
//     setIsLocationModalOpen(true);
//   };

//   useEffect(() => {
//     const fetchSelectedCity = async () => {
//       const city = localStorage.getItem("myCity");
//       if (city) {
//         setMyCity(city);
//       } else {
//         setIsLocationModalOpen(true); // Open modal if no city is found
//       }
//       // console.log('city', city); 
//     };
//     fetchSelectedCity();
//   }, []);

//   const handleCityChange = (city) => {
//     setMyCity(city); // Ensure this updates the city state
//     localStorage.setItem("myCity", city); // Store in localStorage for persistence
//   };

//   return (
//     <MenuSectionWrapper>
//       <h2
//         style={{
//           color: "#FD7E4B",
//           fontFamily: "Arial",
//           fontSize: "40px",
//           fontWeight: 700,
//           lineHeight: "41px",
//           paddingBottom: "20px",
//         }}
//       >
//         Wanna Prioritize Health? See Our Menu!
//       </h2>
//       <div>
//         <div className="d-flex justify-content-center m-3">
//       <Button onClick={handleOpenModal} style={{fontWeight:"bold"}}>Change Location</Button>
//       {/* <Button  onClick={handleOpenModal}> */}
//       <LocationModal open={isLocationModalOpen} onClose={handleCloseModal} onCitySelect={handleCityChange} />
//       {/* </Button> */}
//       </div>
//     </div>
//       <div className="d-flex justify-content-center m-3">
//         <TabButton
//           active={mainCategory === "ReadyToCook"}
//           onClick={() => handleMainCategoryChange("ReadyToCook")}
//         >
//           Ready To Cook
//         </TabButton>
//         <TabButton
//           active={mainCategory === "ReadyToEat"}
//           onClick={() => handleMainCategoryChange("ReadyToEat")}
//         >
//           Ready To Eat
//         </TabButton>
//         <TabButton
//           active={mainCategory === "Combos"}
//           onClick={() => handleMainCategoryChange("Combos")}
//         >
//           Combos
//         </TabButton>
//       </div>

//       <div className="container d-flex flex-wrap justify-content-center">

//         {filteredFoodData.map((item) => (
//           <div key={item._id}>
 
//             <Card foodItem={item}  userCity={myCity} />
//           </div>
//         ))}
//       </div>

   
//     </MenuSectionWrapper>
//   );
// };

// export default MenuSection;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Card from "./Card.jsx";
// import { ApiPath } from "../../../config/index.js";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/system";
// import bgImage from "../../../assets/home/neworderbg.png";
// import NewCard from "./newcard/NewCard.jsx";
// import { toast } from "react-toastify";
// import LocationModal from "../../general/location/Location.jsx";
// import { Button } from "@mui/material";
// import ToggleOne from "../../../components/toggleButtons/ToggleOne.jsx";
// // import bgImage from "../../../assets/home/orderBg.png";

// const CustomPagination = styled(Pagination)({
//   "& .MuiPaginationItem-root": {
//     backgroundColor: "#FD7E4B",
//     color: "#fff",
//     "&:hover": {
//       backgroundColor: "#e06d43",
//     },
//     "&.Mui-selected": {
//       backgroundColor: "#FD7E4B",
//       color: "#fff",
//       "&:hover": {
//         backgroundColor: "#e06d43",
//       },
//     },
//   },
// });

// const TabButton = styled("button")(({ active }) => ({
//   backgroundColor: active ? "#FD7E4B" : "white",
//   color: active ? "#fff" : "#333",
//   border: "none",
//   padding: "10px 20px",
//   margin: "0 5px",
//   borderRadius: '10px',
//   cursor: "pointer",
//   fontSize: "20px",
//   fontWeight: active ? "bold" : "normal",
//   "&:hover": {
//     backgroundColor: active ? "#e06d43" : "#e6e6e6",
//   },
// }));

// const MenuSectionWrapper = styled("div")({
//   textAlign: "center",
//   marginTop: "0px",
//   fontFamily: "Arial,sans-serif",
//   backgroundColor: "#FDF0DD", 
//   color: "#333",
//   padding: "50px 0", 
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// });

// const MenuSection = () => {
//   const [foodData, setFoodData] = useState([]);
//   const [filteredFoodData, setFilteredFoodData] = useState([]);
//   const [mainCategory, setMainCategory] = useState("ReadyToCook");
//   const [page, setPage] = useState(1);
//   const [userCity, setUserCity] = useState('');
//   const itemsPerPage = 6;
//   const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
//   const [myCity, setMyCity] = useState('');

//   const nav = useNavigate();

//   const navItems = [
//     { label: "Work" },
//     { label: "About" },
//     { label: "Contacts" },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${ApiPath}jaavapotmenu/api/products`);
//         const data = await response.json();
//         setFoodData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     filterFoodData();
//   }, [foodData, mainCategory, page]);

//   const filterFoodData = () => {
//     let filteredData = foodData;

//     if (mainCategory !== "All") {
//       filteredData = filteredData.filter(
//         (item) => item.maincategory === mainCategory
//       );
//     }

//     setFilteredFoodData(filteredData);
//   };

//   const handleMainCategoryChange = (category) => {
//     setMainCategory(category);
//     setPage(1); // Reset to the first page when changing main category
//   };

//   const handleCloseModal = () => {
//     setIsLocationModalOpen(false);
//   };
//   const handleOpenModal = () => {
//     setIsLocationModalOpen(true);
//   };

//   useEffect(() => {
//     const fetchSelectedCity = async () => {
//       const city = localStorage.getItem("myCity");
//       if (city) {
//         setMyCity(city);
//       } else {
//         setIsLocationModalOpen(true); // Open modal if no city is found
//       }
//       // console.log('city', city); 
//     };
//     fetchSelectedCity();
//   }, []);

//   const handleCityChange = (city) => {
//     setMyCity(city); // Ensure this updates the city state
//     localStorage.setItem("myCity", city); // Store in localStorage for persistence
//   };

//   return (
//     <MenuSectionWrapper>
//       <h2
//         style={{
//           color: "#FD7E4B",
//           fontFamily: "Arial",
//           fontSize: "40px",
//           fontWeight: 700,
//           lineHeight: "41px",
//           paddingBottom: "20px",
//         }}
//       >
//         Wanna Prioritize Health? See Our Menu!
//       </h2>
//       <div>
//         <div className="d-flex justify-content-center m-3">
//       <Button onClick={handleOpenModal} style={{fontWeight:"bold"}}>Change Location</Button>
//       {/* <Button  onClick={handleOpenModal}> */}
//       <LocationModal open={isLocationModalOpen} onClose={handleCloseModal} onCitySelect={handleCityChange} />
//       {/* </Button> */}
//       </div>
//     </div>
//       <div className="d-flex justify-content-center m-3">
//         <TabButton
//           active={mainCategory === "ReadyToCook"}
//           onClick={() => handleMainCategoryChange("ReadyToCook")}
//         >
//           Ready To Cook
//         </TabButton>
//         <TabButton
//           active={mainCategory === "ReadyToEat"}
//           onClick={() => handleMainCategoryChange("ReadyToEat")}
//         >
//           Ready To Eat
//         </TabButton>
//         <TabButton
//           active={mainCategory === "Combos"}
//           onClick={() => handleMainCategoryChange("Combos")}
//         >
//           Combos
//         </TabButton>
//       </div>
//       <div style={{ fontFamily: "Roboto, sans-serif", textAlign: "center", padding: "20px" }}>
//       <h1>Toggle Navigation Example</h1>
//       <ToggleOne items={navItems} />
//     </div>
//       {/* <div>
//         <ToggleOne items={navItems}/>
//       </div> */}

//       <div className="container d-flex flex-wrap justify-content-center">

//         {filteredFoodData.map((item) => (
//           <div key={item._id}>
 
//             <Card foodItem={item}  userCity={myCity} />
//           </div>
//         ))}
//       </div>

   
//     </MenuSectionWrapper>
//   );
// };

// export default MenuSection;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";
import { ApiPath } from "../../../config/index.js";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import bgImage from "../../../assets/home/neworderbg.png";
import NewCard from "./newcard/NewCard.jsx";
import { toast } from "react-toastify";
import LocationModal from "../../general/location/Location.jsx";
import { Button } from "@mui/material";
import Aos from "aos";
import ToggleNav from "../../../components/toggleButtons/ToggleNav.jsx";
import ToggleNavIcon from "../../../components/toggleButtons/ToggleNavIcon.jsx";
import ReadyToCook from "../../../assets/components/ReadyToCook.png";
import ReadyToEat from "../../../assets/components/ReadyToEat.png";
import COMBOSnew from "../../../assets/components/Combonew.png";



// import bgImage from "../../../assets/home/orderBg.png";


const CustomPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    backgroundColor: "#FD7E4B",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#e06d43",
    },
    "&.Mui-selected": {
      backgroundColor: "#FD7E4B",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#e06d43",
      },
    },
  },
});

const TabButton = styled("button")(({ active }) => ({
  backgroundColor: active ? "#FD7E4B" : "white",
  color: active ? "#fff" : "#333",
  border: "none",
  padding: "10px 20px",
  margin: "0 5px",
  borderRadius: '10px',
  cursor: "pointer",
  fontSize: "20px",
  fontWeight: active ? "bold" : "normal",
  "&:hover": {
    backgroundColor: active ? "#e06d43" : "#e6e6e6",
  },
}));

const MenuSectionWrapper = styled("div")({
  textAlign: "center",
  marginTop: "0px",
  fontFamily: "Arial,sans-serif",
  // backgroundColor: "#FDF0DD", 
  color: "#333",
  padding: "50px 0", 
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const MenuSection = () => {
  const [foodData, setFoodData] = useState([]);
  const [filteredFoodData, setFilteredFoodData] = useState([]);
  const [mainCategory, setMainCategory] = useState("ReadyToCook");
  const [page, setPage] = useState(1);
  const [userCity, setUserCity] = useState('');
  const itemsPerPage = 6;
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [myCity, setMyCity] = useState('');
  // const navLabels = ["ReadyToCook", "ReadyToEat", "Combos"];
  // const navLabels = [
  //   { label: "Ready To Cook", value: "ReadyToCook" },
  //   { label: "Ready To Eat", value: "ReadyToEat" },
  //   { label: "Combos", value: "Combos" },
  // ];
  const navLabels = [
    { label: "Ready To Cook", value: "ReadyToCook", icon: ReadyToCook },
    { label: "Ready To Eat", value: "ReadyToEat", icon: ReadyToEat },
    { label: "Combos", value: "Combos", icon: COMBOSnew },
  ];

  const nav = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ApiPath}jaavapotmenu/api/products`);
        const data = await response.json();
        setFoodData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterFoodData();
  }, [foodData, mainCategory, page]);

  const filterFoodData = () => {
    let filteredData = foodData;

    if (mainCategory !== "All") {
      filteredData = filteredData.filter(
        (item) => item.maincategory === mainCategory
      );
    }

    setFilteredFoodData(filteredData);
  };

  const handleMainCategoryChange = (category) => {
    setMainCategory(category);
    setPage(1); // Reset to the first page when changing main category
  };

  const handleCloseModal = () => {
    setIsLocationModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsLocationModalOpen(true);
  };

  useEffect(() => {
    const fetchSelectedCity = async () => {
      const city = localStorage.getItem("myCity");
      if (city) {
        setMyCity(city);
      } else {
        setIsLocationModalOpen(true); // Open modal if no city is found
      }
      // console.log('city', city); 
    };
    fetchSelectedCity();
  }, []);

  const handleCityChange = (city) => {
    setMyCity(city); // Ensure this updates the city state
    localStorage.setItem("myCity", city); // Store in localStorage for persistence
  };

  return (
    <MenuSectionWrapper>
    <h2
      data-aos="zoom-in"
      style={{
        color: "#FD7E4B",
        fontFamily: "Arial",
        fontSize: "30px",
        fontWeight: 700,
        lineHeight: "41px",
        paddingBottom: "20px",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)"
      }}
    >
      Wanna Prioritize Health? See Our Menu!
    </h2>
    <div>
      {/* <div className="d-flex justify-content-center m-3">
        <Button onClick={handleOpenModal} style={{ fontWeight: "bold" }}>
          Change Location
        </Button>
        <LocationModal
          open={isLocationModalOpen}
          onClose={handleCloseModal}
          onCitySelect={handleCityChange}
        />
      </div> */}
    </div>
    {/* <div className="d-flex justify-content-center m-3">
      <TabButton
        data-aos="fade-right"
        active={mainCategory === "ReadyToCook"}
        onClick={() => handleMainCategoryChange("ReadyToCook")}
      >
        Ready To Cook
      </TabButton>
      <TabButton
        data-aos="fade-up"
        active={mainCategory === "ReadyToEat"}
        onClick={() => handleMainCategoryChange("ReadyToEat")}
      >
        Ready To Eat
      </TabButton>
      <TabButton
        data-aos="fade-left"
        active={mainCategory === "Combos"}
        onClick={() => handleMainCategoryChange("Combos")}
      >
        Combos
      </TabButton>
    </div> */}
    <div className="d-flex justify-content-center m-3">
      <ToggleNavIcon navLabels={navLabels} handleMainCategoryChange={handleMainCategoryChange}/>
      {/* <ToggleNav navLabels={navLabels} handleMainCategoryChange={handleMainCategoryChange}/> */}
    </div>
    <div className="container d-flex flex-wrap justify-content-center">
      {filteredFoodData.map((item) => (
        <div
          key={item._id}
          data-aos="fade-up"
          data-aos-delay={Math.random() * 100} // Slight delay for a staggered effect
        >
          <Card foodItem={item} userCity={myCity} />
        </div>
      ))}
    </div>
  </MenuSectionWrapper>
  );
};

export default MenuSection;
