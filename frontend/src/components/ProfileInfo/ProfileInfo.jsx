import './ProfileInfo.css';

const ProfileInfo = ({userData, isMyProfile}) => {
    return(
        <div className="profile-info">
            <div className="profile-info-header">
                <h2>{userData.name}</h2>
                {isMyProfile && <button>Settings</button>}
            </div>
            <p>Country: {userData.country}</p>
            <p>Sex: {userData.sex}</p>
            <p>Records:</p>
            <div className="profile-records">
                <p>
                    <span>2x2x2: 0.00</span>
                    <span>3x3x3: 0.00</span>
                    <span>4x4x4: 0.00</span>
                    <span>5x5x5: 0.00</span>
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo;