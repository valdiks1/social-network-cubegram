import { Link } from "react-router";
import avatar from "../../assets/images/profile/avatar.svg";

const UserLink = ({user}) => {
    return(
        <Link to={`/user/${user.id}`} className="user-link">
            <div className="avatar"><img src={avatar} alt="avatar" /></div>
            <p>{user.name}</p>
        </Link>
    )
}

export default UserLink;