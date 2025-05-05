import './Room.css';
import cubeImg from '../../assets/images/3cube.svg';
import Timer from '../../components/Timer/Timer';
import RoomAttemptsInfo from '../../components/RoomAttemptsInfo/RoomAttemptsInfo';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { getRoom } from '../../services/roomsService';
import { useState } from 'react';
import { formatImg } from '../../utils/roomHelper';

const Room = () => {
    const {id} = useParams();
    const [room, setRoom] = useState({roomData: {}});

    useEffect(() => {
        getRoom(id).then(room => setRoom(room)).catch(e => console.log);
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
                        <button>Add users</button>
                    </div>
                </div>
            </section>
            <section className="room-timer">
                <Timer type={'3x3x3'}/>
            </section>
            <section className="room-attempts-info">
                <RoomAttemptsInfo />
            </section>
        </main>
    )
}

export default Room;