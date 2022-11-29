import { Outlet } from "react-router-dom";
import "./App.css";
import Topbar from "./component/Topbar";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
