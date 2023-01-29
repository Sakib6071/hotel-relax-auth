import { useEffect, useState } from "react"

const useRoom = () =>{
    const [rooms,setRooms]=useState([])
    useEffect(()=>{
        fetch('/hotel.json')
        .then(res=>res.json())
        .then(data=>setRooms(data))
        
    },[])
    return [rooms,setRooms]
}
export default useRoom