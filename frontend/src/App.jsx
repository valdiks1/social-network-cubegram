import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import { useState } from "react";


function App() {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <>
      <Navbar authStatus={authStatus} setAuthStatus={setAuthStatus}/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
