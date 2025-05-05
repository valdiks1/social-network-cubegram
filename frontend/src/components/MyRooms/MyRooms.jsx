import CreateRoomBtn from "../CreateRoomBtn/CreateRoomBtn";
import RoomBtn from "../RoomBtn/RoomBtn";
import cube2 from '../../assets/images/2cube.svg';
import cube3 from '../../assets/images/3cube.svg';
import cube4 from '../../assets/images/4cube.svg';
import cube5 from '../../assets/images/5cube.svg';
import { useState } from "react";
import { useEffect } from "react";
import { getMyRooms } from "../../services/roomsService";

const MyRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getMyRooms().then(rooms => setRooms(rooms)).catch(e => console.log(e));
    }, []);

    const formatImg = (type) => {
        switch(type){
            case '2x2x2':
                return cube2;
            case '3x3x3':
                return cube3;
            case '4x4x4':
                return cube4;
            case '5x5x5':
                return cube5;
        }
    }
    return(
        <>
            <CreateRoomBtn />
            {rooms.map(room => <RoomBtn key={room.id} id={room.id} img={formatImg(room.type)} name={room.room_name} type={room.type} />)}
        </>
    )
}

export default MyRooms;