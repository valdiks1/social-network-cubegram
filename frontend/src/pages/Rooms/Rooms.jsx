import RoomsMenuBar from "../../components/RoomsMenuBar/RoomsMenuBar";
import { Outlet } from "react-router";
import './Rooms.css';

const Rooms = () => {
    return(
        <main>
            <RoomsMenuBar />
            <section className="rooms">
                <div className="rooms-inner">
                    <Outlet />
                </div>
            </section>
        </main>
    )
}

export default Rooms;