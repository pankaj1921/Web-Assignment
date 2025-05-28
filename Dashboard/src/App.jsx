import './App.css';
import Sidebar from './Component/Sidebar';
import Dashboard from './component/Dashboard';
import Schedule from './component/Schedule';
import Calendar from './Component/Calendar';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      
      <Dashboard />
      
      
      
      <Calendar/>
      <Schedule/>
      
      
    </div>
  );
}

export default App;



