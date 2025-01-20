// import React, { useState } from "react";
// import { useDispatchCart, useCart } from "../../../store/ContextReducer";
// import { useNavigate } from 'react-router-dom';
// // import background from '../../../assets/background.jpg'; 
// import background from '../../../assets/home/cardbg.png'
// import './CardStyles.css';

// export default function Card(props) {
//   const nav = useNavigate();
//   const dispatch = useDispatchCart();
//   const data = useCart();
//   const foodItem = props.foodItem;
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");

//   const handleAddToCart = async () => {
//     if (!localStorage.getItem("token")) {
//       alert("Please login to add items into cart");
//     } else {
//       let food = data.find(item => item.id === foodItem._id);
//       if (food) {
//         if (food.size === size) {
//           await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty });
//         } else {
//           await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.itemname, price: finalPrice, qty, size, img: props.ImgSrc });
//         }
//       } else {
//         await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.itemname, price: finalPrice, qty, size });
//       }
//       alert(`Added item ${foodItem.itemname} to your cart`);
//     }
//   };

//   const handleIncrement = () => {
//     setQty(qty + 1);
//   };

//   const handleDecrement = () => {
//     if (qty > 1) {
//       setQty(qty - 1);
//     }
//   };

//   const finalPrice = qty * parseInt(foodItem.details[0].price || 0);

//   return (
//     <div className="card" style={{ backgroundImage: `url(${background})` }}>
//       <img
//         src={foodItem.imagepath}
//         className="card-img-top"
//         onClick={() => { nav(`/product/${foodItem._id}`) }}
//         alt={foodItem.itemname}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{foodItem.itemname}</h5>
//         <p className="card-text">{foodItem.description}</p>
//         <div className="btn-group">
//           <button onClick={handleDecrement}>-</button>
//           <input type="text" value={qty} readOnly />
//           <button onClick={handleIncrement}>+</button>
//         </div>
//         <div className="price">Price: ₹{finalPrice}</div>
//         <button className="add-to-cart-btn" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { useDispatchCart, useCart } from "../../../store/ContextReducer";
// import { useNavigate } from 'react-router-dom';
// import background from '../../../assets/home/cardbg.png';
// import './CardStyles.css';

// export default function Card(props) {
//   const nav = useNavigate();
//   const dispatch = useDispatchCart();
//   const data = useCart();
//   const foodItem = props.foodItem;
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");

//   const handleAddToCart = async () => {
//     if (!localStorage.getItem("token")) {
//       alert("Please login to add items into cart");
//     } else if (props.userCity !== "Hyderabad") {
//       alert("We apologize, but we are currently only serving the Hyderabad location.");
//     } else {
//       let food = data.find(item => item.id === foodItem._id);
//       const finalPrice = qty * parseInt(foodItem.details[0].price || 0);

//       if (food) {
//         if (food.size === size) {
//           await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty });
//         } else {
//           await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.itemname, price: finalPrice, qty, size, img: props.ImgSrc });
//         }
//       } else {
//         await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.itemname, price: finalPrice, qty, size });
//       }
//       alert(`Added item ${foodItem.itemname} to your cart`);
//     }
//   };

//   const handleIncrement = () => {
//     setQty(qty + 1);
//   };

//   const handleDecrement = () => {
//     if (qty > 1) {
//       setQty(qty - 1);
//     }
//   };

//   return (
//     <div className="card" style={{ backgroundImage: `url(${background})` }}>
//       <img
//         src={foodItem.imagepath}
//         className="card-img-top"
//         onClick={() => { nav(`/product/${foodItem._id}`) }}
//         alt={foodItem.itemname}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{foodItem.itemname}</h5>
//         <p className="card-text">{foodItem.description}</p>
//         <div className="btn-group">
//           <button onClick={handleDecrement}>-</button>
//           <input type="text" value={qty} readOnly />
//           <button onClick={handleIncrement}>+</button>
//         </div>
//         <div className="price">Price: ₹{finalPrice}</div>
//         <button className="add-to-cart-btn" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useDispatchCart, useCart } from "../../../store/ContextReducer";
import { useNavigate } from 'react-router-dom';
import background from '../../../assets/home/cardbg.png';
import './CardStyles.css';

export default function Card(props) {
  const nav = useNavigate();
  const dispatch = useDispatchCart();
  const data = useCart();
  const foodItem = props.foodItem;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    if (!localStorage.getItem("token")) {
      alert("Please login to add items into cart");
    } else if (props.userCity !== "ghi") {
      alert("We apologize, but we are currently only serving the Hyderabad location.");
      console.log('props.userCity',props.userCity);
    } else {
      let food = data.find(item => item.id === foodItem._id);
      const finalPrice = qty * parseInt(foodItem.details[0].price || 0);

      if (food) {
        if (food.size === size) {
          await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty });
        } else {
          await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.itemname, price: finalPrice, qty, size, img: props.ImgSrc });
        }
      } else {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.itemname, price: finalPrice, qty, size });
      }
      alert(`Added item ${foodItem.itemname} to your cart`);
    }
  };

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${background})` }}>
      <img
        src={foodItem.imagepath}
        className="card-img-top"
        onClick={() => { nav(`/product/${foodItem._id}`) }}
        alt={foodItem.itemname}
      />
      <div className="card-body">
        <h5 className="card-title">{foodItem.itemname}</h5>
        <p className="card-text">{foodItem.description}</p>
        <div className="btn-group">
          <button onClick={handleDecrement}>-</button>
          <input type="text" value={qty} readOnly />
          <button onClick={handleIncrement}>+</button>
        </div>
        <div className="price">Price: ₹{finalPrice}</div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
