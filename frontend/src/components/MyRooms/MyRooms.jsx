import CreateRoomBtn from "../CreateRoomBtn/CreateRoomBtn";
import RoomBtn from "../RoomBtn/RoomBtn";
import { useState } from "react";
import { useEffect } from "react";
import { getMyRooms } from "../../services/roomsService";
import { formatImg } from "../../utils/roomHelper";

const MyRooms = () => {
    const [rooms, setRooms] = useState([]);

    const updateRooms = () => {
        getMyRooms().then(rooms => setRooms(rooms)).catch(e => console.log(e));
    }

    useEffect(() => {
        updateRooms()
    }, []);

    return(
        <>
            <CreateRoomBtn updateRooms={updateRooms} />
            {rooms.map(room => <RoomBtn key={room.id} id={room.id} img={formatImg(room.type)} name={room.room_name} type={room.type} />)}
        </>
    )
}

export default MyRooms;