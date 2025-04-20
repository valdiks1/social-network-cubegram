import { useState } from "react";
import UserLinkList from "../../components/UserLink/UserLinkList";
import './Search.css';
import searchI from '../../assets/Search.svg';
import { getUsersByName } from "../../services/search";

const Search = () => {
    const [text, setText] = useState('');
    const [users, setUsers] = useState([]);
    

    function handleSearch(e) {
        const currentText = e.target.value;
        setText(currentText);
        if(currentText.length >= 3){
            getUsersByName(currentText).then(users => {
                setUsers(users);
            }).catch(e => console.log(e));
        }
    }

    return(
        <main className="search">
            <section className="search-input">
                <div className="search-input-inner">
                    <input 
                        placeholder="Start typing at least 3 characters to search for users by their name" 
                        type="text" 
                        value={text} 
                        onChange={e => handleSearch(e)}/>
                    <img className="search-icon" src={searchI} alt="search" />
                </div>
            </section>
            <section className="user-list">
                <UserLinkList users={users}/>
            </section>
        </main>
    )
}

export default Search;