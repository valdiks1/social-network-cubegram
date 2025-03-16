import './SessionInfo.css';

const SessionInfo = () => {
    return(
        <div className="session-info">
            <h2>Info about session</h2>
            <p>Amount of attempts: 5</p>
            <p>Session average result: 14,96</p>
            <p>Current average of 5: 14,96</p>
            <p>Best average of 5: 14,96</p>
            <p>Current average of 10: ...</p>
            <p>Best average of 10: ...</p>
            <p>Current average of 25: ...</p>
            <p>Best average of 25: ...</p>
            <p>Current average of 50: ...</p>
            <p>Best average of 50: ...</p>
        </div>
    )
}

export default SessionInfo;