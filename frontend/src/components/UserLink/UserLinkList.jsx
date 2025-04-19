import UserLink from "./UserLink";
import './UserLink.css'

const UserLinkList = ({users}) => {
    if(users.length === 0){
        return null;
    }

    return(
        <ul className="user-link-list">
            {users.map((user) => <li><UserLink user={user}/></li>)}
        </ul>
    )
}

export default UserLinkList;