


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Whatsnew.css";
import Card from '../../pages/newHome/components/Card';
// import Card from './subdivisions/Card';
// import Card from './Card'; // Assuming the Card component is defined in Card.js

const RemainingProducts = ({ maincategory }) => {
  const [foodData, setFoodData] = useState([]);
  const nav = useNavigate();
  console.log("hello",maincategory)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pagoanalytics.azurewebsites.net/jaavapotmenu/api/products/category/${maincategory}`);
        const data = await response.json();
        console.log('Fetched data:', data);

        // Check if the fetched data is an array
        if (Array.isArray(data)) {
          setFoodData(data);
        } else {
          console.error('Unexpected data format:', data);
          setFoodData([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setFoodData([]); // Ensure foodData is an array even on error
      }
    };

    fetchData();
  }, [maincategory]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>You may also like...</h3>
      <div style={{ display: 'flex', width: "", flexWrap: 'wrap', justifyContent: 'center' }}>
        {foodData.slice(0, 3).map((item) => (
          <div key={item._id} >
          {/* <div key={item._id} onClick={() => { nav(`/product/${item._id}`) }} style={{ boxShadow: "2px 2px 2px 2px black", borderRadius: "18px", margin: '30px', width: '220px', backgroundColor: "rgba(189, 152, 109,0.3)", padding: "10px" }}> */}
            <Card foodItem={item} />
            {/* <Card foodItem={item} /> */}
          </div>
        ))}
      </div>
      <Link to="/OrderOnline"><button className='btn' style={{ boxShadow: "2px 2px 2px 2px black" }}>View all Items</button></Link>
    </div>
  );
};




export default RemainingProducts;
