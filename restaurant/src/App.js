import { Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import About from "./pages/About";
import Admin_login from "./pages/Admin_login";
import Admin_registration from "./pages/Admin_registration";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
// Addmin
import Addmenu from "./admin/component/Addmenu";
import Allmenu from "./admin/component/Allmenu";
import Editmenu from "./admin/component/Editmenu";
import Addmain from "./admin/pages/Addmain";
import Dashboard from "./admin/pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="booking" element={<Booking />} />
        <Route path="team" element={<Team />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="admin_reg" element={<Admin_registration />} />
        <Route path="admin_log" element={<Admin_login />} />
      </Route>
      <Route path="admin" element={<Addmain />}>
        <Route index element={<Dashboard />} />
        <Route path="allmenu" element={<Allmenu />} />
        <Route path="addmenu" element={<Addmenu />} />
        <Route path="editmenu/:id" element={<Editmenu />} />
      </Route>
    </Routes>
  );
}

export default App;
