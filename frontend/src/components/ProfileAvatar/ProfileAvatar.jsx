import './ProfileAvatar.css';
import avatarI from "../../assets/images/profile/avatar.png";

const ProfileAvatar = () => {
    return(
        <div className="avatar">
            <div className="avatar-inner">
                <img src={avatarI} alt="avatar" />
            </div>
        </div>
    )
}

export default ProfileAvatar;