import './AddUsersModal.css';
import cross from "../../assets/images/cross.svg";
import removeBtn from "../../assets/images/profile/delete_btn.svg";
import searchI from '../../assets/Search.svg';
import { useState } from 'react';
import { getUsersByName } from '../../services/search';
import { addUserToRoom, removeUserFromRoom, } from '../../services/roomsService';

const AddUsersModal = ({roomId, call, onDestroy, allowed_users, updateRoom }) => {
    const [text, setText] = useState('');
    const [users, setUsers] = useState([])

    const handleSearch = (e) => {
        const userName = e.target.value;
        setText(userName);
        if(userName.length >= 3){
            getUsersByName(userName).then(users => setUsers(users)).catch(e => console.log(e));
        }
    }

    if (!call) {
        return null;
    }

    const closeWnd = (e) => {
        if (e.target.className === 'add-users-modal') {
            onDestroy();
        }
    }

    const handleRemove = (id) => {
        removeUserFromRoom(roomId, id).then(r => updateRoom()).catch(e => alert(e));
    }

    const handleAdd = (id) => {
        if(allowed_users.length < 4){
            addUserToRoom(roomId, id).then(r => updateRoom()).catch(e => console.log(e));
        }else{
            alert("You can't add more than 4 users.");
        }
        
    }

    return (
        <div onClick={closeWnd} className="add-users-modal">
            <div className="inner">
                <div className="head"><img className='close' onClick={onDestroy} src={cross} alt="close" /></div>
                <div className="body">
                    <h3>Added users:</h3>
                    <ul>
                        {allowed_users.map(user => <li key={user.id}>
                            {user.name} <button><img onClick={() => handleRemove(user.id)} src={removeBtn} alt="delete user" /></button>
                        </li>)}
                    </ul>

                    <h3>Add new user:</h3>
                    <div className="search-input">
                        <input
                            type="text"
                            placeholder="Start typing at least 3 characters to search for users by their name"
                            value={text}
                            onChange={handleSearch}
                        />
                        <img className='search-icon' src={searchI} alt="search" />
                    </div>
                    <ul>
                        {users.map(user => <li key={user.id}>
                            {user.name} <button onClick={() => handleAdd(user.id)} className='add-btn'>+</button>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AddUsersModal;