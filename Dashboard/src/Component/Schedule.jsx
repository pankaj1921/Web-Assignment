import './Schedule.css'

function Schedule() {
  return (
    <div className="schedule">
      <h3>Upcoming Schedule</h3>
      <div style={{ marginTop: '2rem' }}>
        <p>🦷 Dentist – 09:00 - 11:00</p>
        <p>🏋️‍♂️ Physiotherapy – 11:00 - 12:00</p>
        <p>👁 Ophthalmologist – 14:00</p>
        <p>❤️ Cardiologist – 12:00 (Sat)</p>
      </div>
    </div>
  );
}

export default Schedule;
