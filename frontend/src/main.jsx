import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Main from './pages/Main/Main'
import MyPorfile from './pages/MyProfile/MyProfile'
import Records from './pages/Records/Records'
import Rooms from './pages/Rooms/Rooms';

ReactDOM.createRoot(root).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" index element={<Main/>}/>
          <Route path="/myprofile" element={<MyPorfile/>}/>
          <Route path="/records" element={<Records/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
);

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" index element={<Main/>}/>
          <Route path="/myprofile" element={<MyPorfile/>}/>
          <Route path="/records" element={<Records/>}/>
          <Route path="/rooms" element={<Rooms/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)*/
