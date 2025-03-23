import RecordsComponent from '../../components/RecordsComponent/RecordsComponent';
import RecordsFilther from '../../components/RecordsFilther/RecordsFilther';
import './Records.css';

const Records = () => {
    return(
        <main>
            <RecordsFilther />
            <RecordsComponent />
        </main>
    )
}

export default Records;