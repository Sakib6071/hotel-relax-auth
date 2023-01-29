import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRoom from "../../hooks/useRoom";

const Book = () => {
  const { ID } = useParams();
  const [rooms, setRooms] = useRoom([]);
  // useEffect(()=>{
  //     fetch('hotel.json')
  //     .then(res=>res.json())
  //     .then(data=>setRooms(data))

  // },[])
  const specificItem = rooms.find((room) => (parseInt(room.id) === parseInt(ID)));
  console.log( specificItem);
  return (
    <div>
      <div className=" my-5 rounded-lg w-1/2 mx-auto mt-4 bg-gray-600" >
        <div className="flex items-center justify-center">
          <img className=" rounded-t-lg w-full text-center" src={specificItem?.img} alt="" />
        </div>
        <p className="  text-white mx-2 text-5xl font-bold my-3">{specificItem?.type}</p>
        <p className=" text-white mx-2 text-xl">{specificItem?.description}</p>
        <p className=" text-white mx-2 text-4xl font-semibold">{specificItem?.price} &#2547;</p>
        <button className=" text-white text-center w-full bg-green-500 py-2   text-3xl rounded-lg mt-3">Confirm</button>
      </div>
    </div>
  );
};

export default Book;
