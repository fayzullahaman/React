import {Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import About from './pages/About';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
        <Route path="" element={<Main/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
    </Routes>
  );
}

export default App;
