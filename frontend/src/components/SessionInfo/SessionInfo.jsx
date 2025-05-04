import './SessionInfo.css';
import { formatTime } from '../../utils/time';
import { useOutletContext } from 'react-router-dom';

const SessionInfo = ({attempts}) => {
    const {authStatus} = useOutletContext();
    return(
        <div className="session-info">
            <h2>Info about session</h2>
            <p>Amount of attempts: {authStatus && attempts.count}</p>
            <p>Session average result: {authStatus && formatTime(attempts.avg)}</p>
            <p>Current average of 5: {authStatus && formatTime(attempts.avg5)}</p>
            <p>Current average of 10: {authStatus && formatTime(attempts.avg10)}</p>
            <p>Current average of 25: {authStatus && formatTime(attempts.avg25)}</p>
            <p>Current average of 50: {authStatus && formatTime(attempts.avg50)}</p>
        </div>
    )
}

export default SessionInfo;