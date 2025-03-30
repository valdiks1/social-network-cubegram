import './CreateRoomBtn.css';
import plusImg from '../../assets/images/rooms/plus.svg';

const CreateRoomBtn = () => {
    return (
        <div className="create-room-btn margin-room">
            <div className="create-room-btn-inner">
                <div className="img">
                    <img src={plusImg} />
                </div>
                <p>Create room</p>
            </div>

        </div>
    )
}

export default CreateRoomBtn;