import './RecordsComponent.css';
import Record from './Record';

const RecordsComponent = () => {
    return (
        <section className="records">
            <div className="card">
                <table>
                    <tr>
                        <th>#</th>
                        <th>Name Surname</th>
                        <th>Country</th>
                        <th>Record</th>
                    </tr>
                    <Record id={1} name={"Name Surname"} country={"country"} record={"5.63"}/>
                    <Record id={2} name={"Name Surname"} country={"country"} record={"5.63"}/>
                    <Record id={3} name={"Name Surname"} country={"country"} record={"5.63"}/>
                    <Record id={4} name={"Name Surname"} country={"country"} record={"5.63"}/>
                    <Record id={5} name={"Name Surname"} country={"country"} record={"5.63"}/>
                    <Record id={6} name={"Name Surname"} country={"country"} record={"5.63"}/>
                    <Record id={7} name={"Name Surname"} country={"country"} record={"5.63"}/>
                    <Record id={8} name={"Name Surname"} country={"country"} record={"5.63"}/>
                    <Record id={9} name={"Name Surname"} country={"country"} record={"5.63"}/>
                    <Record id={10} name={"Name Surname"} country={"country"} record={"5.63"}/>
                </table>
            </div>
        </section>
    )
}

export default RecordsComponent;