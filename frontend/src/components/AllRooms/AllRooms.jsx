import CreateRoomBtn from "../CreateRoomBtn/CreateRoomBtn";
import RoomBtn from "../RoomBtn/RoomBtn";
import { useEffect } from "react";
import { useState } from "react";
import { getAllRooms } from "../../services/roomsService";
import { formatImg } from "../../utils/roomHelper";

const AllRooms = () => {
    const [rooms, setRooms] = useState([]);

    const updateRooms = () => {
        getAllRooms().then(rooms => setRooms(rooms)).catch(e => console.log(e));
    }

    useEffect(() => {
        updateRooms()
    }, []);

    return(
        <>
            <CreateRoomBtn updateRooms={updateRooms}/>
            {rooms.map(room => <RoomBtn key={room.id} id={room.id} img={formatImg(room.type)} name={room.room_name} type={room.type} />)}
        </>
    )
}

export default AllRooms;