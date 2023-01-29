import React, { useEffect, useState } from 'react';
import useRoom from '../../hooks/useRoom';
import Room from '../Room/Room';

const Home = () => {
    const [rooms,setRooms]=useRoom([])

    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-7 text-gray-700'>Choose Your Room</h1>
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