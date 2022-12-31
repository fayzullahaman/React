import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Main from "./component/Main";
import Skills from "./component/Skills";

function App() {
  return (
    <Routes>
      <Route path="" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
      </Route>
    </Routes>
  );
}

export default App;
