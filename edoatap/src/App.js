import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import Home from './components/Home';
import Navigate from './components/Navigate';
import Logobar from './components/Logobar';
import Footer from './components/Footer';
import ApplicationInfo from './components/ApplicationsInfo';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import UpdateDashboard from './components/UpdateDashboard';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
       <div className="App">
        <Logobar />
        <Navigate />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/login' exact element={<Login />}/>
          <Route path='/odigos-etiseon' exact element={<ApplicationInfo />}/>
          <Route path='/update_dashboard' exact element={<UpdateDashboard />}/>
          <Route path='/register' exact element={<Register />}/>
          <Route path='/dashboard' exact element={<Dashboard />}/>
          <Route path='/epikoinonia' exact element={<Contact/>}/>
          <Route path='/admindashboard' exact element={<AdminDashboard />}/>
        </Routes>
        <br/><br/>
        <Footer />
      </div>
  );
}

export default App;
