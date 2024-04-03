import React from 'react';
import Wallpaper from "./Wallpaper";
import Rating from './Component/Basics/Rating';
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Contact from './Component/Basics/Contact';
import myImage from './Component/Basics/wingsOfFreedom-removebg-preview.png';

const App = () => {
  return (
    <>
    <Router>
             {/* navbar  */}
            <div className="head">
            <img src={myImage} alt=""  height = "60px" width = "60px" / >
            <h2 className='hr'>Anime Wallpaper Downloader || 4K Wallpapers</h2>
            
            </div>
            
            <div className="rat">
            
              <NavLink  to="/" className='act'>Home</NavLink>
              <NavLink  to="/rating" className='act'>Rate Us</NavLink>
              <NavLink to="/contact" className='act'>Contact Us</NavLink>
            
            </div>
            
            <Routes>
            <Route path='/Rating' element={<Rating/>} />
            </Routes>
            <Routes>
            <Route path='/' element={<Wallpaper/>} />
            </Routes>
            <Routes>
            <Route path='/Contact' element={<Contact/>} />
            </Routes>
      <footer>
        copyright &copy; 4KWallpaperWebsite All rights reserved.
      </footer>
      </Router>
    </>
  );
};


export default App;