// import React, { useReducer, useContext, createContext } from "react";
// const CartStateContext = createContext();
// const CartDispatchContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [
//         ...state,
//         {
//           id: action.id,
//           name: action.name,
//           qty: action.qty,
//           size: action.size,
//           basicPrice:action.basicPrice,
//           price: action.price,
//           img: action.img,
//           maincategory:action.maincategory
//         },
//       ];

//     case "REMOVE":
//       let newArr = [...state];
//       newArr.splice(action.index, 1);
//       return newArr;

//     case "UPDATE":
//       let arr = [...state];
//       arr.find((food, index) => {
//         if (food.id === action.id) {
//           // console.log(
//           //   food.qty,
//           //   parseInt(action.qty),
//           //   action.price + food.price
//           // );
//           arr[index] = {
//             ...food,
//             qty: parseInt(action.qty) + food.qty,
//             price: action.price + food.price,
//           };
//         }
//         return arr;
//       });
//       return arr;

//       case "INCREMENT":
//         return state.map((item, index) =>
//           index === action.index
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         );
  

//     case "DECREMENT":
//       return state
//         .map((item, index) =>
//           index === action.index
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter(item => item.qty > 0);

//       // case "DECREMENT":
//       //   return state.map((item, index) =>
//       //     index === action.index && item.qty > 1
//       //       ? { ...item, qty: item.qty - 1 }
//       //       : item
//       //   );
  

//     case "DROP":
//       let empArray = [];
//       return empArray;

//     default:
//       console.log("Error in Reducer");
//       break;

    
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []);
//   return (
//     <CartDispatchContext.Provider value={dispatch}>
//       <CartStateContext.Provider value={state}>
//         {children}
//       </CartStateContext.Provider>
//     </CartDispatchContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartStateContext);

// export const useDispatchCart = () => useContext(CartDispatchContext);


import React, { useReducer, useContext, createContext } from "react";
const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description:action.description,
          qty: action.qty,
          size: action.size,
          basicPrice:action.basicPrice,
          price: action.price,
          img: action.img,
          maincategory:action.maincategory,
          category:action.category
        },
      ];

    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case "UPDATE":
      let arr = [...state];
      arr.find((food, index) => {
        if (food.id === action.id) {
          // console.log(
          //   food.qty,
          //   parseInt(action.qty),
          //   action.price + food.price
          // );
          arr[index] = {
            ...food,
            qty: parseInt(action.qty) + food.qty,
            price: action.price + food.price,
          };
        }
        return arr;
      });
      return arr;

      case "INCREMENT":
        return state.map((item, index) =>
          index === action.index
            ? { ...item, qty: item.qty + 1 }
            : item
        );
  

    case "DECREMENT":
      return state
        .map((item, index) =>
          index === action.index
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0);

      // case "DECREMENT":
      //   return state.map((item, index) =>
      //     index === action.index && item.qty > 1
      //       ? { ...item, qty: item.qty - 1 }
      //       : item
      //   );
  

    case "DROP":
      let empArray = [];
      return empArray;

    default:
      console.log("Error in Reducer");
      break;

    
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);

export const useDispatchCart = () => useContext(CartDispatchContext);
