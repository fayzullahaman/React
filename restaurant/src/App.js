import { Route, Routes } from "react-router-dom";
import Addmenu from "./admin/component/Addmenu";
import Allmenu from "./admin/component/Allmenu";
import Editmenu from "./admin/component/Editmenu";
import Addmain from "./admin/pages/Addmain";
import Dashboard from "./admin/pages/Dashboard";
import Home from "./component/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Route>
      <Route path="/" element={<Addmain />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/allmenu" element={<Allmenu />} />
        <Route path="/addmenu" element={<Addmenu />} />
        <Route path="/editmenu/:id" element={<Editmenu />} />
      </Route>
    </Routes>
  );
}

export default App;
