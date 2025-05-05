import './Room.css';
import cubeImg from '../../assets/images/3cube.svg';
import Timer from '../../components/Timer/Timer';
import RoomAttemptsInfo from '../../components/RoomAttemptsInfo/RoomAttemptsInfo';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { getRoom } from '../../services/roomsService';
import { useState } from 'react';
import { formatImg } from '../../utils/roomHelper';
import AddUsersModal from '../../components/AddUsersModal/AddUsersModal';

const Room = () => {
    const {id} = useParams();
    const [room, setRoom] = useState({roomData: {type: '3x3x3'}, allowed_users: []});
    const [addUsersModalState, setAddUsersModalState] = useState(false);

    function updateRoom(){
        getRoom(id).then(room => setRoom(room)).catch(e => console.log);
    }

    useEffect(() => {
        updateRoom()
    },[]);

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
                <RoomAttemptsInfo />
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