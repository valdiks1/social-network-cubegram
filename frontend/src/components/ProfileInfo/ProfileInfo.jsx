import './ProfileInfo.css';
import { formatTime } from '../../utils/time';

const ProfileInfo = ({userData, userRecords, isMyProfile}) => {
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
                    <span>2x2x2: {userRecords['2x2x2'] ? formatTime(userRecords['2x2x2']) : '-'}</span>
                    <span>3x3x3: {userRecords['3x3x3'] ? formatTime(userRecords['3x3x3']) : '-'}</span>
                    <span>4x4x4: {userRecords['4x4x4'] ? formatTime(userRecords['4x4x4']) : '-'}</span>
                    <span>5x5x5: {userRecords['5x5x5'] ? formatTime(userRecords['5x5x5']) : '-'}</span>
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo;