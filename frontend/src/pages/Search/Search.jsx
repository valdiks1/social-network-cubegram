import { useState } from "react";
import UserLinkList from "../../components/UserLink/UserLinkList";
import './Search.css';
import searchI from '../../assets/Search.svg';

const Search = () => {
    const [text, setText] = useState('');
    const users = [
        {id:1, name: "Name"},
        {id:2, name: "Name2"},
        {id:3, name: "Name3"}
    ];
    

    function handleSearch(e) {
        setText(e.target.value);
    }

    return(
        <main className="search">
            <section className="search-input">
                <div className="search-input-inner">
                    <input type="text" value={text} onChange={e => handleSearch(e)}/>
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