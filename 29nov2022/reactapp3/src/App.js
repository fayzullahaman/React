import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";

// import "./App.css";
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
