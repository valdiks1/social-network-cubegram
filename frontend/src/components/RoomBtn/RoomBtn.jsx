import { Link } from 'react-router';
import './RoomBtn.css';

const RoomBtn = ({img,name,type}) => {
    return(
        <Link to="/room/1" className="room-btn margin-room">
            <div className="room-btn-inner">
                <div className="img">
                    <img src={img} />
                </div>
                <p>{type}</p>
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default RoomBtn;