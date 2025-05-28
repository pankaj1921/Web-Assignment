// src/Component/Calendar.jsx
import './Calendar.css';

function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="calendar">
      <h4>October 2025</h4>
      <div className="calendar-grid">
        {days.map(day => (
          <div key={day} className="calendar-day">{day}</div>
        ))}
        {dates.map(date => (
          <div key={date} className="calendar-date">{date}</div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
