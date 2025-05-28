// src/Component/Dashboard.jsx
import './Dashboard.css';
import ActivityChart from './ActivityChart';
import bodyImage from '../assets/body.jpg'; // Use your image

function Dashboard() {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="dashboard-body">
        {/* Left: Body Image */}
        <div className="human-body">
          <img src={bodyImage} alt="Human Body" className="body-img" />
        </div>

        {/* Right: Horizontal Status Cards */}
        <div className="status-cards-horizontal">
          <div className="status-card lungs">🫁 Lungs - Critical</div>
          <div className="status-card teeth">🦷 Teeth - Healthy</div>
          <div className="status-card bone">🦴 Bone - Weak</div>
        </div>
      </div>

      <ActivityChart />
    </div>
  );
}

export default Dashboard;
