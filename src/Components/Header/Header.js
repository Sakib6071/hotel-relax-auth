import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
           <nav>
            <div className=' px-2 py-4 bg-gray-700 grid grid-cols-8 '>
                <div className="logo text-center text-yellow-400 font-serif font-bold text-5xl col-span-3 ">Hotel Relax</div>
                <div className='text-center text-xl font-semibold text-white flex items-center flex items-center'><CustomLink to={"/"}>Home</CustomLink></div>
                <div className='text-center text-xl font-semibold text-white flex items-center'><CustomLink to={"/book"}>Book Now</CustomLink></div>
                <div className='text-center text-xl font-semibold text-white flex items-center'><CustomLink to={"/about"}>About Us</CustomLink></div>
                <div className='text-center text-xl font-semibold text-white flex items-center'><CustomLink to={"/contact"}>Contact Us</CustomLink></div>
                <div className='text-center text-xl font-semibold text-white flex items-center'><CustomLink to={"/registration"}>Registration</CustomLink></div>
                
            </div>
           </nav>
        </div>
    );
};

export default Header;