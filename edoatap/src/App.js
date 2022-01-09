import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import {Home} from './components/Home';
import Navigate from './components/Navigate';
import Logobar from './components/Logobar';
import ApplicationInfo from './components/ApplicationsInfo';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import UpdateDashboard from './components/UpdateDashboard';

function App() {
  return (
       <div className="App">
        <Logobar/>
        <Navigate />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/login' exact element={<Login />}/>
          <Route path='/odigos-etiseon' exact element={<ApplicationInfo />}/>
          <Route path='/register' exact element={<Register />}/>
          <Route path='/dashboard' exact element={<Dashboard />}/>
          <Route path='/update_dashboard' exact element={<UpdateDashboard />}/>
        </Routes>
      </div>
  );
}

export default App;