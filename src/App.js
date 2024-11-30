import './App.css';
import Candidates from './Components/Candidates';
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employee';
import Payroll from './Components/Payroll';
import Recruitment from './Components/Recruitment';
import Schedule from './Components/Schedule';
import SideNav from './Components/SideNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <SideNav />
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/employee" element={<Employee/>}/>
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/payroll" element={<Payroll/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
