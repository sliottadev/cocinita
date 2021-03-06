import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainScreen from './main_screen/MainScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListScreen from './list_screen/ListScreen';
import DetailsScreen from './details_screen/DetailsScreen'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Link 
          style={{ display: "block", margin: "1rem 0" }}
          to={`/recetas`}> RECETAS
        </Link> */}
        <Routes>
          <Route path="/" element={<DetailsScreen/>}/>
          <Route path="lista" element={<ListScreen/>} />
          <Route path="mogos" element={<MainScreen/>} />
        </Routes>       
      </div>
    </BrowserRouter>
  );
}

export default App;
