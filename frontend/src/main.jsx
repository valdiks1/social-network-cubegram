import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Main from './pages/Main/Main'
import MyPorfile from './pages/MyProfile/MyProfile'
import Records from './pages/Records/Records'
import Rooms from './pages/Rooms/Rooms';
import AllRooms from './components/AllRooms/AllRooms';
import MyRooms from './components/MyRooms/MyRooms';
import OpenRooms from './components/OpenRooms/OpenRooms';
import SignUp from './pages/SignUp/SignUp';
import { Navigate } from "react-router-dom";
import Search from './pages/Search/Search';
import UserProfile from './pages/UserProfile/UserProfile';

ReactDOM.createRoot(root).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" index element={<Main/>}/>
          <Route path="/myprofile" element={<MyPorfile/>}/>
          <Route path="/user/:id" element={<UserProfile />}/>
          <Route path="/records" element={<Records/>} />
          <Route path="/rooms" element={<Rooms/>}>
            <Route index element={<Navigate to="allrooms" replace />} />
            <Route path='allrooms' element={<AllRooms/>} />
            <Route path='myrooms' element={<MyRooms/>} />
            <Route path='openrooms' element={<OpenRooms/>} />
          </Route>
          <Route path='/search' element={<Search />} />
        </Route>
      <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
);
