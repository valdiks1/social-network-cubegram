import './CreateRoomBtn.css';
import plusImg from '../../assets/images/rooms/plus.svg';
import { useState } from 'react';
import CreateRoomModal from '../CreateRoomModal/CreateRoomModal';

const CreateRoomBtn = () => {
    const [modalState, setModalState] = useState(false);

    return (
        <>
            <div onClick={() => setModalState(true)} className="create-room-btn margin-room">
                <div className="create-room-btn-inner">
                    <div className="img">
                        <img src={plusImg} />
                    </div>
                    <p>Create room</p>
                </div>
            </div>
            <CreateRoomModal call={modalState} onDestroy={() => setModalState(false)} />
        </>

    )
}

export default CreateRoomBtn;