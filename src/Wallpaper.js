import React from 'react';
import "./Component/Basics/Style.css";
import Menu from "./Component/Basics/menuApi.js";
import MenuCard from './Component/Basics/MenuCard';



const Wallpaper = () => {

    const[menuData, setMenuData] = React.useState(Menu);
    const Item = (ims) => {
        const updatedList = Menu.filter((curElem) =>{
            return curElem.ims === ims;
        });
        setMenuData(updatedList);
    };
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) =>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

  return (
    <>
        
                
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item'
                onClick={() => Item("ims")}>All</button>

                 <button className='btn-group__item' 
                onClick={() => filterItem("Naruto")}>Naruto</button>

                <button className='btn-group__item'
                onClick={() => filterItem("aot")}>AOT</button>

                <button className='btn-group__item'
                onClick={() => filterItem("bleach")}>Bleach</button>

                <button className='btn-group__item'
                onClick={() => filterItem("Jujutsu Kaison")}>Jujutsu Kaison</button>

                <button className='btn-group__item'
                onClick={() => filterItem("Dragon Ball")}>Dragon Ball</button>

                <button className='btn-group__item'
                onClick={() => filterItem("Death Note")}>Death Note</button>

                <button className='btn-group__item'
                onClick={() => filterItem("One Piece")}>One Piece</button>

            </div>
        </nav>
        <MenuCard menuData={menuData}/>
    </>
  )
}

export default Wallpaper;