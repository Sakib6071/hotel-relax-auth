import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Home = () => {
    const [rooms,setRooms]=useState([])
    useEffect(()=>{
        fetch('hotel.json')
        .then(res=>res.json())
        .then(data=>setRooms(data))
        console.log(rooms);
    },[])
    return (
        <div>
            <div className='grid grid-cols-3 gap-10 my-10 mx-5'>
            {
                rooms.map(room=><Room
                key={room.id}
                room={room}
                ></Room>)
            }
            </div>
        </div>
    );
};

export default Home;