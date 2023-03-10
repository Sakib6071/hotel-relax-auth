import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({room}) => {
    const {type,price,img,description,id}=room
    const url = `/book/${id}`
    return (
        <div className=' bg-gray-500 rounded-lg shadow-lg'>
            <img className=' rounded-t-lg' src={img} alt="room" />
            <div className='text-white p-3'>
            <p className='font-semibold text-2xl'>{type}</p>
            <p className=' text-xl my-2'>{description}</p>
            <p className='text-2xl'>Price : {price} &#2547;</p>
            
            </div>
            <button className='text-center text-2xl text-yellow-400 bg-gray-800 w-full py-3 rounded-b-lg font-semibold'><Link to={url}>Book Now</Link></button>
        </div>
    );
};

export default Room;