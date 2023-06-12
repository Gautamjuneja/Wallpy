import React from 'react';

const MenuCard = ({menuData}) => {
  
  
  return (
    <>
    <section className='main-card--cointainer'>
        {menuData.map((curElem) =>{
            return(
                <div className='card-container' key={curElem.id}>
                <div className='card-body'>
                
                <span className='card-author subtle'>{curElem.name}</span>
                
                </div>
                <img src={curElem.image} alt="images" className='card-media'/>

                <a href={curElem.image} className='downSubtle' download>Download</a>
                </div> 


            )
        })}
       
    </section>
    </>
  )
}



export default MenuCard;