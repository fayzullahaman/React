import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Main from "./component/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
