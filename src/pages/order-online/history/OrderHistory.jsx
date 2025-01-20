// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./orderhistory.css";
// import { ApiPath } from '../../../config';
 
// export default function OrderHistory() {
//   const [orderData, setOrderData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [expandedItemId, setExpandedItemId] = useState(null);
 
//   const email = localStorage.getItem('userEmail');
 
//   useEffect(() => {
//     const fetchOrderData = async () => {
//       try {
//         const response = await axios.get(`${ApiPath}jaavapotorders/api/orders/${email}`);
//         setOrderData(response.data.reverse());
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching order data:', error);
//         setIsLoading(false);
//       }
//     };
 
//     fetchOrderData();
//   }, [email]);
 
//   const toggleDetails = (itemId) => {
//     setExpandedItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
//   };
 
//     // Function to format timestamp into date and time
//     const formatTimestamp = (timestamp) => {
//       const date = new Date(timestamp);
//       // const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//       // const dayName = dayNames[date.getDay()];
//       const hours = date.getHours() % 12 || 12; // Convert 24-hour time to 12-hour time
//       const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
//       const formattedDateTime = `${date.toLocaleDateString()} ${hours}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')} ${ampm}`;
//       return formattedDateTime;
//     };
   
 
  
    
 
//     const getColorByStatus = (status) => {
//       console.log('Order status:', status); // Add this line in your code to see the status value

//       switch (status) {
//         case 'Order-Placed':
//           return 'lightgrey';
//         case 'Order-Cancelled-By-TJP':
//           return 'Red';
//         case 'Under-Process':
//           return '#80e0dd';
//         case 'Ready-For-Pickup':
//           return '#f5bc71';
//         case 'Out-For-Delivery':
//           return '#6588db';
//         case 'Delivered':
//           return '#32a31c';
//         default:
//           return 'white';
//       }
//     };
   
   

// return (
//   <div style={{backgroundColor:"rgba(189, 152, 109,0.5)",margin:"20px",borderRadius:"20px",boxShadow:"2px 2px 2px 2px black",padding:"20px"}}>
//     <div className='container' >
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h2 style={{margin:"15px ",textDecoration:"underline"}}>Your Orders</h2>
//           {orderData.map((order, index) => (
           
//             <div  key={order._id} className="order-card" style={{ marginBottom: '20px' }}>
//               <div style={{ display: 'flex',flexWrap:"wrap", marginBottom: '10px', justifyContent:"space-around",alignItems:"center"}}>
//                 <h6 className='orderid'>Order ID: {order._id}</h6>
//                 <p className='timestamp'> {formatTimestamp(order.timestamp)}</p>
//                 {index !== 0 && (<button onClick={() => toggleDetails(order._id)} className='btn btn-secondary seedetails'>See details</button>
//                 )}
//              </div>
//               {index === 0 || expandedItemId === order._id ? (
//                 <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//                   <div className='ordercontainer' style={{ display: 'flex', flexDirection: 'column' ,backgroundColor:"rgba(189, 152, 109,0.5)",borderRadius:"20px",padding:"10px",boxShadow:"2px 2px 2px 2px black",marginBottom:"10px"}}>
//                     <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-between",alignItems:"center"}}>
//                       {/* <h6  className='orderfont' style={{ backgroundColor: getColorByStatus(order.status),fontWeight:"bolder",padding:"5px",borderRadius:"10px"}}>Order Status: {order.status}</h6> */}
//                       <h6 className='orderfont' style={{ backgroundColor: getColorByStatus(order.status), fontWeight: 'bolder', padding: '5px', borderRadius: '10px' }}>
//   Order Status: {order.status}
// </h6>
//                       {index !== 0 && (
//                         <button onClick={() => toggleDetails(order._id)} className='btn btn-secondary orderfont' >X</button>
//                       )}
//                     </div>
//                     {order.order_data.map((item, index) => (
//   <div key={index} style={{ display: 'flex', marginBottom: '10px',justifyContent:"center" }}>
   
//     {Array.isArray(item) ? (
//       <div style={{fontWeight:"bold"}}>
//       <h6 style={{fontWeight:"bold",textDecoration:"underline"}} className='orderfont' >Ordered Items</h6>
//         {item.map((subItem, subIndex) => (
//         <li key={subIndex} className='orderfont'>
//           {subItem.name} - Qty: {subItem.qty}  - Price: {subItem.price}
//         </li>
//       ))}
//       </div>
//     ) : (
//       <div style={{ display: 'inline' }} className='orderfont'>
//         <h6 style={{fontWeight:"bold",textDecoration:"underline"}} className='orderfont'>Delivery Address</h6>
//         <span><span style={{fontWeight:"bold"}}>Name: </span> {item.name}, </span>
//         <span> <span style={{fontWeight:"bold"}}>Email: </span>{item.delivery_email}, </span>
//         <span><span style={{fontWeight:"bold"}}>Phone No: </span> {item.delivery_phone}, </span>
//         <span> <span style={{fontWeight:"bold"}}>Location: </span> {item.Location}, </span>
//         <span> <span style={{fontWeight:"bold"}}>City: </span> {item.City}, </span>
//         <span> <span style={{fontWeight:"bold"}}>Pincode: </span> {item.Pincode}, </span>
//       </div>
//     )}
//   </div>
// ))}
//                   </div>
//                 </div>
//               ) : null}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   </div>
// );

// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./orderhistory.css";
import { ApiPath } from '../../../config';

export default function OrderHistory() {
  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const email = localStorage.getItem('userEmail');

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(`${ApiPath}jaavapotorders/api/orders/${email}`);
        setOrderData(response.data.reverse());
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching order data:', error);
        setIsLoading(false);
      }
    };

    fetchOrderData();
  }, [email]);

  const toggleDetails = (itemId) => {
    setExpandedItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours() % 12 || 12;
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    const formattedDateTime = `${date.toLocaleDateString()} ${hours}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')} ${ampm}`;
    return formattedDateTime;
  };

  const getColorByStatus = (status) => {
    switch (status) {
      case 'Order-Placed':
        return 'lightgrey';
      case 'Order-Cancelled-By-TJP':
        return 'Red';
      case 'Under-Process':
        return '#80e0dd';
      case 'Ready-For-Pickup':
        return '#f5bc71';
      case 'Out-For-Delivery':
        return '#6588db';
      case 'Delivered':
        return '#32a31c';
      default:
        return 'white';
    }
  };

  return (
    <div style={{margin:"20px",borderRadius:"20px",boxShadow:"2px 2px 2px 2px black",padding:"20px"}}>
      <div className='container'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 style={{margin:"15px ",textDecoration:"underline"}}>Your Orders</h2>
            {orderData.map((order, index) => (
              <div key={order._id} className="order-card" style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', flexWrap:"wrap", marginBottom: '10px', justifyContent:"space-around",alignItems:"center"}}>
                  <h6 className='orderid'>Order ID: {order._id}</h6>
                  <p className='timestamp'> {formatTimestamp(order.timestamp)}</p>
                  {index !== 0 && (
                    <button onClick={() => toggleDetails(order._id)} className='btn btn-secondary seedetails'>
                      See details
                    </button>
                  )}
                </div>
                {index === 0 || expandedItemId === order._id ? (
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div className='ordercontainer' style={{ display: 'flex', flexDirection: 'column' ,backgroundColor:"rgba(189, 152, 109,0.5)",borderRadius:"20px",padding:"10px",boxShadow:"2px 2px 2px 2px black",marginBottom:"10px"}}>
                      <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-between",alignItems:"center"}}>
                        <h6 className='orderfont' style={{ backgroundColor: getColorByStatus(order.status), fontWeight: 'bolder', padding: '5px', borderRadius: '10px' }}>
                          Order Status: {order.status}
                        </h6>
                        {index !== 0 && (
                          <button onClick={() => toggleDetails(order._id)} className='btn btn-secondary orderfont'>X</button>
                        )}
                      </div>
                      {order.order_data.map((item, index) => (
                        <div key={index} style={{ display: 'flex', marginBottom: '10px', justifyContent:"center" }}>
                          {Array.isArray(item) ? (
                            <div style={{fontWeight:"bold"}}>
                              <h6 style={{fontWeight:"bold",textDecoration:"underline"}} className='orderfont'>Ordered Items</h6>
                              {item.map((subItem, subIndex) => (
                                <li key={subIndex} className='orderfont'>
                                  {subItem.name} - Qty: {subItem.qty} - Price: {subItem.price}
                                </li>
                              ))}
                            </div>
                          ) : (
                            <div style={{ display: 'inline' }} className='orderfont'>
                              {item.totalAmount ? (
                                <>
                                  <h6 style={{fontWeight:"bold",textDecoration:"underline"}} className='orderfont'>Payment Details</h6>
                                  <p><span style={{fontWeight:"bold"}}>Order ID: </span> {item.orderId}</p>
                                  <p><span style={{fontWeight:"bold"}}>Payment ID: </span> {item.paymentId}</p>
                                  <p><span style={{fontWeight:"bold"}}>Payment Signature: </span> {item.paymentSignature}</p>
                                  <p><span style={{fontWeight:"bold"}}>Total Amount: </span> {item.totalAmount}</p>
                                </>
                              ) : (
                                <>
                                  <h6 style={{fontWeight:"bold",textDecoration:"underline"}} className='orderfont'>Delivery Address</h6>
                                  <span><span style={{fontWeight:"bold"}}>Name: </span> {item.name}, </span>
                                  <span><span style={{fontWeight:"bold"}}>Email: </span> {item.delivery_email}, </span>
                                  <span><span style={{fontWeight:"bold"}}>Phone No: </span> {item.delivery_phone}, </span>
                                  <span><span style={{fontWeight:"bold"}}>Location: </span> {item.Location}, </span>
                                  <span><span style={{fontWeight:"bold"}}>City: </span> {item.City}, </span>
                                  <span><span style={{fontWeight:"bold"}}>Pincode: </span> {item.Pincode}, </span>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


