import './RecordsComponent.css';

const Record = ({ id, name, country, record }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{country}</td>
            <td>{record}</td>
        </tr>
    )
}

export default Record;