import './Room.css';
import cubeImg from '../../assets/images/3cube.svg';
import Timer from '../../components/Timer/Timer';
import RoomAttemptsInfo from '../../components/RoomAttemptsInfo/RoomAttemptsInfo';

const Room = () => {
    return(
        <main>
            <section className="room-info">
                <div className="room-info-inner">
                    <div className="left">
                        <div className="cube-type">
                            <img src={cubeImg} alt="type of cube" />
                            <p>3x3x3</p>
                        </div>
                        <h1>Room: name of room</h1>
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