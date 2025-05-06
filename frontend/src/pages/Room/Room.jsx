import './Room.css';
import cubeImg from '../../assets/images/3cube.svg';
import Timer from '../../components/Timer/Timer';
import RoomAttemptsInfo from '../../components/RoomAttemptsInfo/RoomAttemptsInfo';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { getRoom, havePermission } from '../../services/roomsService';
import { useState } from 'react';
import { formatImg } from '../../utils/roomHelper';
import AddUsersModal from '../../components/AddUsersModal/AddUsersModal';
import { Link } from 'react-router';

const Room = () => {
    const {id} = useParams();
    const [room, setRoom] = useState({roomData: {type: '3x3x3'}, allowed_users: [], usersData: []});
    const [addUsersModalState, setAddUsersModalState] = useState(false);
    const [havePermissionState, setHavePermissionState] = useState(false);

    function updateRoom(){
        getRoom(id).then(room => setRoom(room)).catch(e => console.log);
    }

    useEffect(() => {
        havePermission(id).then(r => setHavePermissionState(true)).catch(e => setHavePermissionState(false))
        updateRoom();
    },[]);

    if(!havePermissionState){
        return(
            <main>
                <h3>You do not have permission to be in this room. Please go back. <Link to="/rooms">Rooms</Link></h3>
            </main>
        )
    }

    return(
        <main>
            <section className="room-info">
                <div className="room-info-inner">
                    <div className="left">
                        <div className="cube-type">
                            <img src={formatImg(room.roomData.type)} alt="type of cube" />
                            <p>{room.roomData.type}</p>
                        </div>
                        <h1>Room: {room.roomData.name}</h1>
                    </div>
                    <div className="right">
                        <button>Settings</button>
                        <button onClick={() => setAddUsersModalState(true)}>Add users</button>
                    </div>
                </div>
            </section>
            <section className="room-timer">
                <Timer updateRoom={updateRoom} roomId={id} type={room.roomData.type}/>
            </section>
            <section className="room-attempts-info">
                <RoomAttemptsInfo usersData={room.usersData}/>
            </section>
            <AddUsersModal 
                roomId={id} 
                allowed_users={room.allowed_users} 
                call={addUsersModalState} 
                onDestroy={() => setAddUsersModalState(false)}
                updateRoom={updateRoom}
            />
        </main>
    )
}

export default Room;