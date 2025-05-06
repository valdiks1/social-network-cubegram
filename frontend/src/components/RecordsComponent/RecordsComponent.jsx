import './RecordsComponent.css';
import Record from './Record';
import { formatTime } from '../../utils/time';

const RecordsComponent = ({ records }) => {
    return (
        <section className="records">
            <div className="card">
                <h2>2x2x2</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name Surname</th>
                            <th>Country</th>
                            <th>Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.cube2.map((record, index) => <Record key={index} id={index + 1} name={record.username} country={record.country} record={formatTime(record.record)} />)}
                    </tbody>
                </table>
                <h2>3x3x3</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name Surname</th>
                            <th>Country</th>
                            <th>Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.cube3.map((record, index) => <Record key={index} id={index + 1} name={record.username} country={record.country} record={formatTime(record.record)} />)}
                    </tbody>
                </table>
                <h2>4x4x4</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name Surname</th>
                            <th>Country</th>
                            <th>Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.cube4.map((record, index) => <Record key={index} id={index + 1} name={record.username} country={record.country} record={formatTime(record.record)} />)}
                    </tbody>
                </table>
                <h2>5x5x5</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name Surname</th>
                            <th>Country</th>
                            <th>Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.cube5.map((record, index) => <Record key={index} id={index + 1} name={record.username} country={record.country} record={formatTime(record.record)} />)}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default RecordsComponent;