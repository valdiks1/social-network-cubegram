import CreateRoomBtn from "../CreateRoomBtn/CreateRoomBtn";
import RoomBtn from "../RoomBtn/RoomBtn";
import { formatImg } from "../../utils/roomHelper";
import { useState } from "react";
import { useEffect } from "react";
import { getOpenRooms } from "../../services/roomsService";

const OpenRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getOpenRooms().then(r => setRooms(r)).catch(e => console.log(e));
    }, []);

    return(
        <>
            <CreateRoomBtn />
            {rooms.map(room => <RoomBtn key={room.id} id={room.id} img={formatImg(room.type)} name={room.room_name} type={room.type} />)}
        </>
    )
}

export default OpenRooms;