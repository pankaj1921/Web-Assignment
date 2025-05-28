import './Sidebar.css'
function Sidebar() {
  const navItems = ['Dashboard', 'History', 'Calendar', 'Appointments', 'Statistics', 'Chat', 'Support', 'Setting'];

  return (
    <div className="sidebar">
      <h2 style={{ fontWeight: 'bold', color: '#0d6efd', marginBottom: '2rem' }}>
        Health<span style={{ color: '#000' }}>care.</span>
      </h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {navItems.map((item) => (
          <li key={item} style={{ margin: '1rem 0', color: '#555', cursor: 'pointer' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
