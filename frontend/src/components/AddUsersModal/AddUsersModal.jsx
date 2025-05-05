import './AddUsersModal.css';
import cross from "../../assets/images/cross.svg";
import removeBtn from "../../assets/images/profile/delete_btn.svg";
import searchI from '../../assets/Search.svg';
import { useState } from 'react';

const AddUsersModal = ({ call, onDestroy }) => {
    const [text, setText] = useState('');

    const handleSearch = (e) => {
        setText(e.target.value);
    }

    if (!call) {
        return null;
    }

    const closeWnd = (e) => {
        if (e.target.className === 'add-users-modal') {
            onDestroy();
        }
    }

    return (
        <div onClick={closeWnd} className="add-users-modal">
            <div className="inner">
                <div className="head"><img className='close' onClick={onDestroy} src={cross} alt="close" /></div>
                <div className="body">
                    <h3>Added users:</h3>
                    <ul>
                        <li>
                            Vlad <button><img src={removeBtn} alt="delete user" /></button>
                        </li>
                        <li>
                            Artur <button><img src={removeBtn} alt="delete user" /></button>
                        </li>
                        <li>
                            Max <button><img src={removeBtn} alt="delete user" /></button>
                        </li>
                        <li>
                            Adam <button><img src={removeBtn} alt="delete user" /></button>
                        </li>
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
                        <li>
                            Vlad <button className='add-btn'>+</button>
                        </li>
                        <li>
                            Artur <button className='add-btn'>+</button>
                        </li>
                        <li>
                            Max <button className='add-btn'>+</button>
                        </li>
                        <li>
                            Adam <button className='add-btn'>+</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AddUsersModal;