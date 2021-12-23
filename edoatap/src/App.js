import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import { Home } from './components/Home';
import Navigate from './components/Navigate';
import Logobar from './components/Logobar';

function App() {
  return (
       <div className="App">
        <Logobar/>
        <Navigate />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/login' exact element={<Login />}/>
        </Routes>
      </div>
  );
}

export default App;