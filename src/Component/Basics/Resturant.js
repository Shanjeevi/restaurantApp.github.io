import React, { useState } from "react";
import "./Style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;


// import React, { useState } from 'react'
// import './Style.css'
// import Menu from "./menuApi"
// import MenuCard from './MenuCard'

// const Resturant = () => {

//   const [menuData, setMenuData] = useState(Menu)


//   const filterItem = (inCategory) => {
//     const updatedList = Menu.filter((curElem) => {

//       return curElem.category === inCategory
//     })

//     setMenuData(updatedList)
//   }
//   return (
//     <>

//       <nav className='navbar'>
//         <div className="btn-group">
//           <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
//           <button className='btn-group__item' onClick={() => filterItem("Lunch")}>Lunch</button>
//           <button className='btn-group__item' onClick={() => filterItem("Evening")}>Evening</button>
//           <button className='btn-group__item' onClick={() => filterItem("Dinner")}>Dinner</button>
//           <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
//         </div>

//       </nav>

//       <MenuCard menuData={menuData} />
//     </>
//   )
// }

// export default Resturant