import CreateRoomBtn from "../CreateRoomBtn/CreateRoomBtn";
import RoomBtn from "../RoomBtn/RoomBtn";
import cube2 from '../../assets/images/2cube.svg';
import cube3 from '../../assets/images/3cube.svg';
import cube4 from '../../assets/images/4cube.svg';
import cube5 from '../../assets/images/5cube.svg';

const OpenRooms = () => {
    return(
        <>
            <CreateRoomBtn />
            <RoomBtn img={cube3} name={'Name of room'} type='3x3x3' />
            <RoomBtn img={cube2} name={'Name of room'} type='2x2x2' />
            <RoomBtn img={cube4} name={'Name of room'} type='4x4x4' />
            <RoomBtn img={cube5} name={'Name of room'} type='5x5x5' />
            <RoomBtn img={cube3} name={'Name of room'} type='3x3x3' />
            <RoomBtn img={cube2} name={'Name of room'} type='2x2x2' />
            <RoomBtn img={cube5} name={'Name of room'} type='5x5x5' />
        </>
    )
}

export default OpenRooms;